import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit {
	date: Date;
	styles = {
		color: '#000' //Default Color Value
	};

	constructor(private cdr: ChangeDetectorRef) {
		this.cdr.detach();
	}

	test(): void {
		console.log("Was checked. T");
	}

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		this.date = new Date();
		setInterval(() => {
			this.date = new Date();
			this.styles.color = `#${this.intToRGB(this.hashCode(this.date.toString()))}`;
			this.check();
		}, 1000);
	}

	hashCode(str: { length: number; charCodeAt: (arg: number) => number; }): number {
		var hash = 0;
		for (var i = 0; i < str.length; i++)
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		return hash;
	}

	intToRGB(i: number): string {
		var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
		return "00000".substring(0, 6 - c.length) + c;
	}
}
