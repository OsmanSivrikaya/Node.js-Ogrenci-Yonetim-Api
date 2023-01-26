const mongo = require('mongoose')

const ogrenciSchema = new mongo.Schema({
    ad:{
        type:String,
        required:true,
        trim:true
    },
    soyAd:{
        type:String,
        required:true,
        trim:true
    },
    sinifId: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'sinifs',
        required: true
    },
    ogretmenId:{
        type: mongo.Schema.Types.ObjectId,
        ref:'Ogretmen',
        required:true,
    }
},
{
    collection:"Ogrenci", //tablo adı 
    timestamps:true
})

const Ogrenci = mongo.model("Ogrenci",ogrenciSchema)

module.exports = Ogrenci;