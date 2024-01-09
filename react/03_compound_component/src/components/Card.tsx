import React,{useState} from 'react';
import Square from './Square';
import Label from './Label';

interface State {
	color:string;
}

const Card = () => {
	
	const [state,setState] = useState<State>({
		color:"red"
	})
	
	const cardStyle:React.CSSProperties = {
		height:200,
		width:150,
		backgroundColor:"#FFF",
		filter:"drop-shadow(0px 5px 5px #666)"
	}
	
	const changeColor = ():void => {
		let color:string = "#";
		const letters:string = "ABCDEF0123456789"
		for(let i=0;i<6;i++) {
			let temp = Math.floor(Math.random()*16)
			color = color + letters[temp];
		}
		setState({
			color:color
		})
	}
		
	return(
		<div style={cardStyle}>
			<Square color={state.color}/>
			<Label color={state.color} changeColor={changeColor}/>
		</div>
	)
}

export default Card;