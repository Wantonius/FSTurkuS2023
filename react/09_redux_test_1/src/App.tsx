import {useSelector,useDispatch} from 'react-redux';
import {State} from './reducers/countReducer';

function App() {

	const dispatch = useDispatch();
	
	const countSelector = (state:State) => {
		console.log("Count selector:",state)
		return state.count
	}
	const count = useSelector(countSelector);
	return (
		<>
			<h3>Current value:{count}</h3>
			<button onClick={() => {
				console.log("Dispatch INCREMENT")
				dispatch({
					type:"INCREMENT"
				})
			}}>+</button>
			<button onClick={() => {
				console.log("Dispatch DECREMENT")
				dispatch({
					type:"DECREMENT"
				})
			}}>-</button>
		</>
	)
}

export default App
