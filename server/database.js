const conn='mongodb+srv://Harthik:1234@cluster0.za9ck1n.mongodb.net/CTO?retryWrites=true&w=majority'

const mongoose= require('mongoose')

const connectDB= async()=>{
    try {
        await mongoose.connect(conn)
        // console.log('connected');
    } catch (error) {
        console.log(error);
    }
}
module.exports= connectDB