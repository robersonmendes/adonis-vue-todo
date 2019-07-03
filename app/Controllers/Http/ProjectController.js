'use strict'
const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService')

class ProjectController {
    async index ({auth}) {
        const user = await auth.getUser();
        return user.projects().fetch();
    }

    async create({auth, request}) {
        const user =  await auth.getUser();
        const{title} = request.all();
        const project = new Project;
        project.fill({
            title,
        }); /** => project.title = title */
        await user.projects().save(project);
        return project;
    }

    async destroy({auth, request, params}) {
        const user = await auth.getUser();
        const {id} = params; /** --> const id = params.id */
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(user, project);
        await project.delete();
        return project;
    }
}

module.exports = ProjectController