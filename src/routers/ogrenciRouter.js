const router = require("express").Router();

const ogrenciController = require('../controllers/ogrenciController')

router.post('/ogrenci',ogrenciController.ogrenciAdd)
router.get('/ogrenci/:id',ogrenciController.ogrenciGet)
router.get('/ogrenci',ogrenciController.ogrenciGetAll)
router.put('/ogrenci/:id',ogrenciController.ogrenciUpdate)
router.delete('/ogrenci/:id',ogrenciController.ogrenciDelete)
module.exports = router;