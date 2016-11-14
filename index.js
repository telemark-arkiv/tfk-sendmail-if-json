'use strict'

const fs = require('fs')
const sendMail = require('./lib/send-mail')
const config = require('./config')
const isJsonFile = file => file.indexOf('.json') > -1

module.exports = (callback) => {
  const files = fs.readdirSync(config.DIRECTORY_PATH).filter(isJsonFile)

  if (files.length > 0) {
    console.log(`${files.length} files forund in ${config.DIRECTORY_PATH}`)
    sendMail(files, (error, data) => {
      if (error) {
        console.error(error)
        return callback(error, null)
      } else {
        console.log(data)
        return callback(null, data)
      }
    })
  } else {
    console.log(`No files found in ${config.DIRECTORY_PATH}`)
    return callback(null, {success: true, files: 0})
  }
}
