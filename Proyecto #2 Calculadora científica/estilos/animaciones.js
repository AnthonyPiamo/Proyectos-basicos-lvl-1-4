// Actualiza coordenadas XY para el centro del degradado radial
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
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