const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require ('cookie-parser');

// require routes 

let mobile = require('./routes/mobile');

const app = express();


require('dotenv').config();

const PORT = process.env.PORT|| 5000;

const SITE = process.env.URL || '*';

const HEADER = process.env.HEADER || [   "Upgrade-Insecure-Requests", "1"];

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/deviceadvice';

mongoose.connect(DB_URL,{

    useUnifiedTopology: "true",
    useNewUrlParser: "true"

},(err)=>{
    console.info(`DB is connected`);
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(express.json());

app.use(cors({
    origin: SITE,
    optionsSuccessStatus:202,
    // credentials : true,
    // maxAge : 1800,
    // allowedHeaders : HEADER,
}));

app.use(cookieParser());





//adding route
app.use('/mobile',mobile);


app.listen(PORT,()=>{

    console.info(`SERVER RUNNING AT ${PORT}`)

})
