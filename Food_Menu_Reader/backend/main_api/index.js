'use strict';
const express = require('express');
const cors = require('cors');
const config = require('./config');
const AuthRoutes = require('./routes/auth-route');
const UserRoutes = require('./routes/user-route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', AuthRoutes.routes);
app.use('/api', UserRoutes.routes);

app.listen(config.port, () => console.log('App is listening on ' + config.port))
