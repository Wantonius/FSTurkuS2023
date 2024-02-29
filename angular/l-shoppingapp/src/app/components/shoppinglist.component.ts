import {Component,OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';
import {LoginService} from '../services/loginservice.service';
import {Router} from '@angular/router';

@Component({
	selector:"shoppinglist",
	templateUrl:"./shoppinglist.component.html"
})
export class ShoppingList implements OnInit {
	
	list:ShoppingItem[] = [];
	
	constructor(private shopping:ShoppingService,private login:LoginService,private router:Router) {}

	ngOnInit() {
		if(this.login.isUserLogged()) {
			this.getList();
		} else {
			this.router.navigate(["/"]);
		}
	}
	
	getList() {
		this.shopping.getList().subscribe({
			next:(data) => this.list = data,
			error:(error) => {
				if(error.status === 403) {
					this.login.setLoginState(false,"");
					this.router.navigate(["/"])
				} else {
					console.log(error)
				}
			},
			complete: () => console.log("Get List Done")
		})
	}
	
	removeItem(id:number) {
		this.shopping.removeItem(id).subscribe({
			next:(data) => this.getList(),
			error:(error) => {
				if(error.status === 403) {
					this.login.setLoginState(false,"");
					this.router.navigate(["/"])
				} else {
					console.log(error)
				}
			},
			complete: () => console.log("Remove item done")
		})
	}
}