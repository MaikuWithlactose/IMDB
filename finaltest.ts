import *  as readlineSync from 'readline-sync';
import { IMDB } from './imdb';
import { Movie } from './Movie';
import { Professional } from './Professional';

// Inicializacion de los objetos para hacer pruebas
const prof1 = new Professional("Leonardo DiCaprio.", 56, 77, 1.74, false, "Americano", 2, "Actor");
const prof2 = new Professional("Ana Torroja", 49, 60, 1.75, false, "Español", 1, "Cantante");
const prof3 = new Professional("David Bisbal", 72, 79, 1.83, false, "Español", 1, "Cantante");
const prof4 = new Professional("Jon Favreau", 55, 83, 1.88, false, "American", 0, "Director");
const prof5 = new Professional("Felipe Ruz", 72, 79, 1.83, false, "Español", 1, "Mocatriz");

// Cargamos la lista de actores para cargar las peliculas
const ListActores = [
    prof1,
    prof2,
    prof3
];

// Cargamos las peliculas con los valores anteriores para poder crear una lista que pasar a la clase IMDB
const pelicula1 = new Movie(
    "La tostadora valiente",
    1990,
    ListActores,
    "Español",
    prof4,
    prof4,
    "Ingles/Español",
    "Disney+",
    true,
    "La Tostadora",
    "DC Comics",
    "Paramount Pictures",
    "Superhero",
  );

const pelicula2 = new Movie(
  "La tostadora valiente - Ahora es personal",
  1990,
  ListActores,
  "Español",
  prof4,
  prof4,
  "Ingles/Español",
  "Disney+",
  true,
  "La Tostadora",
  "DC Comics",
  "Paramount Pictures",
  "Superhero"
);  

const pelicula3 = new Movie(
  "La tostadora valiente - Ahora es personal 2",
  1990,
  ListActores,
  "Español",
  prof4,
  prof4,
  "Ingles/Español",
  "Disney+",
  true,
  "La Tostadora",
  "DC Comics",
  "Paramount Pictures",
  "Superhero"
);  

const Temp_ListMovies = [pelicula1,pelicula2,pelicula3]
const TempIMDB = new IMDB(Temp_ListMovies)

// PASOS: 
// 1 - Pedimos que pelicula quiere insertar un nuevo actor. Si no existe, no lo hacemos
// 2 - Si existe la pelicula, insertamos el actor.
const tituloPelicula = readlineSync.question('Título de película: ');

const Name = readlineSync.question('Name: ');
const Age = readlineSync.question('Age: ');
const Weight = readlineSync.question('Weight: ');
const Height = readlineSync.question('Height: ');
const IsRetired = readlineSync.question('IsRetired: ');
const nationality = readlineSync.question('nationality: ');
const oscarsNumber = readlineSync.question('oscarsNumber: ');
const profession = readlineSync.question('profession: ');

// TODO - Corregir los valores que se le pasan al constructor
const nuevoProfesional = new Professional(Name, Age, Weight, Height, IsRetired, nationality, oscarsNumber, profession);

const peliculaBuscada = TempIMDB.List_Movies.find((peliculaBuscada) => peliculaBuscada.Title.toLocaleLowerCase() === tituloPelicula.toLocaleLowerCase() );

if (peliculaBuscada)
 {

    peliculaBuscada.Actors.push(nuevoProfesional);
 
    console.log(`Se ha añadido el profesional ${nuevoProfesional.name} a la película ${peliculaBuscada.Title}.`);


  const jsonActualizado = TempIMDB.ConvertirJSON();
  console.log("Se ha generado : " + jsonActualizado);
  TempIMDB.GuardarObjetoJson_Fichero();

} else 
{
  console.log(`No se ha encontrado ninguna película con el título "${tituloPelicula}".`);
}
