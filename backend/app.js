const express = require("express");
const app = express();
const debug = require("debug")("node-angular");


app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message:"Post added successfully"
  })
});
app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "123",
      title: "First node post",
      content: "Hello world from server # 1",
    },
    {
      id: "123",
      title: "Second node post",
      content: "Hello world from server # 2",
    },
    {
      id: "123",
      title: "Third node post",
      content: "Hello world from server # 3",
    },
  ];
  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts,
  });
});

module.exports = app;
