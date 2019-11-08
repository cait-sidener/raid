import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../_services';
import { Subscription, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
	//selector: 'app-employees', //Used in routing; doesn't need a tag selector.
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
	showEmployees: boolean;
	lastUpdated: Date;

	filteredEmployees: IEmployee[] = [];
	employees: IEmployee[] = [];

	private _listFilter: string;
	get listFilter(): string {
		return this._listFilter; //Avoid manipulating the data in the getter, formatting/etc. should be done with pipes.
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredEmployees = this._listFilter ? this.performFilter(this.listFilter) : this.employees;
	}

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.
	private refreshData: Subject<void> = new Subject<void>(); //Acts as an observable that can be manually triggered.

	constructor(private cdr: ChangeDetectorRef, private employeeService: EmployeeService) {
		this.cdr.detach();
	}

	test(): void {
		console.log("Was checked. E L");
	}

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		this.showEmployees = this.employeeService.employeeList_Show; //Allow the setting to persist even after navigation by storing it in the service.
		this.filteredEmployees = this.employees = this.employeeService.employeeList_Saved; //Temporary until replaced by the initial call to API.
		this.lastUpdated = this.employeeService.employeeList_LastUpdate; //Shows that the data is outdated.
		this.check();
		this.subscription.add(this.refreshData.pipe( //Refresh triggered by the Subject observable.
			startWith(0), //Get data initially
			switchMap(() => this.employeeService.getEmployees())
		).subscribe(
			employees => {
				this.filteredEmployees = this.employees = employees; //Shuffle data to show that the data is fresh.
				this.lastUpdated = new Date();
				this.check();
			},
			error => console.log(error)
		));
	}

	ngOnDestroy(): void {
		this.employeeService.employeeList_Show = this.showEmployees; //Store state for later.
		this.employeeService.employeeList_Saved = this.employees; 
		this.employeeService.employeeList_LastUpdate = this.lastUpdated; 
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}

	trackById(index: number, employee: IEmployee): number { //Greatly improves the performance of *ngFor when updating the data.
		if (!employee) return null;
		console.log(employee);
		return employee.id;
	}

	performFilter(filterBy: string): IEmployee[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.employees.filter((employee: IEmployee) => employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

	toggleEmployees(): void {
		this.showEmployees = !this.showEmployees;
		this.check();
	}

	refreshEmployees(): void {
		this.refreshData.next(); //Trigger observable.
	}

	shuffleEmployees(): void {
		this.filteredEmployees = this.shuffle(this.filteredEmployees);
		this.check();
	}

	private shuffle(employees: IEmployee[]): IEmployee[] {
		for (let x = employees.length - 1; x > 0; x--) {
			const y = Math.floor(Math.random() * (x + 1));
			[employees[x], employees[y]] = [employees[y], employees[x]];
		}
		return employees;
	}
}
