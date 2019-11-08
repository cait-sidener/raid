import { Component, ViewChild, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { RailroadAgreementService } from '../services/railroad-agreement.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RailroadAgreement } from '../models/railroad-agreement';
import { ModalService } from '../../shared/modal/_services';
import { AgreementInfoComponent } from '../agreement-info/agreement-info.component';

@Component({
  selector: 'app-railroad-agreements',
  templateUrl: './railroad-agreements.component.html',
  styleUrls: ['./railroad-agreements.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //This applies to children as well. Prevents default change detection; it is inefficient to update EVERY component when one thing changes.
})

export class RailroadAgreementsComponent implements OnInit {

	@ViewChild(MatSort, {static: true}) sort: MatSort;

	dataSource: MatTableDataSource<RailroadAgreement>;
	displayedColumns: string[] = ['agreementNumber', 'countyName', 'railroadCompany', 'lastAgreementExp', 'location', 'star'];

	isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
	expandedElement: any;

  constructor(private cdr: ChangeDetectorRef, private railroadAgreementService: RailroadAgreementService, private dialog: ModalService) {
	  this.cdr.detach();
  }

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

  ngOnInit() {
	  this.railroadAgreementService.getRailroadAgreements().subscribe(results => {
		  if (!results) {
			  return;
		  }
		  this.dataSource = new MatTableDataSource(results);
		 this.dataSource.sort = this.sort;
		  this.check();
	  })
  }

  applyFilter(filterValue: string) {
	  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
	  this.dialog.show(AgreementInfoComponent);
	  this.check();
  }

}
