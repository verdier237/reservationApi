const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors');

const resRoute = require('./Routes/res')
//

const app = express()
const PORT = 5001

app.use(cors())
app.use(express.json())




const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://uberApp:1a2b3c4d5e@db.jzfadz5.mongodb.net/?retryWrites=true&w=majority&appName=db`)
        console.log(conn.connection.host);
    } catch (error) {
        console.log(error);
    }

}

//connection to db
mongoose.set('strictQuery', false);
connectDb();


app.use('/res',resRoute)

app.get('/',(req,res)=>{
    res.send('Entry point')
})

app.listen(PORT,()=>{
    console.log(`User manager is listenning on ${PORT}`);
})

