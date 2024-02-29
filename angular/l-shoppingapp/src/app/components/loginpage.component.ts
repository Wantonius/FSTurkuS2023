import {Component,OnInit} from '@angular/core';
import {LoginService} from '../services/loginservice.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
	selector:"loginpage",
	templateUrl:"./loginpage.component.html",
	styleUrls:["./loginpage.component.css"]
})
export class LoginPage implements OnInit {
	user:User = new User("","");
	message:string = "";
	
	constructor(private loginService:LoginService, private router:Router) {}

	
	ngOnInit() {
		if(this.loginService.isUserLogged()) {
			this.router.navigate(["list"])
		}
	}
	
	
	register() {
		this.loginService.register(this.user).subscribe({
			next:(data) => this.message = data.message,
			error:(error) => {
				if(error.status === 409) {
					this.message = "Username already in use"
				} else {
					this.message = error.message
				}	
			},
			complete:() => console.log("Register done")
		})
	}

	login() {
		this.loginService.login(this.user).subscribe({
			next:(data) => {
				this.message = "Login success";
				this.loginService.setLoginState(true,data.token);
				this.router.navigate(["/list"])
			},
			error:(error) => this.message = error.message,
			complete:() => console.log("Login complete")
		})
	}
}