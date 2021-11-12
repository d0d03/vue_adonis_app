'use strict'

const Project = use('App/Models/Project');

class ProjectController {

   async index( {auth} ){
       //dohvatimo korisnika
        const user = await auth.getUser();
        //ispišemo id
        console.log(user.id);
        //dohvatimo i vratimo sve njegove projekte
        return await user.projects().fetch();
    }

    async create({ auth, request }){
        //dohvatimo korisnika
        const user = await auth.getUser();
        //dohvatimo naslov iz requesta
        const { title } = request.all();
        //kreiramo projekt
        const project = new Project();
        //ispunimo naslov projekta sa dohvaćenim naslovom iz requesta
        project.fill({
            title,
        });

        //povežemo projekt za korisnika
        await user.projects().save(project);
        //vratimo projekt
        return project;

    }
}

module.exports = ProjectController
