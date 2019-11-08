import { Component, Input } from '@angular/core';

@Component({
//   selector: 'app-railroad-home',
  templateUrl: './railroad-home.component.html',
  styleUrls: ['./railroad-home.component.css']
})
export class RailroadHomeComponent  {
	@Input() id: number;

  constructor() { }

}
