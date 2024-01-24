import React,{useState} from 'react';
import User from '../models/User';
import useAction from '../hooks/useAction';

interface State {
	username:string;
	password:string;
}

const LoginPage = () => {
	
	const {register,login,setError} = useAction();
	
	const [state,setState] = useState<State>({
		username:"",
		password:""
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onRegister = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			setError("Username must be atleast 4 and password 8 characters long");
			return;
		}
		let user = new User(state.username,state.password);
		register(user);
	}
	
	const onLogin = (event:React.SyntheticEvent) => {
		event.preventDefault();
		if(state.username.length < 4 || state.password.length < 8) {
			setError("Username must be atleast 4 and password 8 characters long");
			return;
		}
		let user = new User(state.username,state.password);
		login(user);
	}
	
	return(
		<div style={{"width":"40%","backgroundColor":"lightgreen","margin":"auto","textAlign":"center"}}>
			<form className="m-3">
				<label className="form-label" htmlFor="username">Username</label>
				<input type="text"
						name="username"
						id="username"
						className="form-control"
						onChange={onChange}
						value={state.username}/>
				<label className="form-label" htmlFor="password">Password</label>
				<input type="password"
						name="password"
						id="password"
						className="form-control"
						onChange={onChange}
						value={state.password}/>
				<button name="register" className="btn btn-primary" onClick={onRegister}>Register</button>
				<button name="login" className="btn btn-primary" onClick={onLogin}>Login</button>
			</form>
		</div>
	)
}

export default LoginPage;