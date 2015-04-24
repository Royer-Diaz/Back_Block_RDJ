var blogFullView = Marionette.ItemView.extend({
  template: _.template('<h1><%- marca %> <%- titulo %></h1> \
  	          <p><%- contenido %></p> \
  	          <table id="comments"> \
                <thead> \
                  <tr> \
                    <th>All comments</th> \
                    <th>Author</th> \
                  </tr> \
                </thead> \
                <tbody id="comments" > \
                </tbody> \
              </table> \
  	'),
	  events : {
	'click .addComment' : 'createCommentd'
	  },
	var comments = $(e.target).get('comments' ,[]);  
  
  comments.forEach(function (comment) { 
     //Constructor que inyecta cada uno de los comments en la tabla de comments
      $('#comments').append('<tr><td><%- comment %></td><td><%- signe %></td></tr>');
  }
    createCommentd : function (e) {
    var comentCid = $(e.target).data('cid'),
      commentProp = {
        comment : $('#inputComment').val(),
          signe : $('#inputSigne').val() 
      };
    comentCid.get('comments').push(new Comment(commentProp));
  }

})


 