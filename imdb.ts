import { Movie } from './Movie';
const fs = require("fs");
const path = require("path");

export class IMDB {

  public List_Movies: Movie[] ;
  private String_Json_Movies: string;
  private NameFileJson: string = "imdbBBDD.json";

  constructor(_movies: Movie[]) {
    this.List_Movies = _movies;
  }

  public get list_Movies():  Movie[] {
    return this.List_Movies;
  }

  public set list_Movies(_movies:  Movie[]) {
    this.List_Movies = _movies;
  }

  public ConvertirJSON()
  {
    this.String_Json_Movies = JSON.stringify(this.List_Movies)
    return this.String_Json_Movies;
  }

  public GuardarObjetoJson_Fichero()
  {
    if(this.List_Movies.length === 0)
    {
      console.log("No hay peliculas")
    }
    else
    {
      if(this.String_Json_Movies.length === 0 )
      {
        this.ConvertirJSON();
      }

      //Crea el fichero a partir de la lista de peliculas del string convertido a JSON
      fs.writeFileSync(this.NameFileJson, this.String_Json_Movies)

    }
    
  }

  public LeerObjetoJson_Fichero()
  {
    if(this.List_Movies.length === 0)
    {
      console.log("No hay peliculas")
    }
    else
    {
      //Crea el fichero a partir de la lista de peliculas del string convertido a JSON
      this.List_Movies = JSON.parse(fs.readFileSync(path.resolve(this.NameFileJson)))    
    }
  }

  public EscribirObjetoJson_Fichero(NombreFichero:string)
  {
    if(this.List_Movies.length === 0)
    {
      console.log("No hay peliculas")
    }
    else
    {
      if(this.String_Json_Movies.length === 0 )
      {
        this.ConvertirJSON();
      }
      fs.writeFileSync(NombreFichero, this.String_Json_Movies)
    }
  }

  public ObtenerObjetoJson_Fichero(NombreFichero:string)
  {
    if(this.List_Movies.length === 0)
    {
      console.log("No hay peliculas")
    }
    else
    {
      this.List_Movies = JSON.parse(fs.readFileSync(path.resolve(NombreFichero)));
    }
  }  
}