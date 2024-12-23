const mongoose = require('mongoose')

const connectTOdb = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mycourses',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Connected TO DATAbase Successfully!!!")
    }
    catch(error){
        console.error("error connecting to mongo", error.message)
    }
}

module.exports=connectTOdb()