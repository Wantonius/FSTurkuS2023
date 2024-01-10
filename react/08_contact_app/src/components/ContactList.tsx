import Contact from '../models/Contact';

interface Props {
	list:Contact[];
	removeContact(id:string):void;
}

const ContactList = (props:Props) => {
	
	let contacts = props.list.map((contact) => {
		return(
			<tr key={contact._id}>
				<td>{contact.firstname}</td>
				<td>{contact.lastname}</td>
				<td>{contact.email}</td>
				<td>{contact.phone}</td>
				<td><button onClick={() => props.removeContact(contact._id)}>Remove</button></td>
			</tr>
		)
	}) 
	return (
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
			{contacts}
			</tbody>
		</table>
	)
}

export default ContactList;