var BlogView = Marionette.ItemView.extend({
  tagName : 'tr',
  template : _.template('<td><%- titulo %></td><td><span class="delete" data-cid="<%- cid %>" >&otimes;</span></td>'),
  serializeData : function() {
    return {
      titulo : this.model.get('titulo'),
      contenido : this.model.get('contenido'),
      comments : this.model.get('comments'),
      cid : this.model.cid
    }
  } 
});