const { Movie } = require("./Movie.ts");  
const { Professional } = require("./Professional.ts");  

const pelicula = new Movie(
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
  
// Llamando al método para mostrar las propiedades
pelicula.MostrarMovie();