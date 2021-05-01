import mongoose from 'mongoose';

const connection = {};

const dbConnect = async  () =>{
    
    if(connection.isConnect){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

    connection.isConnect = db.connection.user;
    console.log('connected to' ,connection.isConnect);
}

export default dbConnect;