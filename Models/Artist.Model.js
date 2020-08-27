const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
    stageName: {},
    fullName: {},
    dob: {},
    genre: {},
    twitter:{},
    facebook:{},
    instagram:{},
    about: {},
    picture:{},
    city:{},
    points: {}
})

module.exports = mongoose.model('Artist', ArtistSchema)