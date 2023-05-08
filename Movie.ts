const { Professional } = require("./Professional.ts");  

class Movie {
  private title: string
  private releaseYear: number
  private actors: Professional[]
  private nacionality: string
  private director: Professional
  private writer: Professional
  private language: string
  private plataforma: string
  private isMCU: boolean
  private mainCharacterName: string
  private producer: string
  private distributor: string
  private genre: string


  constructor(_title: string,_releaseYear: number,_actors: Professional[],_nationality: string,_director: Professional,_writer: Professional,_language: string,_plataforma: string,_isMCU: boolean,_mainCharacterName: string,_producer: string,_distributor: string,_genre: string
  ) {
    this.title = _title;
    this.releaseYear = _releaseYear;
    this.actors = _actors;
    this.nacionality = _nationality;
    this.director = _director;
    this.writer = _writer;
    this.language = _language;
    this.plataforma = _plataforma;
    this.isMCU = _isMCU;
    this.mainCharacterName = _mainCharacterName;
    this.producer = _producer;
    this.distributor = _distributor;
    this.genre = _genre;
  }

  public get Title(): string {
    return this.title;
  }

  public get ReleaseYear(): number {
    return this.releaseYear;
  }

  public set ReleaseYear(value: number) {
    this.releaseYear = value;
  }

  public get Actors(): Professional[] {
    return this.actors;
  }

  public get Nationality(): string {
    return this.nacionality;
  }

  public get Director(): Professional {
    return this.director;
  }

  public get Writer(): Professional {
    return this.writer;
  }

  public get Language(): string {
    return this.language;
  }
  
  public get Plataforma(): string {
    return this.plataforma;
  }
  
  public get IsMCU(): boolean {
    return this.isMCU;
  }

  public get MainCharacterName(): string {
    return this.mainCharacterName;
  }
  
  public get Producer(): string {
    return this.producer;
  }

  public get Distributor(): string {
    return this.distributor;
  }

  public get Genre(): string {
    return this.genre;
  }

  public set Title(value: string) {
    this.title = value;
  }

  public set Actors(value: Professional[]) {
    this.actors = value;
  }

  public set Director(value: Professional) {
    this.director = value;
  }

  public set Writer(value: Professional) {
    this.writer = value;
  }

  public set Language(value: string) {
    this.language = value;
  }

  public set Plataforma(value: string) {
    this.plataforma = value;
  }

  public set IsMCU(value: boolean) {
    this.isMCU = value;
  }


  public set MainCharacterName(value: string) {
    this.mainCharacterName = value;
  }

  public set Producer(value: string) {
    this.producer = value;
  }

  public set Distributor(value: string) {
    this.distributor = value;
  }



  public set Genre(value: string) {
    this.genre = value;
  }

  public MostrarMovie(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Release Year: ${this.releaseYear}`);
      console.log(`Actors: ${this.actors.map(actor => actor.name).join(", ")}`);
      console.log(`Nationality: ${this.nacionality}`);
      console.log(`Director: ${this.director.name}`);
      console.log(`Writer: ${this.writer.name}`);
      console.log(`Language: ${this.language}`);
      console.log(`Platform: ${this.plataforma}`);
      console.log(`MCU: ${this.isMCU}`);
      console.log(`Main Character Name: ${this.mainCharacterName}`);
      console.log(`Producer: ${this.producer}`);
      console.log(`Distributor: ${this.distributor}`);
      console.log(`Genre: ${this.genre}`);
  }
}