const { Movie } = require("./Movie.js");  
const { Professional } = require("./Professional.js");  

const pelicula1 = new Movie(
    "La tostadora valiente",
    1990,
    [
      new Professional("Leonardo DiCaprio.", 56, 77, 1.74, false, "Americano", 2, "Actor"),
      new Professional("Ana Torroja", 49, 60, 1.75, false, "Español", 1, "Cantante"),
      new Professional("David Bisbal", 72, 79, 1.83, false, "Español", 1, "Cantante")
    ],
    "Español",
    new Professional("Jon Favreau", 55, 83, 1.88, false, "American", 0, "Director"),
    "Ingles/Español",
    "Disney+",
    true,
    "La Tostadora",
    "DC Comics",
    "Paramount Pictures",
    "Superhero"
  );

  const pelicula2 = new Movie(
    "La tostadora valiente - Ahora es personal",
    1990,
    [
      new Professional("Leonardo DiCaprio.", 56, 77, 1.74, false, "Americano", 2, "Actor"),
      new Professional("Ana Torroja", 49, 60, 1.75, false, "Español", 1, "Cantante"),
      new Professional("David Bisbal", 72, 79, 1.83, false, "Español", 1, "Cantante")
    ],
    "Español",
    new Professional("Jon Favreau", 55, 83, 1.88, false, "American", 0, "Director"),
    "Ingles/Español",
    "Disney+",
    true,
    "La Tostadora",
    "DC Comics",
    "Paramount Pictures",
    "Superhero"
  );  

  const pelicula3 = new Movie(
    "La tostadora valiente - No me voy a currar mas titulos",
    1990,
    [
      new Professional("Leonardo DiCaprio.", 56, 77, 1.74, false, "Americano", 2, "Actor"),
      new Professional("Ana Torroja", 49, 60, 1.75, false, "Español", 1, "Cantante"),
      new Professional("David Bisbal", 72, 79, 1.83, false, "Español", 1, "Cantante")
    ],
    "Español",
    new Professional("Jon Favreau", 55, 83, 1.88, false, "American", 0, "Director"),
    "Ingles/Español",
    "Disney+",
    true,
    "La Tostadora",
    "DC Comics",
    "Paramount Pictures",
    "Superhero"
  );
  
let ListPeliculas

ListPeliculas.push(pelicula1);
ListPeliculas.push(pelicula2);
ListPeliculas.push(pelicula3);

const peliculas = new IMDB(ListPeliculas)