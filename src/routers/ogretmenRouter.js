const router = require("express").Router();

const ogretmenController = require('../controllers/ogretmenController')

router.post('/ogretmen',ogretmenController.ogretmenAdd)
router.get('/ogretmen',ogretmenController.ogretmenGetAll)

module.exports = router;