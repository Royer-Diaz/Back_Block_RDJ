var BlogsRouter = Backbone.Router.extend({
  routes : {
    'list' : 'showList',
    'vehiculo/:index' : 'showVehiculo',
    '*other' : 'showNotFound'
  },
  showList : function () {
    var miView = new VehiculoComposite({collection : misVehiculos});
    miView.render();
    jQuery('#content').html(miView.el);
  },
  showBlog : function (index) {
    var miBlogFull;
    if (misBlogs.at(index)){
      miBlogFull = new BlogFullView({model : misBlogs.at(index)});
      miBlogFull.render();
      jQuery('#content').html(miBlogFull.el);
    } else {
      jQuery('#content').html('<h1>Ese Blog no existe</h1>');
    }
  },
  showNotFound : function () {
    jQuery('#content').html('<h1>Ruta no encontrada</h1>');
  }
});