var blogFullView = Marionette.ItemView.extend({
  template: _.template('<h1><%- titulo %></h1><p><%- contenido %></p><div class="table-responsive"><table class="table" id="comments"><thead><tr><th>All comments</th><th>Author</th></tr></thead><tbody id="comments" ></tbody></table></div><div id="form-comments-container col-lg-12"><form class="form-horizontal well bs-component col-lg-12" id="form-blog"><fieldset><div class="form-group"><div class="col-lg-12"><input type="text" class="form-control" id="inputComment"></div></div><div class="form-group"><div class="col-lg-12"><input type="text" class="form-control" id="inputComment"></div></div><div class="form-group"><div class="col-lg-6 col-lg-offset-6"><a class="btn btn-primary addComment col-lg-5 col-lg-offset-1" href="javascript:;">Crear</a></div></div></fieldset></form></div>'),
	  events : {
	'click .addComment' : 'createCommentd'
	  },
	var comments = $(e.target).get('comments');
  
  comments.forEach(function (comment) { 
     //Constructor que inyecta cada uno de los comments en la tabla de comments
      $('#comments').append('<tr><td><%- comment %></td><td><%- signe %></td></tr>');
  },
    createCommentd : function (e) {
    var comentCid = $(e.target).data('cid'),
      commentProp = {
        comment : $('#inputComment').val(),
          signe : $('#inputSigne').val() 
      };
    comentCid.get('comments').push(new Comment(commentProp));
  }

});
