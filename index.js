require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000
const artistsRoutes = require('./Routes/Artist.Routes')

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb',extended: true}))

mongoose.connect(process.env.MONGODB,{useUnifiedTopology :true})
.then(()=>{console.log('DB Connected')}).catch(err=>console.log(err))

app.get('/',(req,res) =>{
    res.send('Founda Music API running...')
})

app.use('/artists',artistsRoutes)

app.listen(port,()=>{
    console.log('app running...')
})