import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InvalidIDCanActivateGuard implements CanActivate {
	constructor(private router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let id: number = +next.url[1].path;
		if (isNaN(id) || id < 1) {
			alert("Invalid Employee ID");
			this.router.navigate(['/employees']);
			return false;
		}
		return true;
	}
}
