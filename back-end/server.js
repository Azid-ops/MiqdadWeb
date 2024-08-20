const express = require('express')
const UserRouter = require('./routes/UserRoutes');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    Credential: true,
}))

app.use('/user',UserRouter);

mongoose.connect(process.env.LOCAL_DATABASE).then(()=>{
    app.listen(process.env.PORT, console.log("server is running"))

}).catch(err=>{
    console.log("error",err);
})
