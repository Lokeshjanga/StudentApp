const mongoose =require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{type: String ,required : true},
    description:{type: String ,required : true},
    price:{type: Number ,required : true},
    duration:{type: String ,required : true},
});

const course = mongoose.model("course",courseSchema)

module.exports=course