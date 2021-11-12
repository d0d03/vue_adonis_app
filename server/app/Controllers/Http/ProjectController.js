'use strict'

const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');

class ProjectController {

   async index( {auth} ){
       //dohvatimo korisnika
        const user = await auth.getUser();
        //ispišemo id
        //console.log(user.id);
        //dohvatimo i vratimo sve njegove projekte koji su aktivni
        const projects = await Project.query().where('is_active',1).fetch()
        return projects;
    }

    async create({ auth, request }){
        //dohvatimo korisnika
        const user = await auth.getUser();
        //dohvatimo naslov iz requesta
        const { title } = request.all();
        //kreiramo projekt
        const project = new Project();
        //ispunimo naslov projekta sa dohvaćenim naslovom iz requesta
        //postavljamo status u 1
        project.fill({
            title,
            is_active: 1,
        });

        //povežemo projekt za korisnika
        await user.projects().save(project);
        //vratimo projekt
        return project;
    }

    async destroy({ auth, request, params }){
        //dohvati korisnika
        const user = await auth.getUser();
        //dohvati id projekta koji želimo obrisati
        const { id } = params;
        //pronađi traženi projekt
        const project = await Project.find(id);
        //ako je projekt nije za korisnika koji šalje zahtjev vrati UNAUTHORIZED
        AuthorizationService.verifyPermission(project, user);
        //promjeni datum ažuriranja
        project.updated_at = new Date();
        //nemoj obrisati iz baze već stavi status u NEAKTIVNO
        project.is_active = 0;
        //odradi update (pošto postoji već u bazi može se koristiti i save())
        await project.save();
        //vrati 'obrisani' projekt
        return project;
    }
}

module.exports = ProjectController
