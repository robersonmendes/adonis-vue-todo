const UnauthorizedUserException = use('App/Exceptions/UnauthorizedUserException')
const ResourceDoesNotExistException = use('App/Exceptions/ResourceDoesNotExistException')

class AuthorizationService {
  verifyPermission(user, resource) {
    if(!resource) {
        throw new ResourceDoesNotExistException();
    }

    if(resource.user_id !== user.id) {
        throw new UnauthorizedUserException();
    }
  }  
}

module.exports = new AuthorizationService();
