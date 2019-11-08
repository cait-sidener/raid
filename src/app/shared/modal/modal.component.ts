import { Component, AfterViewInit, ElementRef, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalService } from './_services';
import { IModal } from './modal';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit, OnInit, OnDestroy {
	isFullPage: boolean;
	private isStatic: boolean;

	private subscription: Subscription = new Subscription()

	constructor(private cdr: ChangeDetectorRef, private modalService: ModalService, private elementRef: ElementRef) {
		this.cdr.detach();
	}

	test(): void {
		console.log("Was checked. M");
	}

	check(): void { //WIP; Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		this.subscription.add(this.modalService.modal_added.subscribe((config: IModal) => {
			this.isStatic = config.isStatic || false;
			this.isFullPage = config.isFullPage || false;
			this.check();
			this.show();
		}));
		this.subscription.add(this.modalService.modal_removing.subscribe(() => this.hide()));
	}

	ngAfterViewInit(): void {
		this.elementRef.nativeElement.querySelector('.modal-close').addEventListener('click', this.closeModal.bind(this));
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed)
			this.subscription.unsubscribe();
	}

	closeModal(event: { target: any; currentTarget: any; }) {
		if (event.target !== event.currentTarget || (event.target.classList.contains('modal') && this.isStatic)) return;
		this.modalService.hide();
	}

	private show() {
		let nativeElement: any = this.elementRef.nativeElement.querySelector('.modal');
		//Animations to FadeIn?
		nativeElement.style.display = 'block';
	}

	private hide() {
		let nativeElement: any = this.elementRef.nativeElement.querySelector('.modal');
		//Animations to FadeOut?
		nativeElement.style.display = 'none';
	}
}
