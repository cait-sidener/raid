import { Component, Input } from '@angular/core';

@Component({
	//selector: 'app-welcome', //Used in routing; doesn't need a tag selector.
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
	@Input() id: number;

	constructor() { }

}
