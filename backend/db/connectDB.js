import mongoose from "mongoose"

export const connectDB = async () => {
    try{
       const conect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${conect.connection.host}`)
    }catch(error){
        console.log("Error connection to MongoDB : ", error.message0)
        process.exit(1); // failure == 1 , 0 for succcess
    }
}