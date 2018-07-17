const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Post = require("./models/post");

const uri = 'mongodb://localhost:27017/blog';

mongoose.connect(uri);

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
//1. find all the posts
	Post.find().populate('user').then(docs => {
		res.status(200).json({
			message: 'success', 
			payload: docs
		});
	}).catch(err => {
		res.status(500).json({
			message: err.message
		})
	})
//2. if found, send back success message with all posts
//3. if not found, send back error messsage
});

app.post('/posts', (req, res) => {
	//1. grab the title and description from the post request
	const { description, title } = req.body;
	const user = '5aa59770fe9caf04a993d934';
	const post = new Post({ 
		title: title, 
		description: description,
		user: user
	})

	post 
		.save()
		.then(doc => {
			res.status(201).json({
				message: 'success',
				payload: doc
			})
		})
		.catch(err => {
			res.status(500).json({
				message: err.message
			})
		})



	//2. instantiate a new request 
})

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello world"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
