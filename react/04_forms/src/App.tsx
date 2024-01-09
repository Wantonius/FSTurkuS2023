import { useState } from 'react'
import Person from './models/Person';
import ContactForm from './components/ContactForm';

interface State {
	greeting:string;
}

function App() {

	const [state,setState] = useState<State>({
		greeting:"No greeting yet"
	})

	const setGreeting = (person:Person) => {
		let name = person.firstname+" "+person.lastname;
		setState({
			greeting:"Hello "+name
		})
	}

	return (
		<>
			<ContactForm setGreeting={setGreeting}/>
			<h3>{state.greeting}</h3>
		</>
	)
}

export default App
