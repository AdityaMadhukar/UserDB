const mongoose = require("mongoose");

const DB = "mongodb+srv://Aditya:AdityaMadhukar@cluster0.oqtuyep.mongodb.net/userdatabase?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err.message));
