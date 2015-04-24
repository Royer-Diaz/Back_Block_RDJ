var Blog = Backbone.Model.extend({

  defaults : {
    titulo: '',
    contenido: '',
    comments : []

  },

  initialize : function(){
    console.info('Se ha creado un nuevo Blog')
  }

});