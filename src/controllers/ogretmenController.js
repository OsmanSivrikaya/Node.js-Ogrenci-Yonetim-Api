const Ogretmen = require('../models/ogretmenModel')

const ogretmenAdd = async (req, res) =>{
    try {
        const ogretmenAdd = new Ogretmen(req.body)
        await ogretmenAdd.save()
        .then(()=>{
            return res.status(201).json(ogretmenAdd)
        })
        .catch((err) =>{
            return res.status(400).json({
                success:false,
                message:"Kayıt Oluşturulurken Hata Çıktı : " + err
            })
        })
    } catch (error) {
        //sunucu ile ilgili hata olduğu için 500 hata kodunu dönüyoruz
        return res.status(500).json({
            success:false,
            message:"Kayıt Oluşturulamadı !"
        })
    }
}
const ogretmenGetAll = async (req, res) => {
    try {
        const result = await Ogretmen.find({})
        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                data: result
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Kayıtlar Getirilemedi"
            })
        }
    } catch (error) {
        //sunucu ile ilgili hata olduğu için 500 hata kodunu dönüyoruz
        return res.status(500).json({
            success: false,
            message: "Kayıt Getirilemedi !" + error
        })
    }
}

module.exports = {
    ogretmenAdd,
    ogretmenGetAll
}