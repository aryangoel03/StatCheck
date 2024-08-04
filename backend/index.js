const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const userRoutes = require(`./routes/userRoutes`);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(`/api/users`, userRoutes);

mongoose.connect(config.MONGO_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});