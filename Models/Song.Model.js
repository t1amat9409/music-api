const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    discography: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Discography'
    },
    title: {}
})

module.exports = mongoose.model('Song', SongSchema)