//Function to connect project to Mongodb
import mongoose from "mongoose";


const connectDB = async ()=>{
  mongoose.connection.on('connected',()=>console.log('Database Connected'))

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB

//Function to connect project to MongoDB
