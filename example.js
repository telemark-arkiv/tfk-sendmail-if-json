'use strict'

const sendmail = require('./index')

sendmail((error, message) => {
  if (error) {
    console.error(error)
  } else {
    console.log(message)
  }
})
