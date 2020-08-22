
const router = require('express').Router()
const controller = require('../Controllers/Discography.Controller')
const {uploadImage} = require('../Utils/uploader')

router.get('/', controller.get)
router.post('/',uploadImage,controller.add)

module.exports = router