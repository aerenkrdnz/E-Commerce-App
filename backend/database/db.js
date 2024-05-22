const mongoose = require("mongoose");

const uri = "mongodb+srv://AekDB:eren.123@aekdb.32ieqhc.mongodb.net/";

const connection = () => {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı."))
    .catch((err)=>console.log("Bağlantı hatası" + err.message));
}

module.exports = connection;