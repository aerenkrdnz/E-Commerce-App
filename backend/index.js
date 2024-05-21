const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("",(req,res)=>{
    res.json({message: "Api isteği başarılı şekilde çalışıyor"})
})

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log("Uygulama http://localhost:5000 portunda ayağa kalktı."));