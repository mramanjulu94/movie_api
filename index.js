const express = require('express');

morgan = require('morgan');


const app = express();


app.use(morgan('common'));


const bodyParser = require('body-parser'),
  methodOverride = require('method-override');


let topMovies = [
  {
    title: 'The Dark Knight',
  },
    {
      title: 'The Bourne Identity',
    },
    {
      title: 'Lord of the Rings',
    },
    {
      title: 'Slumdog Millionaire',
    },
    {
      title: 'The Godfather',
    },
    {
      title: 'Django Unchained',
    },
    {
      title: 'Insidious',
    },
    {
      title: 'The Conjuring',
    },
    {
      title: 'Rush Hour',
    },
    {
      title: 'The Interview',
    },
];



let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};


let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};



app.use(myLogger);
app.use(requestTime);
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  // logic
});



// GET requests
app.get('/', (req, res) => {
  let responseText = 'Welcome to my app!';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});


app.get('/secreturl', (req, res) => {
  let responseText = 'This is a secret url with super top-secret content.';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);

});


// listen for requests
app.listen(8080, () =>
  console.log('Your app is listening on port 8080.');
);
