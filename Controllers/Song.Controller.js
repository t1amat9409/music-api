const Song = require('../Models/Song.Model')
const Controller = {
    getByDisc: (req, res) =>{
        Song.find({discography: req.params.id}).populate('discography').then(songResult =>{
            res.status(200).json({data: songResult,message:'Songs found'})
        }).catch(e =>{
            res.status(500).json({error:e})
        })
    },
    get: (req, res) =>{
        Song.find().populate('discography').then(songResult =>{
            res.status(200).json({data: songResult,message:'Songs found'})
        }).catch(e =>{
            res.status(500).json({error:e})
        })
    },
    add: (req,res) =>{
        const uploadedData = req.uploadedData
        const {discography, title } = req.body

        const songObject = {
            discography, title, url: uploadedData.url
        }

        const newSong = new Song(songObject).save().then(songSaveResult =>{
            res.status(201).json({data:songSaveResult,message:'Song saved'})
        }).catch(e =>{
            res.status(500).json({error:e})
        })
    }
}

module.exports = Controller
