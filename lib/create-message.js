'use strict'

const cookies = require('fortune-cookie')
const config = require('../config')
const getRandom = require('./get-random')

module.exports = (files) => {
  const numberOfFiles = files.length
  const directoryPath = config.DIRECTORY_PATH
  const messages = require('../config/messages')({numberOfFiles: numberOfFiles, directoryPath: directoryPath})
  const cookie = getRandom(cookies)
  const subject = cookie
  const message = getRandom(messages)

  return {
    to: config.MAIL_TO,
    from: config.MAIL_FROM,
    subject: subject,
    text: message
  }
}
