import { useState,useEffect } from 'react'
import Contact from './models/Contact';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

interface State {
	list:Contact[];
}

interface UrlRequest {
	request:Request;
	action:string;
}

function App() {
	
	const [state,setState] = useState<State>({
		list:[]
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//Fetch useEffect
	
	useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(urlRequest.request);
			if(!response) {
				console.log("No response!");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist":
						let temp = await response.json();
						let list = temp as Contact[];
						setState({
							list:list
						})
						return;
					case "addcontact":
						getList();
						return;
					default:
						return;
				}
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText);
			}
		}
		
		fetchData();
		
	},[urlRequest])
	
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/contact",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const addContact = (contact:Contact) => {
		setUrlRequest({
			request:new Request("/api/contact",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(contact)
			}),
			action:"addcontact"
		})
	}
	
	const removeContact = (id:string) => {
		
	}
	
	return (
		<>
			<ContactForm addContact={addContact}/>
			<ContactList list={state.list} removeContact={removeContact}/>
		</>
	)
}

export default App
