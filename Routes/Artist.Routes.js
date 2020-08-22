const router = require('express').Router()
const controller = require('../Controllers/Artist.Controller')
const {uploadImage} = require('../Utils/uploader')

router.get('/',controller.getAll)
router.post('/',uploadImage,controller.add)

module.exports = router