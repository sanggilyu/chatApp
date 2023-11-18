// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const cors = require('cors');
// const app = express();
// app.use(cors());


// mongoose
//     .connect(process.env.DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log('Connected to DB'));
//     // .catch((err) => console.error('Error connecting to DB:', err));



// module.exports = app;


const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('Error connecting to DB:', err));

module.exports = app;
