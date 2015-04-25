var Blog = Backbone.Model.extend({

  defaults : {
    titulo: '',
    contenido: '',
    comments : []

  },

  setComments : function (_comments){
  	this.get('comments').push(comments);
  },

  initialize : function(){
    console.info('Se ha creado un nuevo Blog');
  }

});