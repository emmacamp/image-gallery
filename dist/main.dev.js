"use strict";

var grid = new Muuri('.grid', {
  rounding: false
}); // loaded-images

window.addEventListener('load', function () {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('loaded-images');
  var enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach(function (enlaces) {
    enlaces.addEventListener('click', function (e) {
      e.preventDefault(); // Remove active class from all links            

      var remuveClass = document.querySelector('.active');
      remuveClass.classList.remove('active'); //enlaces.forEach((enlaces) => enlaces.classList.remove('active')); 
      // Add active class to current link

      e.target.classList.add('active'); // Get category  

      var category = e.target.innerHTML.toLowerCase(); //? If category is 'all', show all items               //? If category is not 'all', Filter items by category

      category === 'all' ? grid.filter('[data-category]') : grid.filter("[data-category=\"".concat(category, "\"]"));

      if (category !== category) {
        document.getElementById('grid').style.width = '500px';
        document.getElementById('grid').style.height = '500px';
        document.getElementById('grid').style.color = 'red';
        document.getElementById('grid').innerHTML = 'No Encontrado';
      } else {
        console.log('Bien');
      }
    });
  }); // Listener for search input

  document.querySelector('#search-input').addEventListener('input', function (e) {
    var search = e.target.value;
    console.log(e.target.value);
    grid.filter(function (item) {
      return item.getElement().dataset.etiquetas.includes(search);
    });
  });
});
/* GO TOP */

window.onscroll = function () {
  if (window.scrollY > 100) {
    console.log(window.scrollY);
    document.querySelector('.go-top-container').classList.add('show');
  } else {
    document.querySelector('.go-top-container').classList.remove('show');
  }
};