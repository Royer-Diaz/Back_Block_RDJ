var BlogView = Marionette.ItemView.extend({
  tagName : 'tr',
  template : _.template('<th><%- titulo %></th><th><span class="delete" data-cid="<%- cid %>" >&otimes;</span></th>'),
  serializeData : function() {
    return {
      titulo : this.model.get('titulo'),
      content : this.model.get('content'),
      cid : this.model.cid
    }
  }
  
});