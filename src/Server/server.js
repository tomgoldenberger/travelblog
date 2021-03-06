const bodyParser = require('body-parser');
const express = require('express');
const server = express();
let BlogRepo = require('./blog.repo');
let jwt = require('jsonwebtoken');
let config = require('./config');

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

let blogs = [];


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/blogs', (req, res) => {
  let repo = new BlogRepo();
  repo.getBlogs().then(blogs => res.send(blogs))
    .catch(err => console.log(err));
  console.log("get all blogs");
});

server.post('/blogs', (req, res) => {
  let repo = new BlogRepo();

  repo.createBlogentry(req.body.title, req.body.destination, req.body.description, req.body.date, req.body.content).then(blogs =>
    res.send(blogs), console.log("new Blogpost added!")
  )
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

server.get('/blogs/:id', (req, res) => {
  let repo = new BlogRepo();
  repo.getBlog(req.params.id).then(blog => res.send(blog))
    .catch(err => console.log(err));
  console.log("show blog");
});

server.post('/login', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let repo = new BlogRepo();
  let check = null;

  // Check if Account exists
  await repo.getUser(username, password)
    .then(result => { console.log('Result', result); check = result; })

  if (username && password) {
    if (check) {
      let token = jwt.sign({ username: username },
        config.secret,
        {
          expiresIn: '24h' // expires in 24 hours
        }
      );
      // return the JWT token for the future API calls
      res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
      });
    } else {
      res.json({
        success: false,
        message: 'Incorrect username or password'
      });
    }
  } else {
    res.send(400).json({
      success: false,
      message: 'Authentication failed! Please check the request'
    });
  }
});

server.get('/auth', async (req, res) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        return res.json({
          success: true,
          message: 'Token valid'
        });
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
});

server.post('/register', (req, res) => {
  let repo = new BlogRepo();

  repo.createUser(req.body.username, req.body.password)
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

server.listen(4444, () => {
  console.log('a server with express is running on port 4444');
});