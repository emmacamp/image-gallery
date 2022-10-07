const grid = new Muuri('.grid', {
    rounding: false
});


// loaded-images

window.addEventListener('load', () =>  {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('loaded-images')

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach(enlaces => {
        enlaces.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links            
            const remuveClass = document.querySelector('.active');
            remuveClass.classList.remove('active'); 

            //enlaces.forEach((enlaces) => enlaces.classList.remove('active')); 

            // Add active class to current link
            e.target.classList.add('active');

            // Get category  
            const category = e.target.innerHTML.toLowerCase();
            //? If category is 'all', show all items               //? If category is not 'all', Filter items by category
            category === 'all' ? grid.filter('[data-category]') : grid.filter(`[data-category="${category}"]`);
        
            /* if(category !== category){
                document.getElementById('grid').style.width = '500px';
                document.getElementById('grid').style.height = '500px';
                document.getElementById('grid').style.color = 'red';
                document.getElementById('grid').innerHTML = 'No Encontrado';
            }else{
                console.log('Bien');
            } */
        });
    });

    // Listener for search input
    document.querySelector('#search-input').addEventListener('input', (e) => {
        const search = e.target.value;
        console.log(e.target.value)
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(search));

    
    });
});



/* GO TOP */
window.onscroll = () => {
    if (window.scrollY > 100) {
        console.log(window.scrollY);
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
};

