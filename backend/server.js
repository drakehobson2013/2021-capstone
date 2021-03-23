const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const restaurantRouter = require('./routes/restaurant');  
const shopRouter = require('./routes/shop');  
const attractionRouter = require('./routes/attraction');  
const historyRouter = require('./routes/history');  

app.use('/restaurant', restaurantRouter);
app.use('/shop', shopRouter);
app.use('/attraction', attractionRouter);
app.use('/history', historyRouter);






app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});