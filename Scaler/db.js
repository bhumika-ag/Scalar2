const mongoose = require("mongoose");
var mongoURL ='mongodb+srv://bhumika:123@cluster0.os5sdqy.mongodb.net/scalerooms'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var connection = mongoose.connection
connection.on('error',()=>{
    console.log('Mongo DB Failed')
})
connection.on('connected',()=>{
    console.log('Mongo DB Successsful')
})

 module.exports=mongoose