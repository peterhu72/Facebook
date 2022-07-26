const PirateController = require("../controllers/pirate.controller");

module.exports = (app) =>{
    app.get("/api/pirates",PirateController.findAllPirates);
    app.post("/api/pirates", PirateController.createNewPirate);
    app.get("/api/pirates/:id",PirateController.findOnePirate);
    app.put("/api/pirates/:id",PirateController.updateOnePirate);
    app.delete("/api/pirates/:id",PirateController.deletePirate);
}