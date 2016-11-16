'use strict'

const config = require('../config')
const sendgrid = require('sendgrid')(config.API_KEY)
const createMessage = require('./create-message')
const buildMail = require('./build-mail')

module.exports = (files, callback) => {
  const message = createMessage(files)
  const email = buildMail(message)
  const request = sendgrid.emptyRequest(email)

  sendgrid.API(request, function (error, response) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, response)
    }
  })
}
