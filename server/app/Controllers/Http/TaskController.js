'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {

    async index({ auth,request,params }){

        const user = await auth.getUser();
        const { id } = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project, user);
        return await project.tasks().fetch();

    }

    async create({ auth, request, params }){
        //dohvatimo korisnika, opis taska kojeg treba kreirati te projekt za koji je vezan
        const user = await auth.getUser();
        const { description } = request.all();
        const { id } = params
        const project = await Project.find(id);
        //Provjeri ima li korisnik pristup projektu
        AuthorizationService.verifyPermission(project, user);
        //kreiraj novi task
        const task = new Task();
        //ispunimo opis 
        //postavljamo status u 1
        task.fill({
            description,
            is_active: 1,
        });
        //povežemo task za projekt
        await project.tasks().save(task);
        //vratimo task
        return task;
    }
}

module.exports = TaskController
