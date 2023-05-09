import { Movie } from './Movie';
const fs = require("fs");

export class IMDB {
  public List_Movies: typeof Movie[] ;
  private String_Json_Movies: string;

  constructor(_movies: typeof Movie[]) {
    this.List_Movies = _movies;
  }

  public get list_Movies(): typeof Movie[] {
    return this.List_Movies;
  }

  public set list_Movies(_movies: typeof Movie[]) {
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
      let nombreFichero = "imdbBBDD.json";
      fs.writeFileSync(nombreFichero, this.String_Json_Movies)

    }
    
  }

  /*public GuardarObjetoJson_Fichero()
  {
    if(this.List_Movies.length === 0)
    {
      console.log("No hay peliculas")
    }
    else
    {  
      let nombreFichero = "imdbBBDD.json";
      fs.writeFileSync(nombreFichero, JSON.stringify(this.List_Movies))
    }
  }*/


  
}