class Professional {
  private Name: string;
  private Age: number;
  private Weight: number;
  private Height: number;
  private IsRetired: boolean;
  private Nationality: string;
  private OscarsNumber: number;
  private Profession: string;

  constructor( _name: string, _age: number, _weight: number, _height: number, _isRetired: boolean, _nationality: string, _oscarsNumber: number, _profession: string) {
    this.Name = _name;
    this.Age = _age;
    this.Weight = _weight;
    this.Height = _height;
    this.IsRetired = _isRetired;
    this.Nationality = _nationality;
    this.OscarsNumber = _oscarsNumber;
    this.Profession = _profession;
  }

  // Getters
  public get name(): string {
    return this.Name;
  }

  public get age(): number {
    return this.Age;
  }

  public get weight(): number {
    return this.Weight;
  }

  public get height(): number {
    return this.Height;
  }

  public get isRetired(): boolean {
    return this.IsRetired;
  }

  public get nationality(): string {
    return this.Nationality;
  }

  public get oscarsNumber(): number {
    return this.OscarsNumber;
  }

  public get profession(): string {
    return this.Profession;
  }

  // Setters
  public set name(_name: string) {
    this.Name = _name;
  }

  public set age(_age: number) {
    this.Age = _age;
  }

  public set weight(_weight: number) {
    this.Weight = _weight;
  }

  public set height(_height: number) {
    this.Height = _height;
  }

  public set isRetired(_isRetired: boolean) {
    this.IsRetired = _isRetired;
  }

  public set nationality(_nationality: string) {
    this.Nationality = _nationality;
  }

  public set oscarsNumber(_oscarsNumber: number) {
    this.OscarsNumber = _oscarsNumber;
  }

  public set profession(_profession: string) {
    this.Profession = _profession;
  }

  // Método para mostrar las propiedades
  public MostrarProfessional(): void {
    console.log(`Name: ${this.Name}`);
    console.log(`Age: ${this.Age}`);
    console.log(`Weight: ${this.Weight}`);
    console.log(`Height: ${this.Height}`);
    console.log(`Is Retired: ${this.IsRetired}`);
    console.log(`Nationality: ${this.Nationality}`);
    console.log(`Oscars Number: ${this.OscarsNumber}`);
    console.log(`Profession: ${this.Profession}`);
  }
}