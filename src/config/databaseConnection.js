const mongo = require("mongoose")

mongo.set('strictQuery',true);
/*
Bu ayar aktif edildiğinde, Mongoose sorguların belirli bir şekilde yazılmış olmasını zorunlu kılar. 
Örneğin, sorguda belirli bir alanın varlığının kontrol edilmesi gerekebilir. 
Bu, veritabanındaki hataların daha erken tespit edilmesine ve uygulamanın daha güvenli bir şekilde çalışmasına yardımcı olur.
*/

/*
useNewUrlParser: true ve useUnifiedTopology: true parametreleri, MongoDB bağlantısının daha güvenli ve stabil bir şekilde gerçekleştirilmesini sağlar. 
useNewUrlParser parametresi, MongoDB bağlantı dizesinin yeni bir URL parser kullanarak parse edilmesini sağlar. 
useUnifiedTopology parametresi ise, MongoDB bağlantısının daha güvenli ve stabil bir şekilde gerçekleştirilmesini sağlar.
*/
mongo.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Veri Tabanı Bağlantısı Başarılı")
}).catch((err)=>{
    console.log("Veri Tabanı Bağlantısı Hatalı Hata Kodu: " + err)
})
