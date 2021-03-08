const grid = new Muuri('.grid', {
  layout: {
    rounding: false
  }
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('charged-images')

   const links = document.querySelectorAll('#categories a');
   links.forEach( element => {
    element.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');

      const category = e.target.innerHTML.toLowerCase();
      category === 'all' ? grid.filter('[data-category]') :
      grid.filter(`[data-category = ${category}]`);
    })
   })
});

