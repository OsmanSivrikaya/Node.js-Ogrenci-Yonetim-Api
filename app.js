const express = require("express")//express paketini projeye dahil ediyor
const app = express();

require("dotenv").config();//env projeye dahil ediliyor
require("./src/config/databaseConnection.js")//database bağlantısı yapılıyor

const port = process.env.PORT || 5001 //port nosunu bulamazsa 5001 i ata
const ogrenciRouter = require("./src/routers/ogrenciRouter")
const sinifRouter = require("./src/routers/sinifRouter")
const ogretmenRouter = require("./src/routers/ogretmenRouter")
app.use(express.json())//postmandan json veri göndermek için 

app.use("/api",ogrenciRouter)
app.use("/apiSinif",sinifRouter)
app.use("/apiOgretmen",ogretmenRouter)

app.get("/", (req, res) =>{
    res.send("Hoşgeldiniz")
})

app.listen(port, ()=>{
    console.log(`Server ${port} Portundan Başlatıldı ...`)
})

/*
app.listen, Node.js'de bir web sunucusu oluşturmak için kullanılan Express.js kütüphanesinin bir fonksiyonudur. 
Bu fonksiyon, bir IP adresi ve bir bağlantı noktası (port) belirterek sunucunun belirli bir bağlantı noktasından dinlemesini sağlar. 
Bu sayede, sunucu tarafından yapılan istekleri algılayabilir ve yanıt verebilir.
*/