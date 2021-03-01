import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//created a route and adding now
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//As we have added prefix posts in here all will to get /post requests like
//http://localhost:5000/posts
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://simmi_agrawal:4VZUgaEHRHEAmy7@cluster0.ufxjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//const CONNECTION_URL = 'mongodb://127.0.0.1:27017';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

  mongoose.set('useFindAndModify', false);
