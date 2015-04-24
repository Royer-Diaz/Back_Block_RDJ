var Blog = Backbone.Model.extend({

  defaults : {
    titulo: '',
    contenido: '',
    comments : []

  },

  setComments : function (_comments){
    var comments = _comments;
   comments.forEach(function(){
  	this.get('comments').push(new Comment());
   }); 
  }

  initialize : function(){
    console.info('Se ha creado un nuevo Blog')
  }

});