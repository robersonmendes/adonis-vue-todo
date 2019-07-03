'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const message = 'You do not have permission to delete this project'
const status = 403
const code = "E_NOT_AUTHORIZED"

class UnauthorizedUserException extends LogicalException {
  constructor () {
    super(message, status, code)
  }
}

module.exports = UnauthorizedUserException
