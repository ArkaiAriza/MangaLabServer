const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const filterRoutes = require('./routes/filterRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(filterRoutes);

app.get('/', (req, res) => {
  res.send('Hi');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
