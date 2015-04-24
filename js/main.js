var misBlogs = new BlogsCollection();

var miBlog = new Blog ({

  titulo : 'Pegando porte y la vara',
  contenido: 'El sueño de Moya es dar a sus padres una vivienda digna y aunque en un principio sufrió por la divulgación del vídeo, ahora aprovecha su situación con miras a lograr su objetivo. Por ello, desde hace algunas semanas vende camisetas con la famosa frase, porque espera recolectar el dinero que necesita para ponerle cielorraso y piso a la casa que tienen en Tres Ríos.'
});

//miBlog.setComments({comment : 'Jaja idioteces dicen los pipis.. yo lo llamo "inteligencia" si alguno de quienes critican hicieran un video del cual se burla medio mundo, estarían encerrados en su cuarto del bañazo. . El mae en cambio sacó provecho de la situación y esta sacando dinero para una buena causa de los que muchos llamaron burla.. Así que piensenlo quien es el idiota ahora jaja sigan pegando porte y la vara mejor..', signe : 'Joŋathaŋ Garro Castillo '}, {comment : ' Sepa saber que ese tal '' imbecil'' es humilde y esta dando plata para darles una casa a los padres lea la nota', signe : 'Jose Ortiz '}, {comment : 'Esta genial el asunto no veo porque no apoyar al hombre !!! Yo le compro una camisa para colaborar me estraña!!!! Los mordidos quedan sobrando', signe : 'Ronny Rey'};); 

var miBlog2 = new Blog ({

  titulo : 'Pegando porte y la vara',
  contenido: 'El sueño de Moya es dar a sus padres una vivienda digna y aunque en un principio sufrió por la divulgación del vídeo, ahora aprovecha su situación con miras a lograr su objetivo. Por ello, desde hace algunas semanas vende camisetas con la famosa frase, porque espera recolectar el dinero que necesita para ponerle cielorraso y piso a la casa que tienen en Tres Ríos.',
  
});

//miBlog2.setComments({comment : 'Jaja idioteces dicen los pipis.. yo lo llamo "inteligencia" si alguno de quienes critican hicieran un video del cual se burla medio mundo, estarían encerrados en su cuarto del bañazo. . El mae en cambio sacó provecho de la situación y esta sacando dinero para una buena causa de los que muchos llamaron burla.. Así que piensenlo quien es el idiota ahora jaja sigan pegando porte y la vara mejor..', signe : 'Joŋathaŋ Garro Castillo '}, {comment : ' Sepa saber que ese tal '' imbecil'' es humilde y esta dando plata para darles una casa a los padres lea la nota', signe : 'Jose Ortiz '}, {comment : 'Esta genial el asunto no veo porque no apoyar al hombre !!! Yo le compro una camisa para colaborar me estraña!!!! Los mordidos quedan sobrando', signe : 'Ronny Rey'};); 

var miBlog3 = new Blog ({

  titulo : 'Pegando porte y la vara',
  contenido: 'El sueño de Moya es dar a sus padres una vivienda digna y aunque en un principio sufrió por la divulgación del vídeo, ahora aprovecha su situación con miras a lograr su objetivo. Por ello, desde hace algunas semanas vende camisetas con la famosa frase, porque espera recolectar el dinero que necesita para ponerle cielorraso y piso a la casa que tienen en Tres Ríos.',
  
});

//miBlog3.setComments({comment : 'Jaja idioteces dicen los pipis.. yo lo llamo "inteligencia" si alguno de quienes critican hicieran un video del cual se burla medio mundo, estarían encerrados en su cuarto del bañazo. . El mae en cambio sacó provecho de la situación y esta sacando dinero para una buena causa de los que muchos llamaron burla.. Así que piensenlo quien es el idiota ahora jaja sigan pegando porte y la vara mejor..', signe : 'Joŋathaŋ Garro Castillo '}, {comment : ' Sepa saber que ese tal '' imbecil'' es humilde y esta dando plata para darles una casa a los padres lea la nota', signe : 'Jose Ortiz '}, {comment : 'Esta genial el asunto no veo porque no apoyar al hombre !!! Yo le compro una camisa para colaborar me estraña!!!! Los mordidos quedan sobrando', signe : 'Ronny Rey'};); 

misBlogs.add([miBlog, miBlog2, miBlog3]);

var miView = new BlogComposite({collection : misBlogs});

miView.render();

jQuery('body').append(miView.el);


$('#submit-blog').on('click', function(){
    var nuevoBlog,
      propiedadesBlog = {
        titulo : $('#input-marca').val(),
     contenido : $('#input-modelo').val()
      };
  
   nuevoBlog = new Blog(propiedadesBlog);
 

    miView.collection.add(nuevoBlog);
});

var myRouter = new BlogsRouter();
Backbone.history.start();