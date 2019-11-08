import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './_pipes';
import { WeatherComponent } from './weather/weather.component';
import { TimeComponent } from './time/time.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	declarations: [
		ConvertToSpaces,
		WeatherComponent,
		TimeComponent,
		ModalComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		ConvertToSpaces,
		WeatherComponent,
		TimeComponent,
		ModalComponent
	]
})
export class SharedModule { }
