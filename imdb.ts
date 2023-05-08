class IMDB {
  private List_Movies: typeof Movie[] ;

  constructor(_movies: typeof Movie[]) {
    this.List_Movies = _movies;
  }

  public get list_Movies(): typeof Movie[] {
    return this.List_Movies;
  }

  public set list_Movies(_movies: typeof Movie[]) {
    this.List_Movies = _movies;
  }

}