var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SECRET_KEY = 'secret_key_goes_here';

const user = JSON.parse(fs.readFileSync('user.json', 'utf8'));

app.get('/api', function api(req, res) {
    res.json({
        description: 'My API. Please authenticate!'
    });
});

app.post('/api/login', (req, res) => {
  const { username = user.username, password= user.password } = req.body;

  if (username === "test" && password === "1234") {
      const token = jwt.sign({ username: username }, SECRET_KEY);
      res.json({
          message: 'Authenticated! Use this token in the "Authorization" header',
          token: token
      });
  } else {
      res.status(401).json({
          message: 'Invalid Username or Password',
          user: {
              username: username,
              password: password
          }
      });
  }
});

app.get('/api/userprofile', ensureToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, function (err, data) {
      if (err) {
          res.status(403).send("forbidden");
      } else {
          res.json({
              description: `User profile: ${data.username}`,
              data: {
                  username: data.username,
                  iat: data.iat
              }
          });
      }
  });
});

app.listen(8180, function () {
    console.log('App listening on port 8180!');
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
