import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector:"secret",
	templateUrl:"./secret.component.html"
})
export class Secret implements OnInit {
	
	name:string = "";
	
	constructor(private route:ActivatedRoute) {}
	
	ngOnInit() {
		this.route.queryParams.subscribe({
			next:(params) => {this.name = params['name']}
		})
	}
}