const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
