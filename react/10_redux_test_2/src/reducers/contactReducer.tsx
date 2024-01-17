import {AnyAction,Reducer} from 'redux';
import Contact from '../models/Contact';

export interface AppState {
	list:Contact[];
	id:number;
}

const initialState:AppState = {
	list:[],
	id:100
}

const contactReducer:Reducer<AppState,AnyAction> = (state = initialState,action):AppState => {
	console.log(action);
	console.log(state);
	switch(action.type) {
		case "ADD_CONTACT":
			action.contact.id = state.id
			return {
				id:state.id+1,
				list:state.list.concat(action.contact)
			}
		case "REMOVE_CONTACT":
			let tempList = state.list.filter(contact => contact.id !== action.id)
			return {
				...state,
				list:tempList
			}
		default:
			return state;
	}
}

export default contactReducer;