const router = require('express').Router()
const controller = require('../Controllers/Song.Controller')
const {uploadAudio} = require('../Utils/uploader')

router.get('/:id',controller.getByDisc)
router.get('/',controller.get)
router.post('/',uploadAudio,controller.add)

module.exports = router