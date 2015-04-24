var blogFullView = Marionette.ItemView.extend({
  template: _.template('<h1><%- marca %> <%- titulo %></h1> \
  	<p><%- contenido %></p> \
  	
  	')
})