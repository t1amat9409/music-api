const router = require('express').Router()
const controller = require('../Controllers/Artist.Controller')
const {uploadImage} = require('../Utils/uploader')

router.get('/',controller.getAll)
router.post('/',uploadImage,controller.add)
router.get('/addpoints/:id',controller.addPoints)

module.exports = router