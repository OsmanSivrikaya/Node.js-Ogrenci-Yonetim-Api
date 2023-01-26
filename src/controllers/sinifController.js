const Sinif = require('../models/sinifModel')

const sinifAdd = async (req, res) =>{
    try {
        const sinifAdd = new Sinif(req.body)
        await sinifAdd.save()
        .then(()=>{
            return res.status(201).json(sinifAdd)
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

const sinifGetAll = async (req, res) => {
    try {
        const result = await Sinif.find({})
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
    sinifAdd,
    sinifGetAll
}