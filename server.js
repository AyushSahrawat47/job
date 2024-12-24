const express = require('express');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
require('dotenv').config();


const app = express();

connectDB();
const PORT = process.env.PORT || 5000; 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/jobs', jobRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})