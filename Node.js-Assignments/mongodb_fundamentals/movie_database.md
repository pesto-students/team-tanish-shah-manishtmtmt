## MongoDB Assignment: Building a Movie Database

### 1. Create a new database named "movieDB" in mongoDB.

```shell
use movieDB;
```

### 2. Create three collections: "movies", "directors", and "actors".

```shell
db.createCollection("movies");
db.createCollection("directors");
db.createCollection("actors");
```

### 3. Schema design

#### a. Movies collection schema:

```md
- title (string)
- releasedYear (string)
- genre (list of string)
- director (reference to Directors)
- actors (list of references to Actors)
```

#### b. Directors collection schema:

```md
- name (string)
- nationality (string)
- moviesDirected (list of references to Movies)
```

- Actors collection schema:

```md
- name (string)
- nationality (string)
- moviesActedIn (list of references to Movies)
```

### 4. Insert sample data:

### Insert sample movies:

```shell
db.movies.insertMany([
  {
    title: "Baahubali: The Beginning",
    releasedYear: "2015",
    genre: ["Action", "Drama"],
    director: ObjectId("6539f86035c2b53ecca9eac6"),
    actors: [ObjectId("6539f97835c2b53ecca9eacb")],
  },
  {
    title: "Baahubali: The Conclusion",
    releasedYear: "2017",
    genre: ["Action", "Drama"],
    director: ObjectId("6539f86035c2b53ecca9eac6"),
    actors: [ObjectId("6539f97835c2b53ecca9eacb")]
  },
  {
    title: "PK",
    releasedYear: "2014",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    director: ObjectId("6539f86035c2b53ecca9eac7"),
    actors: [ObjectId("6539f97835c2b53ecca9eacd")]
  },
  {
    title: "RRR",
    releasedYear: "2022",
    genre: ["Action", "Drama"],
    director: ObjectId("6539f86035c2b53ecca9eac6"),
    actors: [ObjectId("6539f97835c2b53ecca9ead1"), ObjectId("6539f97835c2b53ecca9ead2")]
  },
  {
    title: "Sanju",
    releasedYear: "2018",
    genre: ["Biography", "Drama", "Comedy"],
    director: ObjectId("6539f86035c2b53ecca9eac7"),
    actors: [ObjectId("6539f97835c2b53ecca9eacf")]
  },
  {
    title: "Dangal",
    releasedYear: "2016",
    genre: ["Action", "Biography", "Drama"],
    director: ObjectId("6539f86035c2b53ecca9eac9"),
    actors: [ObjectId("6539f97835c2b53ecca9eacd")]
  },
  {
    title: "Chhichhore",
    releasedYear: "2019",
    genre: ["Comedy", "Drama", "Romance"],
    director: ObjectId("6539f86035c2b53ecca9eac9"),
    actors: [ObjectId("6539f97835c2b53ecca9ead0")]
  },
  {
    title: "Bajarangi Bhaijaan",
    releasedYear: "2015",
    genre: ["Action", "Adventure", "Comedy"],
    director: ObjectId("6539f86035c2b53ecca9eac8"),
    actors: [ObjectId("6539f97835c2b53ecca9eace")]
  },
  {
    title: "Ek Tha Tiger",
    releasedYear: "2012",
    genre: ["Action", "Adventure", "Drama"],
    director: ObjectId("6539f86035c2b53ecca9eac8"),
    actors: [ObjectId("6539f97835c2b53ecca9eace")]
  },
  {
    title: "Jawan",
    releasedYear: "2023",
    genre: "biography",
    director: ObjectId("6539f86035c2b53ecca9eaca"),
    actors: [ObjectId("6539f97835c2b53ecca9eacc")]
  }
])
```

### Insert sample directors:

```shell
db.directors.insertMany([
  {
    name: "S. S. Rajamouli",
    nationality: "Indian",
    moviesDirected: [ObjectId("6539f79735c2b53ecca9eabc"), ObjectId("6539f79735c2b53ecca9eabd"), ObjectId("6539f79735c2b53ecca9eabf")]
  },
  {
    name: "Rajkumar Hirani",
    nationality: "Indian",
    moviedDirected: [ObjectId("6539f79735c2b53ecca9eabe"), ObjectId("6539f79735c2b53ecca9eac0")]
  },
  {
    name: "Kabir Khan",
    nationality: "Indian",
    moviedDirected: [ObjectId("6539f79735c2b53ecca9eac3"), ObjectId("6539f79735c2b53ecca9eac4")]
  },
  {
    name: "Nitesh Tiwari",
    nationality: "Indian",
    moviedDirected: [ObjectId("Da6539f79735c2b53ecca9eac1ngal"), ObjectId("6539f79735c2b53ecca9eac2")]
  },
  {
    name: "Atlee",
    nationality: "Indian",
    moviedDirected: [ObjectId("6539f79735c2b53ecca9eac5")]
  },
])
```

### Insert sample actors:

```shell
db.directors.insertMany([
  {
    name: "Prabhash",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eabc"), ObjectId("6539f79735c2b53ecca9eabd")]
  },
  {
    name: "Shah Rukh Khan",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eac5")]
  },
  {
    name: "Aamir Khan",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eabe"), ObjectId("6539f79735c2b53ecca9eac1")]
  },
  {
    name: "Salman Khan",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eac3"), ObjectId("6539f79735c2b53ecca9eac4")]
  },
  {
    name: "Ranbir Kapoor",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eac0")]
  },
  {
    name: "Shushant Singh Rajpoot",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eac2")]
  },
  {
    name: "Ram Charan",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eabf")]
  },
  {
    name: "N. T. Rama Rao Jr.",
    nationality: "Indian",
    moviesActedIn: [ObjectId("6539f79735c2b53ecca9eabf")]
  }
])
```

### 5. MongoDB Queries:

#### a. Find all movies released in a specific year:

```shell
db.movies.find({ releasedYear: "2015" })
```

#### b. Find all movies in a specific genre: 

```shell
db.movies.find({ genre: "Comedy" })
```

#### c. Find all movies directed by a specific director:

```shell
db.movies.find({ director: ObjectId("6539f86035c2b53ecca9eac6") })
```

#### d. Find all movies that a specific actor acted in:

```shell
db.movies.find({ actors: ObjectId("6539f97835c2b53ecca9eace") })
```

#### e. Find all directors from a specific nationality:

```shell
db.directors.find({ nationality: "Indian" })
```

#### f. Find all actors from a specific nationality:

```shell
db.actors.find({ nationality: "Indian" })
```