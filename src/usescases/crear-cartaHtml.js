 // <img class="carta" src="assets/cartas/2C.png">
 
 export const crearCartaHtml = (carta)=>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
 }