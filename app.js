// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/apiRoutes');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
