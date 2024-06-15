//importing mongoose 
import mongoose from 'mongoose';

export const DB=async()=>{
    try{
      //connecting to database
      //there was a connection error on localhost so thats why I used mongodb://0.0.0.0:27017/HospitalApi instead of mongodb://localhosat:27017/HospitalApi
      await mongoose.connect("mongodb://0.0.0.0:27017/HospitalApi");
      console.log('connected to database');
    }catch(err){
      //consoling the error
        console.error(err);
    }
};
