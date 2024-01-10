export default class Contact {
	
	_id:string = "";
	firstname:string = "";
	lastname:string = "";
	email:string = "";
	phone:string = "";
	
	constructor(firstname:string,lastname:string,email:string,phone:string,id:string) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this._id = id;
	}
}