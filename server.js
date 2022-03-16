const express = require('express');

const PORT = process.env.PORT || 3001; 
const app = express();
const noteRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/webpage');

app.use(express.static('public'));
// parse incoming data into strings or arrays 
app.use(express.urlencoded({ extended: true }));
// parse incoming data into JSON format
app.use(express.json());

// adds API routes
app.use('/api', noteRoutes);
// add HTML routes 
app.use('/', htmlRoutes);

app.listen(PORT, () =>{
    console.log(`API server is now on port ${PORT}`);
});

