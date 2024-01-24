const express = require("express");
const mongoose = require("mongoose");
const shoppingRoute = require("./routes/shoppingroute");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userModel = require("./models/user");
const sessionModel = require("./models/session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const session = require("express-session");
const mongoStore = require("connect-mongo");

let app = express();

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/shoppingdatabase?retryWrites=true&w=majority"

app.use(express.json());

mongoose.connect(url).then(
	() => console.log("Connected to MongoDB"),
	(err) => console.log("Failed to connect to MongoDB. Reason",err)
)

//SESSION MANAGEMENT

app.use(session({
	name:"shopping-session",
	resave:false,
	secret:"NotNormallyInCode",
	saveUninitialized:false,
	cookie:{maxAge:1000*60*60},
	store:mongoStore.create({
		mongoUrl:url,
		collectionName:"sessions"
	})
}))

//PASSPORT

app.use(passport.initialize());
app.use(passport.session());

passport.use("local-login",new localStrategy({
	usernameField:"username",
	passwordField:"password",
	passReqToCallback:true
},function(req,username,password,done) {
	if(!req.body) {
		return done(null,false);
	}
	if(!req.body.username || !req.body.password) {
		return done(null,false);
	}
	if(req.body.username < 4 || req.body.password < 8) {
		return done(null,false);
	}
	userModel.findOne({"username":req.body.username}).then(function(err,user) {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null,false);
		}
		bcrypt.compare(req.body.password,user.password,function(err,success) {
			if(err) {
				return done(err);
			}
			if(!success) {
				return done(null,false);
			}
			let token = createToken();
			let now = Date.now();
			req.session.token = token;
			req.session.user = user.username;
			return done(null,user);
		})
	}).catch(function(err) {
		console.log(err);
		return done(err);
	})	
}))

passport.serializeUser(function(user,done) {
	console.log("serializeUser");
	done(null,user._id);
})

passport.deserializeUser(function(_id,done) {
	console.log("deserializeUser");
	userModel.findById(_id,function(err,user) {
		if(err) {
			return done(err)
		}
		return done(null,user);
	})
})

//MIDDLEWARES

const time_to_live_diff = 3600000;

createToken = () => {
	let token = crypto.randomBytes(64);
	return token.toString("hex");
}

isUserLogged = (req,res,next) => {
	if(req.isAuthenticated()) {
		return next()
	} else {
		if(req.session) {
			req.session.destroy();
			req.logout(function(err) {
				return res.status(403).json({"Message":"Forbidden"})
			})
		} else {
			return res.status(403).json({"Message":"Forbidden"})
		}
	}
}

//LOGIN API

app.post("/register",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad request"})
	}
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({"Message":"Bad request"})
	}
	if(req.body.username < 4 || req.body.password < 8) {
		return res.status(400).json({"Message":"Bad request"})
	}
	bcrypt.hash(req.body.password,14,function(err,hash) {
		if(err) {
			console.log(err);
			return res.status(500).json({"Message":"Internal Server Error"})
		}
		let user = new userModel({
			"username":req.body.username,
			"password":hash
		})
		user.save().then(function(){
			return res.status(200).json({"Message":"Register Success"})
		}).catch(function(err) {
			if(err.code === 11000) {
				return res.status(409).json({"Message":"Username is already in use"})
			}
			console.log(err);
			return res.status(500).json({"Message":"Internal Server Error"});
		})
	})
})

app.post("/login",passport.authenticate("local-login"),function(req,res) {
	return res.status(200).json({token:req.session.token})
})

app.post("/logout",function(req,res) {
	if(req.session) {
		req.session.destroy();
		req.logout(function(err) {
			return res.status(200).json({"Message":"Logged out"})
		})
	} else {
		return res.status(404).json({"Message":"Not found"})
	}
})

app.use("/api",isUserLogged,shoppingRoute);

let port = process.env.PORT || 3000;

app.listen(port);

console.log("Running in port",port);

