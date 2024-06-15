//importing mongoose
import mongoose from 'mongoose';
//creating schema for patient
export const patientSchema = mongoose.Schema({
    name:{
       type: String,
       required: [true,"Please provide patient name"]
    },
    phone:{
        type: Number,
        required: true,
        minLength:11
    },
    //report schema
    reports: [{status:{
        type: String,
        enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"]
        }
    }],
    date: {
        type: Date,
        required: true,
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    }
})
//creating model with patientSchema
 const Patient = mongoose.model("Patient",patientSchema);
 //exporting model
 export default Patient;