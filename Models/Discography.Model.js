const mongoose = require('mongoose')

const DiscographySchema = new mongoose.Schema({
    artist: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Artist'
    },
    title: {},
    type: {},
    genre: {},
    date:{},
    description:{}
})

module.exports = mongoose.model('Discography', DiscographySchema)

