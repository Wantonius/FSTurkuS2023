import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../actions/loginActions';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

const Navbar = (props) => {
	
	const selector = (state) => {
		return {
			isLogged:state.login.isLogged,
			token:state.login.token,
			user:state.login.user
		}
	}
	const state = useSelector(selector);
	const dispatch:ThunkDispatch<any,any,AnyAction> = useDispatch();
	
	if(state.isLogged) {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
				<ul className="navbar-nav">
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/" className="nav-link">Shopping List</Link>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/form" className="nav-link">Add new item</Link>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<p style={{color:"blue"}} className="nav-link">Logged in as {state.user}</p>
					</li>
					<li className="nav-item" style={{marginLeft:10}}>
						<Link to="/" onClick={() => dispatch(logout(state.token))} className="nav-link">Logout</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand" style={{marginLeft:10}}>Shopping App</p>
			</nav>
		)
	}
}

export default Navbar;