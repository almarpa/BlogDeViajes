(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
      
      // Get elementById
      /*
      var logo = document.getElementById('logo');
      var navegacion = document.getElementById('navegacion');
      navegacion.style.display="none";
      */

      // GetElementByClassName
      /*
      var navegacion = document.getElementsByClassName('navegacion');
      console.log(navegacion[0]);

      var contenido = document.getElementsByClassName('contenido');
      console.log(contenido[0]);

      contenido[0].style.display = 'none';
      */

      // GetElementByClassName
      /*
      var enlaces = document.getElementsByTagName('a');
      console.log(enlaces.length);

      for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute('target','_blank');
      }
      var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
      console.log(enlacesSidebar);

      for(var i = 0; i < enlacesSidebar.length; i++) {
        enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
      }
      */

      /*
      var logo = document.querySelector('.logo');
      console.log(logo);
        
      var logo = document.querySelectorAll('h2');
      console.log(logo);

      var enlaces = document.querySelectorAll('a'); 
      console.log(enlaces[0].innerText);
      */

      // Crear contenido
      /*
      var sidebar = document.querySelector('#sidebar');
      var nuevoElemento = document.createElement("H1");
      var nuevoTexto = document.createTextNode("Hola Mundo");
      nuevoElemento.appendChild(nuevoTexto);
      sidebar.appendChild(nuevoElemento);  
      */    

      // Añadir contenido
      var sidebar = document.querySelector('aside');

      var masVisitados = document.createElement('H2');
      var textoVisitados = document.createTextNode('Posts más visitados');
      masVisitados.appendChild(textoVisitados);
      sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

      var contenido = document.querySelectorAll('main h2');

      for (var i = 0; i < contenido.length; i++) {
        var nuevoElemento = document.createElement('LI');
        var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
      }

      // Eliminar contenido
      /*
      var primerPost = document.querySelector('main article');
      console.log(primerPost);

      primerPost.parentNode.removeChild(primerPost);

      var enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
      console.log(enlaces);
      enlaces.parentNode.removeChild(enlaces);
      */

      // Reemplazar contenido
      /* 
      var viejoNodo = document.querySelector('main h2');
      var nuevoNodo = document.querySelector('footer h2');
      viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
      */
    });
})();
