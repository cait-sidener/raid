import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IWeatherForecast } from '../weather';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	private apiUrl = 'api/SampleData/WeatherForecasts';

	constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

	getWeather(): Observable<IWeatherForecast[]> {
		return this.http.get<IWeatherForecast[]>(this.baseUrl + this.apiUrl).pipe(
			tap(data => console.log('Weather Data:', data)), catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
		else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
		return throwError(errorMessage);
	}
}
