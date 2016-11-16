'use strict'

module.exports = {
  DIRECTORY_PATH: process.env.DIRECTORY_PATH || 'test/data/files',
  MAIL_TO: process.env.MAIL_TO || 'jonas.enge@gmail.com',
  MAIL_FROM: process.env.MAIL_FROM || 'botolf@t-fk.no',
  API_KEY: process.env.API_KEY || 'your-sendgrid-api-key'
}
