const { ProfessionalClass } = require("./Professional.js");  

const actor = new ProfessionalClass.Professional("Curro Romero", 47, 75, 1.83, false, "Español", 1, "Modelo, Cantante y Actor");

// Llamando al método para mostrar las propiedades
actor.MostrarProfessional();