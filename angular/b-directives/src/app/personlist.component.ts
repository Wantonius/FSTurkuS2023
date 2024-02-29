import {Component} from '@angular/core';

@Component({
	selector:"person-list",
	templateUrl:"./personlist.component.html"
})
export class PersonList {
	list = [
	{
		"firstname": "Emmanuel",
		"lastname": "Bird"
	},
	{
		"firstname": "Daniel",
		"lastname": "Medina"
	},
	{
		"firstname": "Scott",
		"lastname": "Lara"
	},
	{
		"firstname": "Summer",
		"lastname": "Travis"
	},
	{
		"firstname": "Cole",
		"lastname": "Berger"
	},
	{
		"firstname": "Allegra",
		"lastname": "Hahn"
	},
	{
		"firstname": "Dai",
		"lastname": "Roach"
	},
	{
		"firstname": "Francesca",
		"lastname": "Levy"
	},
	{
		"firstname": "Hermione",
		"lastname": "Berger"
	},
	{
		"firstname": "Mary",
		"lastname": "Alford"
	},
	{
		"firstname": "Pamela",
		"lastname": "Sosa"
	},
	{
		"firstname": "George",
		"lastname": "Gonzales"
	},
	{
		"firstname": "Ruth",
		"lastname": "Barlow"
	},
	{
		"firstname": "Yolanda",
		"lastname": "Mccarthy"
	},
	{
		"firstname": "Dai",
		"lastname": "Branch"
	},
	{
		"firstname": "Nissim",
		"lastname": "Patton"
	},
	{
		"firstname": "Nathan",
		"lastname": "Hebert"
	},
	{
		"firstname": "Kylie",
		"lastname": "Harris"
	},
	{
		"firstname": "Briar",
		"lastname": "Mckee"
	},
	{
		"firstname": "Kennedy",
		"lastname": "Jenkins"
	},
	{
		"firstname": "Cynthia",
		"lastname": "Hernandez"
	},
	{
		"firstname": "Jason",
		"lastname": "Leblanc"
	},
	{
		"firstname": "Castor",
		"lastname": "Dunn"
	},
	{
		"firstname": "Ifeoma",
		"lastname": "Riley"
	},
	{
		"firstname": "Asher",
		"lastname": "Ingram"
	},
	{
		"firstname": "Phoebe",
		"lastname": "Cortez"
	},
	{
		"firstname": "Jescie",
		"lastname": "Pope"
	},
	{
		"firstname": "Gil",
		"lastname": "Vinson"
	},
	{
		"firstname": "Anastasia",
		"lastname": "Morin"
	},
	{
		"firstname": "Virginia",
		"lastname": "Crosby"
	},
	{
		"firstname": "Felix",
		"lastname": "Reid"
	},
	{
		"firstname": "Justine",
		"lastname": "Hancock"
	},
	{
		"firstname": "Akeem",
		"lastname": "Nash"
	},
	{
		"firstname": "Phoebe",
		"lastname": "Morris"
	},
	{
		"firstname": "Risa",
		"lastname": "Rodgers"
	},
	{
		"firstname": "Sopoline",
		"lastname": "Ware"
	},
	{
		"firstname": "Gay",
		"lastname": "Alford"
	},
	{
		"firstname": "Flynn",
		"lastname": "Fletcher"
	},
	{
		"firstname": "Plato",
		"lastname": "Strickland"
	},
	{
		"firstname": "Tanya",
		"lastname": "Cunningham"
	},
	{
		"firstname": "Thaddeus",
		"lastname": "Watkins"
	},
	{
		"firstname": "Ivor",
		"lastname": "Lara"
	},
	{
		"firstname": "Nomlanga",
		"lastname": "Moon"
	},
	{
		"firstname": "Lesley",
		"lastname": "Patton"
	},
	{
		"firstname": "Piper",
		"lastname": "Booth"
	},
	{
		"firstname": "Coby",
		"lastname": "Joyner"
	},
	{
		"firstname": "Kylee",
		"lastname": "Cantrell"
	},
	{
		"firstname": "Ingrid",
		"lastname": "Livingston"
	},
	{
		"firstname": "Kieran",
		"lastname": "Sanford"
	},
	{
		"firstname": "Amber",
		"lastname": "Paul"
	},
	{
		"firstname": "Guy",
		"lastname": "Campos"
	},
	{
		"firstname": "Lucius",
		"lastname": "Davis"
	},
	{
		"firstname": "Brooke",
		"lastname": "Suarez"
	},
	{
		"firstname": "Mechelle",
		"lastname": "Benjamin"
	},
	{
		"firstname": "Hilel",
		"lastname": "Lara"
	},
	{
		"firstname": "Bryar",
		"lastname": "Harris"
	},
	{
		"firstname": "Damian",
		"lastname": "Calhoun"
	},
	{
		"firstname": "Kennan",
		"lastname": "Farrell"
	},
	{
		"firstname": "Charlotte",
		"lastname": "Clarke"
	},
	{
		"firstname": "Xaviera",
		"lastname": "Alford"
	},
	{
		"firstname": "Rajah",
		"lastname": "Hudson"
	},
	{
		"firstname": "Violet",
		"lastname": "Emerson"
	},
	{
		"firstname": "Beau",
		"lastname": "Donovan"
	},
	{
		"firstname": "Tiger",
		"lastname": "Ramirez"
	},
	{
		"firstname": "Nolan",
		"lastname": "Warren"
	},
	{
		"firstname": "Britanni",
		"lastname": "Sykes"
	},
	{
		"firstname": "Phyllis",
		"lastname": "Baker"
	},
	{
		"firstname": "Lucas",
		"lastname": "Macdonald"
	},
	{
		"firstname": "Alexa",
		"lastname": "Kim"
	},
	{
		"firstname": "Reagan",
		"lastname": "Nunez"
	},
	{
		"firstname": "Owen",
		"lastname": "Barron"
	},
	{
		"firstname": "Flavia",
		"lastname": "Estrada"
	},
	{
		"firstname": "Desirae",
		"lastname": "Padilla"
	},
	{
		"firstname": "Hiram",
		"lastname": "Howe"
	},
	{
		"firstname": "Jack",
		"lastname": "Vaughn"
	},
	{
		"firstname": "Iola",
		"lastname": "Casey"
	},
	{
		"firstname": "Hope",
		"lastname": "Dunn"
	},
	{
		"firstname": "Kylee",
		"lastname": "Forbes"
	},
	{
		"firstname": "Cody",
		"lastname": "Little"
	},
	{
		"firstname": "Angelica",
		"lastname": "Johns"
	},
	{
		"firstname": "Ethan",
		"lastname": "Baxter"
	},
	{
		"firstname": "Sebastian",
		"lastname": "Le"
	},
	{
		"firstname": "Adrian",
		"lastname": "Holcomb"
	},
	{
		"firstname": "Carly",
		"lastname": "Vega"
	},
	{
		"firstname": "Demetrius",
		"lastname": "Sosa"
	},
	{
		"firstname": "Rooney",
		"lastname": "Young"
	},
	{
		"firstname": "Dale",
		"lastname": "Douglas"
	},
	{
		"firstname": "Bradley",
		"lastname": "Bauer"
	},
	{
		"firstname": "Rachel",
		"lastname": "Hinton"
	},
	{
		"firstname": "Branden",
		"lastname": "Browning"
	},
	{
		"firstname": "Silas",
		"lastname": "Caldwell"
	},
	{
		"firstname": "Rhoda",
		"lastname": "Wells"
	},
	{
		"firstname": "Yen",
		"lastname": "Odom"
	},
	{
		"firstname": "Mufutau",
		"lastname": "Fisher"
	},
	{
		"firstname": "Evelyn",
		"lastname": "Roberson"
	},
	{
		"firstname": "Arden",
		"lastname": "Skinner"
	},
	{
		"firstname": "Alana",
		"lastname": "Spears"
	},
	{
		"firstname": "Uriel",
		"lastname": "Bishop"
	},
	{
		"firstname": "Christine",
		"lastname": "Hays"
	},
	{
		"firstname": "Daryl",
		"lastname": "Lang"
	}
]
}