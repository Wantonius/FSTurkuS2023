import React,{ useState } from 'react'
import ThemeContext,{themes,ThemeType} from './context/ThemeContext';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
	theme:ThemeType;
}

function App() {
	const [state, setState] = useState<State>({
		theme:themes.dark
	})

	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}

	return (
		<ThemeContext.Provider value={state.theme}>
			<div style={{"margin":"auto","textAlign":"center"}}>
				<Headline>
				Pääkaupunkiseudun päiväkodit kiinni kahdeksi päiväksi
				</Headline>
				<Paragraph>
				Hoitajajärjestöt Tehy ja Super sekä ammattiliitto JHL ovat päättäneet kahden vuorokauden lakoista varhaiskasvatukseen pääkaupunkiseudulla.

Lakko koskee työvuoroja, jotka alkavat 31.1. kello 6.00 ja 1.2. kello 21 välisenä aikana.

Julkisia ja yksityisiä varhaiskasvatuksen työpaikkoja koskevat lakot koskevat on julistettu Helsingin, Espoon, Kauniaisten ja Vantaan alueille.

Superin tiedotteen mukaan lakko ei koske ympärivuorokautista varhaiskasvatusta, kodin perhepäivähoitoa, ryhmäperhepäivähoitoa, yksityistä perhepäivähoitoa tai hoitoapupalvelua.
				</Paragraph>
				<ThemeButton toggleTheme={toggleTheme}/>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
