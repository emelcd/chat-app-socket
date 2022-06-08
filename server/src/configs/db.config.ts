import mongoose from 'mongoose';

mongoose.connect('mongodb://192.168.122.251:27017/recoMe', (err) => {
  if (err) console.log(err);
  console.log('Connected to MongoDB');
});
