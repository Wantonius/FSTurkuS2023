import React from 'react';

interface Props {
	color:string;
	changeColor():void;
}

const Label = (props:Props) => {
	
	let labelStyle:React.CSSProperties = {
		fontFamily:"sans-serif",
		fontWeight:"bold",
		margin:0,
		padding:13
	}
	return (
		<p style={labelStyle}
		 onClick={props.changeColor}>{props.color}</p>
	)
}

export default Label;