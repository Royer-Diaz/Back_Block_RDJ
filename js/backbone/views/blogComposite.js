var BlogComposite = Marionette.CompositeView.extend({
  template : _.template('<h1>Temas de Interes</h1> \
              <table id="vehiculos"> \
                <thead> \
                  <tr> \
                    <th>All Posts</th> \
                  </tr> \
                </thead> \
                <tbody> \
                </tbody> \
              </table> '),
  childViewContainer : 'tbody',
  childView : blogView,
  events : {
    'click .delete' : 'deleteBlog'
  },
  deleteBlog : function (e) {
    var blogCid = $(e.target).data('cid');
    this.collection.remove(blogCid);
  }


});


