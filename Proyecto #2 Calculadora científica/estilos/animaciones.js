// Actualiza coordenadas XY para el centro del degradado radial
document.querySelectorAll('button').forEach(item => {
  let h = item.getBoundingClientRect().height;
  let w = item.getBoundingClientRect().width;
  if (item.firstChild.style !== undefined){
    item.firstChild.style.setProperty("--sizeY",h + 'px')
    item.firstChild.style.setProperty("--sizeX",w + 'px')
  }
    item.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top + 1;
      item.style.setProperty('--x', x + 'px');
      item.style.setProperty('--y', y + 'px');
    })
  })

// Toggle del panel de conversion
var isActive = false;
var panel = document.getElementById("conversion");
function toggle() {
  if(isActive){
    isActive = false;
    panel.classList.remove("shown")
    panel.classList.add("hidden");


  }else{
    isActive = true;
    panel.classList.remove("hidden");
    panel.classList.add("shown");

  }
}