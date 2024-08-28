const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
const app = express();




dotEnv.config();

app.use(cors(
    {origin: 'http://localhost:5173',
    
    credentials: true,
    
    }
));


app.use(bodyParser.json());
const port = process.env.Port;

const db = async () => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log('db connect')
    } catch (error){
        console.log(error)
    }
}

db()


app.use('/api',require('./routes/routes'))




app.get("/", (req, res) => {
    res.send("server is running");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


