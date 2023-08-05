class Controllers {
  static async rioDeJaneiro(req, res) {
    const RjData = {
      nameCity: "Rio de Janeiro",
      population: 6748000,
      fundationDate: "01/03/1565",
      extensionCity: "1.200km²",
    };
    res.status(200).json({ RjData });
  }
  static async espiritoSanto(req, res) {
    const EsData = {
      nameCity: "Espirito Santo",
      population: 3885000,
      fundationDate: "07/07/1822",
      extensionCity: "46.095km²",
    };
    res.status(200).json({ EsData });
  }
  static async saoPaulo(req, res) {
    const SpData = {
      nameCity: "São Paulo",
      population: 12330000,
      fundationDate: "25/01/1554",
      extensionCity: "1.521km²",
    };
    res.status(200).json({ SpData });
  }
  static async minasGerais(req, res) {
    const MgData = {
      nameCity: "Minas Gerais",
      population: 20087000,
      fundationDate: "02/12/1720",
      extensionCity: "586.528km²",
    };
    res.status(200).json({ MgData });
  }
}

module.exports = Controllers;
