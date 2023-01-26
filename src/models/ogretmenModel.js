const mongo = require('mongoose')

const ogretmenSchema = new mongo.Schema({
    ogretmenAd:{
        type:String,
        required:true,
        trim:true
    },
    ogretmenSoyAd:{
        type:String,
        required:true,
        trim:true
    }
},
{
    collection:"Ogretmen",
    timestamps:true
})

const Ogretmen = mongo.model("Ogretmen",ogretmenSchema)

module.exports = Ogretmen;