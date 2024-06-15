//importing mongoose
import mongoose from 'mongoose';
//creating schema for doctor
 const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please enter your name"]
    },
    password: {type: String,
         required:[true,"Please enter your password"],
    }
});
//creating model with doctorSchema
const Doctor=mongoose.model('Doctor',doctorSchema);
//exporting model
export default Doctor;