import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
}).then(() => console.log('yeee')).catch(e => console.log(e));


const UserSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model('User', UserSchema);


const app = express();
app.use(cors())
// app.use('/api');
app.get('/api', (req, res) => {
  res.send('HIT AT API');
});


app.listen(3001);
