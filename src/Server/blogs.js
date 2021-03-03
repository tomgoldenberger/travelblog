const bodyParser = require('body-parser');
const express = require('express');
const server = express();
let BlogRepo = require('./blog.repo');

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let blogs = [];


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true }))

server.get('/blogs', (req, res) => {
    
    let repo = new BlogRepo();
    repo.getBlogs().then(blogs => res.send(blogs), console.log(blogs))
    .catch(err => console.log(err));
    console.log(blogs);
});

server.post('/blogs', (req, res) => {    
    let repo = new BlogRepo();
   
    repo.createBlogentry(req.body.title, req.body.destination, req.body.description, req.body.date, req.body.content).then(
        res.sendStatus(200)
       )
      .catch(err => { 
         console.log(err); 
         res.sendStatus(500); 
       });
    console.log(blogs.title);
});

server.listen(4444, () => {
    console.log('a server with express is running on port 4444');
});
