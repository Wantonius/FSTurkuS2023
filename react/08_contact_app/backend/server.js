import express from 'express';
import mongoose from 'mongoose';
import model from './models/contact.js';

let app = express();

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/turkucontacts?retryWrites=true&w=majority"

mongoose.connect(url).then(
	() => console.log("Connected to MongoDB"),
	(err) => console.log("Failed to connect to MongoDB. Reason",err)
)

/*
GET /api/contact Hae kaikki
POST /api/contact Lisää uusi
DELETE /api/contact/:id Poista _id:llä
PUT /api/contact/:id Päivitä _id:llä
*/

app.use(express.json());

app.get("/api/contact",function(req,res) {
	model.find().then(function(contacts) {
		return res.status(200).json(contacts);
	}).catch(function(err) {
		console.log("Database returned an error.",err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

app.post("/api/contact",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	if(!req.body.firstname) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	let contact = new model({
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"email":req.body.email,
		"phone":req.body.phone
	})
	model.save().then(function(contact) {
		return res.status(201).json(contact)
	}).catch(function(err) {
		console.log("Database returned an error.",err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

app.listen(3000);

console.log("Running in port 3000");