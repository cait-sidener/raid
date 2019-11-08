import {Component, OnInit } from '@angular/core';
import { AgreementInfo } from '../models/agreement-info';
import { AgreementInfoService } from '../services/agreement-info.service';

@Component({
  selector: 'app-agreement-info',
  templateUrl: './agreement-info.component.html',
  styleUrls: ['./agreement-info.component.css']
})
export class AgreementInfoComponent implements OnInit {
	agreementInfo$: AgreementInfo[];

	constructor(private siteInfoService: AgreementInfoService) {}

	ngOnInit() {
	  return this.siteInfoService.getAgreementInfo()
	  .subscribe(data => this.agreementInfo$ = data);
	}

   }
