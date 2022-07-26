const Pirate = require("../models/pirate.model")

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(allPirates =>{
            res.json({results: allPirates})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.createNewPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate =>{
            res.json({results: newPirate})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirate =>{
            res.json({results: pirate})
        })
        .catch(err =>{
            res.json(err)
        })
}

module.exports.updateOnePirate = (req, res) => {
    Pirate.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatePirate =>{
            res.json({results: updatePirate})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(pirate =>{
            res.json({results: pirate})
        })
        .catch(err =>{
            res.json(err)
        })
}