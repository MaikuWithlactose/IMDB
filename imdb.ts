const { Movie } = require("./Movie.ts");  

class IMDB {
  private List_Movies: Movie[] ;

  constructor(_movies: Movie[]) {
    this.List_Movies = _movies;
  }

  public get list_Movies(): Movie[] {
    return this.List_Movies;
  }

  public set list_Movies(_movies: Movie[]) {
    this.List_Movies = _movies;
  }

}