import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	employeeList_Saved: IEmployee[] = [];
	employeeList_Show = false;
	employeeList_LastUpdate: Date;

	private apiUrl = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: HttpClient) { }

	getEmployees(): Observable<IEmployee[]> {
		return this.http.get<IEmployee[]>(this.apiUrl).pipe(
			tap(data => console.log('Employee Data:', data)), catchError(this.handleError)
		);
	}

	getEmployee(id: number): Observable<IEmployee> {
		return this.http.get<IEmployee>(`${this.apiUrl}/${id}`).pipe(
			tap(data => console.log(`Employee ${id} Data:`, data)), catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
		else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
		return throwError(errorMessage);
	}
}
