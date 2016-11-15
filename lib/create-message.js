'use strict'

const cookies = require('fortune-cookie')
const config = require('../config')
const greetings = require('../config/greetings.json')
const messages = require('../config/messages.json')
const getRandom = require('./get-random')

module.exports = (files) => {
  const numberOfFiles = files.length
  const directoryPath = config.DIRECTORY_PATH
  const cookie = getRandom(cookies)
  const greeting = getRandom(greetings)
  const subject = greeting
  const message = getRandom(messages)

  return {
    subject: subject,
    message: `${message} \n ${cookie}`
  }
}
