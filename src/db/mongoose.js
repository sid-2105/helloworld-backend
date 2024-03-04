const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

const connectToDatabase = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/helloworld-api',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((data)=>{
    console.log(`Mongodb connected with server : ${data.connection.host}`);
})
}

module.exports = connectToDatabase


