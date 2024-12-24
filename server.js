const express = require('express');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const cors = require('cors')
require('dotenv').config();


const app = express();

connectDB();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/', jobRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})