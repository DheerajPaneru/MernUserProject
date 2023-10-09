const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect("mongodb://localhost:27017/5678",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family:4

}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})