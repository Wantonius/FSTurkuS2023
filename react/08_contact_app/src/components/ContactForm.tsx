import {useState} from 'react';
import Contact from '../models/Contact';

interface State {
	firstname:string;
	lastname:string;
	email:string;
	phone:string;
}

interface Props {
	addContact(contact:Contact):void;
}

const ContactForm = (props:Props) => {
	
	const [state,setState] = useState<State>({
		firstname:"",
		lastname:"",
		email:"",
		phone:""
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let contact = new Contact(state.firstname,state.lastname,state.email,state.phone,"");
		props.addContact(contact);
		setState({
			firstname:"",
			lastname:"",
			email:"",
			phone:""			
		})
	}
	
	return (
	<div style={{"width":"40%","backgroundColor":"lightblue","margin":"auto","textAlign":"center"}}>
		<form onSubmit={onSubmit} className="m-3">
			<label htmlFor="firstname" className="form-label">First Name</label>
			<input type="text"
					name="firstname"
					id="firstname"
					className="form-control"
					onChange={onChange}
					value={state.firstname}/>
			<br/>
			<label htmlFor="lastname" className="form-label">Last Name</label>
			<input type="text"
					name="lastname"
					id="lastname"
					className="form-control"
					onChange={onChange}
					value={state.lastname}/>
			<br/>
			<label htmlFor="email" className="form-label">Email</label>
			<input type="email"
					name="email"
					id="email"
					className="form-control"
					onChange={onChange}
					value={state.email}/>
			<br/>
			<label htmlFor="phone" className="form-label">Phone</label>
			<input type="tel"
					name="phone"
					id="phone"
					className="form-control"
					onChange={onChange}
					value={state.phone}/>
			<br/>
			<input type="submit" value="Add" className="btn btn-primary"/>
		</form>
	</div>
	)
}

export default ContactForm;