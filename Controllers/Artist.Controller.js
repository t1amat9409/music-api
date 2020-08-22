const Artist = require('../Models/Artist.Model')
const controller = {}


controller.add = (req,res) =>{
    const uploadedData = req.uploadedData
    const {stageName, fullName,dob,genre,twitter,facebook,instagram,about,city} = req.body

    const artistObject = {
        stageName, fullName, dob,genre,twitter,facebook,instagram,about,city, picture: uploadedData.url
    }

    const newArtist = new Artist(artistObject).save().then(artistSaveResponse =>{

        res.status(201).json({data:artistSaveResponse, message:'Artist created'})

    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

controller.getAll = (req,res) =>{
    Artist.find().then(artists =>{
        res.status(200).json({data:artists,message:'Artists found'})
    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

module.exports = controller