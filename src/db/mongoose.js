const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

const connectToDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((data)=>{
    console.log(`Mongodb connected with server : ${data.connection.host}`);
})
}

module.exports = connectToDatabase


