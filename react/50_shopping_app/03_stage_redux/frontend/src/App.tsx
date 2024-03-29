import {useEffect} from 'react';
import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {

	const action = useAction();
	
	const selector = (state) => {
		let error = state.shopping.error
		if(state.login.error) {
			error = state.login.error
		}
		return {
			isLogged:state.login.isLogged,
			loading:state.login.loading,
			error:error
		}
	}
	
	const state = useSelector(selector);
	
	let messageArea = <h4 style={{"height":50,"textAlign":"center"}}></h4>
	
	if(state.loading) {
		messageArea = <h4 style={{"height":50,"textAlign":"center"}}>Loading ...</h4>
	}
	if(state.error) {
		messageArea = <h4 style={{"height":50,"textAlign":"center"}}>{state.error}</h4>
	}
	if(state.isLogged) {
	return (
		<>
			<Navbar/>
				{messageArea}
			<Routes>
				<Route path="/" element={<ShoppingList list={action.state.list} remove={action.remove} edit={action.edit}/>}/>
				<Route path="/form" element={<ShoppingForm add={action.add}/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>
	) 
	}else {
		return(
		<>
			<Navbar />
				{messageArea}
			<Routes>
				<Route path="/" element={<LoginPage register={action.register} login={action.login} setError={action.setError}/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>	
		)
	}
}

export default App
