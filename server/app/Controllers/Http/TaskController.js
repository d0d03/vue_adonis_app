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
        return await project.tasks().where('is_active',1).fetch();

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

    async destroy({ auth, request, params }){
        //dohvati korisnika
        const user = await auth.getUser();
        //dohvati id projekta koji želimo obrisati
        const { id } = params;
        //pronađi traženi projekt
        const task = await Task.find(id);
        //ako je projekt nije za korisnika koji šalje zahtjev vrati UNAUTHORIZED
        const project = await task.project().fetch();
        AuthorizationService.verifyPermission(project, user);
        //nemoj obrisati iz baze već stavi status u NEAKTIVNO
        task.merge({is_active : 0});
        //odradi update (pošto postoji već u bazi može se koristiti i save())
        await task.save();
        //vrati 'obrisani' projekt
        return task;
    }

    async update({ auth, request, params }){
        //dohvati korisnika
        const user = await auth.getUser();
        //dohvati id projekta koji želimo updateati
        const { id } = params;
        //pronađi traženi projekt
        const task = await Task.find(id);
        //ako je projekt nije za korisnika koji šalje zahtjev vrati UNAUTHORIZED
        const project = await task.project().fetch();
        console.log(project);
        console.log(user);
        console.log(task);
        AuthorizationService.verifyPermission(project, user);
        //odradi protrebne promjene
        task.merge(request.only([
            'description',
            'completed',
            'is_active'
        ]));
        //promjeni datum ažuriranja
        await task.save();
        return task;

    }
}

module.exports = TaskController
