const express = require('express');

morgan =require('morgan');
const app = express();

let topMovies = [ {
  movie : 'The Dark Knight',

},
{
  movie : 'Django Unchained',

},
{
  movie : 'Crazy Stupid Love',

}

{
  movie : 'Rush Hour',

}
{
  movie : 'Spider-Man 2',

}
{
  movie : 'Avengers Infinity War',

}
{
  movie : 'Bad Boys',

}
{
  movie : 'Space Jam',

}
{
  movie : 'Lion King',

}
{
  movie : 'Inception',

}
]

// GET requests
app.get('/', function(req, res) {
  res.send('Welcome to my movie club!')
});
app.get('/documentation', function(req, res) {
  res.sendFile('public/Documentation.html', { root : __dirname });
});
app.get('/movies', function(req, res) {
  res.json(topMovies)
});


response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Welcome to my movie club!\n');


// listen for requests
app.listen(8080, () =>
  console.log('Your app is listening on port 8080.')
);




app.use(morgan('common'));

app.get('/', function (req, res) {
  res.send('Welcome to my app!');
});
app.get('/secreturl', function (req, res) {
  res.send('This is a secret url with super top-secret content.');
});

app.listen(8080);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
