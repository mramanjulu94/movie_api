const express = require("express");
  bodyParser = require("body-parser");
  uuid = require("uuid");
const morgan = require("morgan");
const app = express();


  app.use(bodyParser.json());
  app.use(morgan("common"));
  app.use(express.static("public"));
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


let Movies = [
  {
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice',
    genre: 'Action',
    director: 'Christopher Nolan',
    image: 'darkknight.jpg'
  },
    {
      title: 'The Bourne Identity',
      description:'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and atempting to regain his memory',
      genre: 'Thriller',
      director: 'Doug Liman',
      image: 'bourneidentity.jpg'
    },
    {
      title: 'Lord of the Rings',
      description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save middle-earth from the Dark Lord Sauron',
      genre: 'Fantasy',
      director: 'Peter Jackson',
      image: 'lordoftherings.jpg'
    },
    {
      title: 'Slumdog Millionaire',
      description: 'A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of "Who Wants to be a Millionaire"',
      genre: 'Drama',
      director: 'Danny Boyle',
      image: 'slumdogmillionaire.jpg'
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      genre: 'Drama',
      director: 'Francis Ford Coppola',
      image: 'godfather.jpg'
    },
    {
      title: 'Django Unchained',
      description: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
      genre: 'Action',
      director: 'Quentin Tarantino',
      image: 'djangounchained.jpg'
    },
    {
      title: 'Insidious',
      description: 'A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.',
      genre: 'Horror',
      director: 'James Wan',
      image: 'insidious.jpg'
    },
    {
      title: 'The Conjuring',
      description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      genre: 'Horror',
      director:'James Wan',
      image: 'conjuring.jpg'
    },
    {
      title: 'Rush Hour',
      description: 'A loyal and dedicated Hong Kong Inspector teams up with a reckless and loudmouthed L.A.P.D. detective to rescue the Chinese Consuls kidnapped daughter, while trying to arrest a dangerous crime lord along the way.',
      genre: 'Comedy',
      director: 'Brett Ratner',
      image: 'rushhour.jpg'
    },
    {
      title: 'The Interview',
      description: 'Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show "Skylark Tonight". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to assassinate him.',
      genre: 'Comedy',
      director: 'Seth Rogen',
      image: 'interview.jpg'
    },
];




let Genres = [
  {
      name : 'Action',
      description : 'Action film is a film genre in which the protagonist or protagonists \
      are thrust into a series of events that typically include violence, extended \
      fighting, physical feats, and frantic chases. Action films tend to feature a \
      resourceful hero struggling against incredible odds, which include \
      life-threatening situations, a villain, or a pursuit which usually concludes in \
      victory for the hero.'
  },

  {
        name : 'Adventure',
        description : 'Adventure Films are exciting stories, with new experiences or exotic locales. Adventure films are very \ similar to the action film genre, in that they are designed to provide an action-filled, energetic experience for the \
         film viewer.'
    },

  {
        name : 'Drama',
        description : 'In film and television, drama is a genre of narrative fiction (or semi-fiction) intended to be more \ serious than humorous in tone. All forms of cinema or television that involve fictional stories are forms of drama in \ the broader sense if their storytelling is achieved by means of actors who represent (mimesis) characters.'
    },

    {
        name : 'Thriller',
        description : 'Thriller film, also known as suspense film or suspense thriller, is \
        a broad film genre that evokes excitement and suspense in the audience. Tension is \
        created by delaying what the audience sees as inevitable, and is built through \
        situations that are menacing or where escape seems impossible.'
    },
    {
      name: 'Comedy',
      description:'is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.'
    },
    {
      name:'Fantasy',
      description: 'are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.'
    },
    {
      name: 'Horror',
      description: 'is a film that seeks to elicit fear for entertainment purposes.'

    }
]




let Directors = [

  {
    name: 'Christopher Nolan',
    born: 'July 30, 1970'
  },
  {
    name: 'Peter Jackson',
    born: 'October 31, 1961'
  },
  {
    name: 'James Wan',
    born: 'February 26, 1977'
  },
  {
    name: 'Seth Rogen',
    born: 'April 15, 1982'
  },
  {
    name: 'Brett Ratner',
    born: 'March 28, 1969'
  },
  {
    name: 'Quentin Tarantino',
    born: 'March 27, 1963'
  },
  {
    name: 'Doug Liman',
    born: 'July 24, 1965'
  },
  {
    name: 'Danny Boyle',
    born: 'October 20, 1956'
  },
  {
    name: 'Francis Ford Coppola',
    born: 'APril 7, 1939'
  }
]



let Users = [
    {
        id : 1,
        username : 'mramanjulu94',
        password : 'password123',
        email : 'example@gmail.com',
        date_of_birth : "September 14, 1994",
        Favorites : {

        }
    }
]





let Favorites = [
{

  title: 'The Dark Knight',
  description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice',
  genre: 'Action',
  director: 'Christopher Nolan',
  image: 'darkknight.jpg'
}
]

app.get("/movies", function(req, res) {
    res.json(Movies)
});



app.get("/movies/:title", (req, res) => {
    res.json(Movies.find((movie) => {
        return movie.title === req.params.title
    }));
});


app.get("/genres/:name", (req, res) => {
    res.json(Genres.find((genre) => {
        return genre.name === req.params.name
    }));
});


app.get("/directors/:name", (req, res) => {
    res.json(Directors.find((director) => {
        return director.name === req.params.name
    }));
});


app.post("/users", (req, res) => {
    let newUser = req.body;

    if (!newUser.username || !newUser.password) {
        const message = "Missing username or password in request body";
        res.status(400).send(message);
    } else {
        newUser.id = uuid.v4();
        Users.push(newUser);
        res.status(201).send(newUser);
    }
});


app.put("/users/:username", (req, res) => {
    res.send("Successful User information updated");
})


app.post("/users/:username/favorites", (req, res) => {
    let newFavorite = req.body;

    if (!newFavorite.title) {
        const message = "Missing movie title in request body";
        res.status(400).send(message);
    } else {
        newFavorite.id = uuid.v4();
        Favorites.push(newFavorite);
        res.status(201).send(newFavorite);
    }
});


app.delete("/users/:username/favorites/:title", (req, res) => {
    let favorite = Favorites.find((favorite) => {
        return favorite.title === req.params.title
    });
    if (favorite) {
        Favorites.filter(function(obj) {
            return obj.title !== req.params.title
        });
        res.status(201).send(req.params.title + " was removed from favorites.");
    }
});


app.delete("/users/:username", (req, res) => {
    let user = Users.find((user) => {
        return user.username === req.params.username
    });
    if (user) {
        Users.filter(function(obj) {
            return obj.username !== req.params.username
        });
        res.status(201).send(req.params.username + " has been removed from registry .");
    }
});

// Listen for requests on port 8080
app.listen(8080, () => {
  console.log(`My app is listening on port 8080`);
});
