'use strict';

const Contact = require('../models').Contact;

let respondSend = {}

class ContactController {
    static showContact(req, res) {
        Contact.findAll()
        .then(contacts => {
            respondSend = {
                status: 200,
                message: "OK",
                result: contacts
            }
            res.status(respondSend.status).json(respondSend)
        })
        .catch(error => {
            respondSend = {
                status: 400,
                message: "Bad Request",
                result: error
            }
            res.status(respondSend.status).json(respondSend)
        })
    }

    static addContact(req, res) {
        let createContact = {
            name: "Patra Dayanand",
            phone: "085831381346",
            email: "rdforces@gmail.com"
        }
        Contact.create(createContact)
        .then((contact) => {
            respondSend = {
                status: 201,
                message: "OK",
                result: contact
            }
            res.status(respondSend.status).json(respondSend);
        })
        .catch(error => {
            respondSend = {
                status: 400,
                message: "Bad Request",
                result: error
            }
            res.status(respondSend.status).json(respondSend);
        })
    }

    static updateContact(req, res) {
        Contact.findByPk(Number(req.params.id))
        .then(contact => {
            if(!contact) {
                respondSend = {
                    status: 404,
                    message: "Not Found",
                    result: "You don't have any contact"
                }
                res.status(respondSend.status).json(respondSend);
            } else {
                let updateContact = {
                    name: "Rafael Alviano Dafito"
                }
                return Contact.update(updateContact, {where: {id: Number(req.params.id)}})
            }
        })
        .then(_ => {
            respondSend = {
                status: 200,
                message: "OK",
                result: "Contact has been updated"
            }
            res.status(respondSend.status).json(respondSend);
        })
        .catch(error => {
            respondSend = {
                status: 400,
                message: "Bad Request",
                result: error
            }
            res.status(respondSend.status).json(respondSend)
        })
    }

    static deleteContact(req, res) {
        Contact.findByPk(Number(req.params.id))
        .then(contact => {
            if(!contact) {
                respondSend = {
                    status: 404,
                    message: "Not Found",
                    result: "You Don't Have Contact"
                }
                res.status(respondSend.status).json(respondSend);
            } else {
                return Contact.destroy({where: {id: Number(req.params.id)}})
            }
        })
        .then(_ => {
            respondSend = {
                status: 200,
                message: "OK",
                result: "Contact has been Deleted"
            }
            res.status(respondSend.status).json(respondSend);
        })
        .catch(error => {
            respondSend = {
                status: 400,
                message: "Bad Request",
                result: error
            }
            res.status(respondSend.status).json(respondSend);
        }) 
    }
}

module.exports = ContactController;