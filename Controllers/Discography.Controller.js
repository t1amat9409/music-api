const Discography = require('../Models/Discography.Model')
const controller = {}

controller.get = (req,res) =>{
    Discography.find().then(discographies =>{
        res.status(200).json({data:discographies,message:'Discographies found'})
    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

controller.add = (req,res) =>{
    const uploadedData = req.uploadedData
    const {artist, title, type, genre, date, description} = req.body

    const discographyObject = {
        artist,title, type,genre,date,description, picture: uploadedData.url
    }

    const newDiscography = new Discography(discographyObject).save().then(discographySaveResult =>{
        res.status(201).json({data:discographySaveResult,message:'Discography created'})
    }).catch(e =>{
        res.status(500).json({error:e})
    })

}

module.exports = controller