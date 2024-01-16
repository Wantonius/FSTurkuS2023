import {useState,useEffect} from 'react';
import {AppState} from '../types/states';
import ShoppingItem from '../models/ShoppingItem';

interface UrlRequest {
	request:Request;
	action:string;
}

const useAction = () => {
	
	const [state,setState] = useState<AppState>({
		list:[]
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(urlRequest.request);
			if(!response){
				console.log("Server sent no response!");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist":
						let temp = await response.json();
						let list:ShoppingItem[] = temp as ShoppingItem[];
						setState({
							list:list
						})
						return;
					case "additem":
					case "removeitem":
					case "edititem":
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
		
	},[urlRequest]);
	
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{
					"Content-Type":"application/json",
				},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})
	}
	
	const remove = (id:string) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE"
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item._id,{
				method:"PUT",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"edititem"
		})
	}
	
	return {state,getList,add,remove,edit}
}

export default useAction;