import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IWeatherForecast } from './weather';
import { WeatherService } from './_services';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit, OnDestroy {
	forecasts: IWeatherForecast[];
	lastUpdated: Date;

	private subscription: Subscription = new Subscription();

	constructor(private cdr: ChangeDetectorRef, private weatherService: WeatherService) {
		this.cdr.detach();
	}

	test(): void {
		console.log("Was checked. W");
	}

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}


	ngOnInit(): void {
		this.subscription.add(interval(10000).pipe( //Refresh triggered by the interval observable.
			startWith(0), //Get data initially
			switchMap(() => this.weatherService.getWeather())
		).subscribe(
			forecasts => {
				this.forecasts = forecasts;
				this.lastUpdated = new Date();
				this.check();
			},
			error => console.log(error)
		));
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}
}
