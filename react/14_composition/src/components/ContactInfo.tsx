interface Props {
	name:string;
	profession:string;
}

const ContactInfo = (props:Props) => {

	return(
		<>
			<p>{props.name}</>
			<p>{props.profession}</>
		</>
	)
}

export default ContactInfo;