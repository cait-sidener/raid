import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IEmployee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../_services';
import { Subscription } from 'rxjs';

@Component({
	//selector: 'app-employee-detail', //Used in routing; doesn't need a tag selector.
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
	id: number;
	employee: IEmployee;

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.

	constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
		this.cdr.detach();
	}

	test(): void {
		console.log("Was checked. E D");
	}

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		this.id = +this.route.snapshot.paramMap.get('id'); //'+' shortcut to convert to numeric from string
		this.subscription.add(this.employeeService.getEmployee(this.id).subscribe(
			employee => {
				this.employee = employee;
				this.check();
			},
			error => console.log(error)
		));
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}

	onBack(): void {
		this.router.navigate(['/employees']);
	}
}
