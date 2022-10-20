const express = require("express");

const app = express();

const cat = require('./data/cat.json')
const news = require('./data/news.json')

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello from server now");
});

app.get('/cat',(req, res)=>{
  res.send(cat)
})

app.get('/news',(req, res)=>{
  res.send(news)
})
app.listen(port, ()=>{
  console.log("app Is Running now")
})
