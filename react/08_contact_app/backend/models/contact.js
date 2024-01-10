import mongoose from 'mongoose';

let Schema = mongoose.Schema({
	"firstname":String,
	"lastname":{"type":String,"index":true},
	"email":String,
	"phone":String
})

const model = mongoose.model("Contact",Schema);

export default model;