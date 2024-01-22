import {useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import {useSelector,useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {remove,edit} from '../actions/shoppingActions';


interface State {
	removeIndex:number;
	editIndex:number;
}

const ShoppingList = (props) => {
	
	const [state,setState] = useState<State>({
		removeIndex:-1,
		editIndex:-1
	})
	
	const appStateSelector = (state) => {
		return {
			token:state.login.token,
			list:state.shopping.list
		}
	}
	
	const appState = useSelector(appStateSelector);
	
	const dispatch:ThunkDispatch<any,any,AnyAction> = useDispatch();
	
	const changeMode =(index:number,mode:string) => {
		if(mode === "remove") {
			setState({
				removeIndex:index,
				editIndex:-1
			})
		}
		if(mode === "edit") {
			setState({
				editIndex:index,
				removeIndex:-1
			})
		}
		if(mode === "cancel") {
			setState({
				editIndex:-1,
				removeIndex:-1
			})
		}
	}
	
	const removeItem = (id:string) => {
		dispatch(remove(appState.token,id));
		changeMode(0,"cancel");
	}
	
	const editItem = (item:ShoppingItem) => {
		dispatch(edit(appState.token,item));
		changeMode(0,"cancel");
	}
	
	const shoppingItems = appState.list.map((item,index) => {
		if(state.removeIndex === index) {
			return(
				<RemoveRow key={item._id} item={item} changeMode={changeMode} removeItem={removeItem}/>
			)
		}
		if(state.editIndex === index) {
			return(
				<EditRow key={item._id} item={item} changeMode={changeMode} editItem={editItem}/>
			)
		}		
		return(
			<Row key={item._id} item={item} index={index} changeMode={changeMode}/>
		)
	})
	
	return(
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{shoppingItems}
			</tbody>
		</table>
	)
}

export default ShoppingList;