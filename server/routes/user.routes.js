const UserController = require("../controllers/user.controllers");

module.exports = (app) =>{
    app.get("/api/users",UserController.getAllUsers);
}