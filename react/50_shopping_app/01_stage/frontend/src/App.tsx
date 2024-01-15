import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';

function App() {

	const action = useAction();

	return (
		<>
			<ShoppingForm add={action.add}/>
		</>
	)
}

export default App
