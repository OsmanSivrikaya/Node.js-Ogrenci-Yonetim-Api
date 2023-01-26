const mongo = require('mongoose')

const sinifSchema = new mongo.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }
},
{
    collection:"sinifs",
    timestamps:true
})

const Sinif = mongo.model("sinifs",sinifSchema)

module.exports = Sinif;