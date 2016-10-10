(function(){
  'use strict';

  // Controlador de la vista de comics
  class ComicsComponent {
    constructor($window, Comic) {
      this.Comic = Comic;
      this.$window = $window;

      $('.modal-trigger').leanModal();
      this.comments = [{
          user: 'Antonio Machado',
          content: 'Me encanta el capitulo donde derrota al malvado villano :3',
          id: '001'
        },{
          user: 'Verónica Agudelo',
          content: '  Mi heroe favorito <3',
          id: '003'
        },{
          user: 'James Rodriguez',
          content: 'El mejor de todos los tiempos ^_^',
          id: '005'
        },{
          user: 'David Castro',
          content: 'Me trae tantos recuerdos de mi niñez :\')',
          id: '002'
        }
      ];
    }

    // llama las funciones listadas al cargar la vista
    $onInit(){
      this.list();
    }


    // Llama el servicio de listar comics para traerlos a la vista
    list(){
      this.Comic.list()
      .then((comics) => {
        if (!this.$window.localStorage.comics) {
          this.comics = comics;
          this.$window.localStorage.comics = String(JSON.stringify(comics));
        }else {
          this.comics = JSON.parse(this.$window.localStorage.comics);
        }
      });
    }


    // Selecciona un comic para mostrar en el modal
    selectComic(comic){
      this.selectedComic = angular.copy(comic);
    }


    // Función para filtrar los comics por el titulo usando expresiones regulares
    filter(query){
      if (query) {
        query = query.toLowerCase();
      }
      let regExp = new RegExp(query);
        return ( item ) => {
          return regExp.test(item.name.toLowerCase());
      };
    }

    // Crea un nuevo comic guardandolo en el local storage
    createComic(newComic){
      newComic.id = 'default';
      this.Comic.create(newComic)
      .then(comic=>{
        this.addComicLocalStore(newComic);
        Materialize.toast('Se ha creado el comic correctamente', 5000);
        $('#newComicModal').closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
    }

    addComicLocalStore(newComic){
      this.comics.push({
          id: newComic.id,
          name: newComic.name,
          company: newComic.company,
          author: newComic.author,
          description: newComic.description
        });
      this.$window.localStorage.comics = String(JSON.stringify(this.comics));
    }

    openEditModal(){
      $('#detailComicModal').closeModal();
      $('#editComicModal').openModal();
    }

    editComic(selectedComic){
      this.comics.forEach(comic=>{
        if (comic.id === selectedComic.id) {
          comic.name = selectedComic.name;
          comic.company = selectedComic.company;
          comic.author = selectedComic.author;
          comic.description = selectedComic.description;
        }
      });
      this.$window.localStorage.comics = String(JSON.stringify(this.comics));
      $('#editComicModal').closeModal();
      $('#detailComicModal').openModal();

    }

  }

  angular.module('comicsApp')
  .component('comics', {
    templateUrl: 'app/comics/comics.html',
    controller: ComicsComponent,
    controllerAs: 'vm'
  });

})();
