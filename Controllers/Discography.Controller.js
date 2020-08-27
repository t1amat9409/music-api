const Discography = require('../Models/Discography.Model')
const controller = {}

controller.get = (req,res) =>{
    Discography.find().populate('artist').then(discographies =>{
        discographies = discographies.sort((a,b)=>{
            return b.points - a.points
        })
        res.status(200).json({data:discographies,message:'Discographies found'})
    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

controller.add = (req,res) =>{
    const uploadedData = req.uploadedData
    const {artist, title, type, genre, date, description} = req.body

    const discographyObject = {
        artist,title, type,genre,date,description, picture: uploadedData.url, points: 0
    }

    const newDiscography = new Discography(discographyObject).save().then(discographySaveResult =>{
        res.status(201).json({data:discographySaveResult,message:'Discography created'})
    }).catch(e =>{
        res.status(500).json({error:e})
    })

}


controller.addPoints = (req,res) =>{
    Discography.findById(req.params.id).then(disc =>{
        disc.points += 1
        disc.save().then(resp =>{
            res.status(200).json({success:'Points added',message:'Points added'})
        }).catch(e =>{
            res.status(500).json({error:e})
        })
    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

controller.byArtist = (req,res) =>{
    Discography.find({artist:req.params.id}).then(disc =>{
        res.status(200).json({data:disc})
    }).catch(e =>{
        res.status(500).json({error:e})
    })
}

module.exports = controller