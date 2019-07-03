'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceDoesNotExistException extends LogicalException {
  handle (error, { response }) {
    response
      .status(404)
      // .send('This resource does not exists') --> ao invés do .json, poderia ser essa linha, como mostra a documentação
      .json({
        error: 'This project did not exist'
      })
  }
}

module.exports = ResourceDoesNotExistException
