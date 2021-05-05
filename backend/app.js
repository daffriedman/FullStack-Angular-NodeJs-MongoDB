const express = require("express");
const app = express();
const debug = require("debug")("node-angular");
const Post = require("./models/post");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");
mongoose
  .connect(
    "mongodb+srv://dFried:DVmw83D5wSjGwkH@cluster0.zyluw.mongodb.net/angular-node-posts?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.error("Connection failed!!");
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
// app.post("/api/posts", (req, res, next) => {
//   const post = new Post({

//     title:req.body.title,
//     content: req.body.content,
//   });
//   post.save().then((newPost) => {
//     console.log(post);
//     res.status(201).json({
//       message: "Post added successfully",
//       postId: newPost._id,
//     });
//   });
// });

// app.put("/api/posts/:id", (req, res, next) => {
//   const post = new Post({
//     _id: req.body.id,
//     title: req.body.title,
//     content: req.body.content,
//   });
//   Post.updateOne({ _id: req.params.id }, post).then((result) => {
//     console.log(result);
//     res.status(200).json({ message: "Update was successful!!" });
//   });
// });
// app.get("/api/posts", (req, res, next) => {
//   Post.find().then((docs) => {
//     console.log(docs);
//     res.status(200).json({
//       message: "Posts fetched succesfully",
//       posts: docs,
//     });
//   });
// });

// app.get('/api/posts/:id',(req,res,next)=>{
//   Post.findById(req.params.id)
//   .then((post =>{
//     if(post){
//       res.status(200).json(post)
//     }
//     else {
//       res.status(404).json({message: "Post not found!"})
//     }
//   }))
// })

// app.delete("/api/posts/:id", (req, res, next) => {
//   Post.deleteOne({ _id: req.params.id }).then((result) => {
//     console.log(result);
//   });
//   // console.log(req.params.id);
//   res.status(200).json({ message: "Post deleted" });
// });

module.exports = app;
