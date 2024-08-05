require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js');

// Express app (function invoke)
const app = express();
// const getRouters = 
// console.log("Starting server...");

// Middleware
app.use(express.json())
// app.use((req, res, next) => {
//     console.log('Middleware executed');
//     console.log('Request Path:', req.path);
//     console.log('Request Method:', req.method);
//     next(); // Pass control to the next middleware function or route handler
// });

// // Routes
// app.get('/', (req, res) => {
//     console.log('GET / route handler');
//     res.json({ msg: 'This is json response' });
// });

app.use('/api/workouts',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI).then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);

    });
}).catch((error)=>{console.log(error)});

// Listen for requests
// const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not defined
// app.listen(port, () => {
//     console.log("Server is running on port", port);
//     console.log("hello I am Baymax.!!!!", port);
// });
