const { cloudinary } = require('./cloudinary')

const uploadImage = async (req,res,next)=>{

    try{

        const {file} = req.body

        const cloudinaryResponse = await cloudinary.uploader.upload(file,{
            upload_preset: 'images'
        }).catch(e =>{
            
            return res.status(500).json({message: 'Cloudinary error', error: e})
        })

        req.uploadedData = cloudinaryResponse
        next()

    }catch(e){
        res.status(500).json({error:e,message:'Can not upload'})
    }

}

const uploadAudio = async (req,res,next) =>{

    try{

        const {file} = req.body

        const cloudinaryResponse = await cloudinary.uploader.upload(file,{
            upload_preset: 'music-files',
            resource_type: "video"
        }).catch(e =>{
            
            return res.status(500).json({message: 'Cloudinary error', error: e})
        })

        req.uploadedData = cloudinaryResponse
        next()

    }catch(e){
        res.status(500).json({error:e,message:'Can not upload'})
    }

}

module.exports = {uploadImage,uploadAudio}