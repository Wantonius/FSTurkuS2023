import React,{useState} from 'react';
import Contact from '../models/Contact';
import {useDispatch} from 'react-redux';

interface State {
	firstname:string;
	lastname:string;
	email:string;
	phone:string;
}

const ContactForm = (props) => {
	
	const [state,setState] = useState<State>({
		firstname:"",
		lastname:"",
		email:"",
		phone:""
	})
	
	const dispatch = useDispatch();
	
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
		let contact = new Contact(state.firstname,state.lastname,state.email,state.phone,0);
		dispatch({
			type:"ADD_CONTACT",
			contact:contact
		})
		setState({
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		})
	}
	return(
		<div style={{"width":"40%","backgroundColor":"pink","margin":"auto","textAlign":"center"}}>
			<form className="m-3" onSubmit={onSubmit}>
				<label className="form-label" htmlFor="firstname">First Name</label>
				<input type="text"
						name="firstname"
						id="firstname"
						className="form-control"
						onChange={onChange}
						value={state.firstname}/>
				<label className="form-label" htmlFor="lastname">Last Name</label>
				<input type="text"
						name="lastname"
						id="lastname"
						className="form-control"
						onChange={onChange}
						value={state.lastname}/>
				<label className="form-label" htmlFor="email">Email</label>
				<input type="email"
						name="email"
						id="email"
						className="form-control"
						onChange={onChange}
						value={state.email}/>
				<label className="form-label" htmlFor="phone">Phone</label>
				<input type="tel"
						name="phone"
						id="phone"
						className="form-control"
						onChange={onChange}
						value={state.phone}/>						
				<input type="submit" className="btn btn-primary" value="Add"/>
			</form>
		</div>
	)
}

export default ContactForm;