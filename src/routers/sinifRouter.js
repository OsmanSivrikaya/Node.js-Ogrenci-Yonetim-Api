const router = require("express").Router();

const sinifController = require('../controllers/sinifController')

router.post('/sinif',sinifController.sinifAdd)
router.get('/sinif',sinifController.sinifGetAll)
module.exports = router;