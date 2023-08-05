const router = require('express').Router()
const Controllers = require('../Controllers/index.js')

router.get('/rj', Controllers.rioDeJaneiro)
router.get('/es', Controllers.espiritoSanto)
router.get('/sp', Controllers.saoPaulo)
router.get('/mg', Controllers.minasGerais)

module.exports = router