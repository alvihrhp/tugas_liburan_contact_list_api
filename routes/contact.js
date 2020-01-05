'use strict';

const express = require('express');
const routes = express.Router();
const ContactController = require('../controller/ContactController');

routes.get('/', ContactController.showContact);

routes.post('/add', ContactController.addContact);

routes.put('/:id', ContactController.updateContact);

routes.delete('/:id', ContactController.deleteContact);

module.exports = routes;