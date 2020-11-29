import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cron = require('cron').CronJob;
const cors = require('cors');

const UserSchema = new mongoose.Schema({
  name: String,
});

const User = mongoose.model('User', UserSchema);

const job = new cron(
  '*/10 * * * * *',
  async function() {
    console.log(new Date().getSeconds());
    await User.create({ name: 'Manny '});
    axios.get('http://api:3001/api')
      .then(res => {
        console.log('leh data',res.data);
      })
      .catch(e => console.log(e));
  },
  null,
  true,
  'America/Los_Angeles'
);





mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
}).then(() => console.log('yeee')).catch(e => console.log(e));



const app = express();
app.use(cors())

app.get('/', async (req, res) => {
  res.json('Successfully');
})

app.listen(3002);
