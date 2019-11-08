import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RailroadModule } from './railroad/railroad.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule,
		 MatToolbarModule } from '@angular/material';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule,
		HomeModule,
		MatSidenavModule,
		MatToolbarModule,
		RailroadModule,
		EmployeeModule,
		AppRoutingModule,
		BrowserAnimationsModule, //Contains '**' path, must come last; import order matters
	],
	entryComponents: [
		WelcomeComponent, //Dynamically loaded components
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
