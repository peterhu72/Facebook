const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required"],
    },
    imgUrl: {
        type: String,
        required: [true, "Image is needed!"],
    },
    numChests: {
        type: Number,
        required: [true, "Number of Chests is required"],
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase is required"],
    },
    position: {
        type: String,
    },
    isPegLeg: {
        type: Boolean
    },
    isEyePatch: {
        type: Boolean
    },
    isHookHand: {
        type: Boolean
    }
}, {timestamps: true}) 

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;
