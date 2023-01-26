const Ogrenci = require('../models/ogrenciModel')
const Sinif = require('../models/sinifModel')

const ogrenciAdd = async (req, res) => {
    try {
        const ogrenciAdd = new Ogrenci(req.body)
        await ogrenciAdd.save()
            .then(() => {
                return res.status(201).json(ogrenciAdd)
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    message: "Kayıt Oluşturulurken Hata Çıktı : " + err
                })
            })
    } catch (error) {
        //sunucu ile ilgili hata olduğu için 500 hata kodunu dönüyoruz
        return res.status(500).json({
            success: false,
            message: "Kayıt Oluşturulamadı !"
        })
    }
}

const ogrenciGet = async (req, res) => {
    try {
        const Id = req.params.id
        const result = await Ogrenci.find({ _id: Id }).populate({ path: 'sinifId', model: 'sinifs' }).populate({ path: 'ogretmenId', model: 'Ogretmen' })
        if (result != null) {
            return res.status(200).json({
                success: true,
                data: result
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Ogrenci Getirilemedi"
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

const ogrenciGetAll = async (req, res) => {
    const { page } = req.query
    const limit = 2 //sayfaya gelicek veri sayısı
    const skip = Number(page - 1) * limit //sonraki sayfaya geçilicek skip
    try {
        const result = await Ogrenci.find({}).populate('sinifId').limit(limit).skip(skip)
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
//const todoDelete = await todo.findByIdAndDelete(id)
const ogrenciUpdate = async (req, res) => {
    const { id } = req.params;
    try {
        const todoogrenci = await Ogrenci.findByIdAndUpdate(id, req.body)
        if (todoogrenci) {
            return res.status(200).json({
                success: true,
                data: todoogrenci
            })
        }
        else {
            return res.status(400).sjon({
                success: true,
                message: "Ogrenci Güncellendi"
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
const ogrenciDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const ogrenciDelete = await Ogrenci.findByIdAndDelete(id)
        if (ogrenciDelete) {
            return res.status(200).json({
                success: true,
                data: ogrenciDelete
            })
        }
        else {
            return res.status(400).sjon({
                success: true,
                message: "Kayıt Silinemedi"
            })
        }
    } catch (error) {
        //sunucu ile ilgili hata olduğu için 500 hata kodunu dönüyoruz
        return res.status(500).json({
            success: false,
            message: "Kayıt Silinemedi !" + error
        })
    }
}

module.exports = {
    ogrenciAdd,
    ogrenciGet,
    ogrenciGetAll,
    ogrenciUpdate,
    ogrenciDelete
}