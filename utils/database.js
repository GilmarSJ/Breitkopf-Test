import mongoose from "mongoose";

const URI = 'mongodb://mongo:mongo@localhost:27017'


const databaseConnection = async () => {
    if(!global.mongoose) {
        mongoose.set('strictQuery', false) 
        global.mongoose = await mongoose.connect(URI)
    }
    
}

export default databaseConnection