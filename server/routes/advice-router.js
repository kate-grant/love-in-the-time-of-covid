
const express = require('express')

const AdviceCtrl = require('../controllers/advice-ctrl.js')

const router = express.Router()

console.log("6");

router.post('/advice', AdviceCtrl.createAdvice)
router.put('/advice/:id', AdviceCtrl.updateAdvice)
router.delete('/advice/:id', AdviceCtrl.deleteAdvice)
router.get('/advice/:id', AdviceCtrl.getAdviceById)
router.get('/advice/:tag', AdviceCtrl.getAdviceByTag)
router.get('/allAdvice', AdviceCtrl.getAdvice)

module.exports = router