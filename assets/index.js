//importando MediaPlayer
import MediaPlayer, {food }from  './MediaPlayer.js'

//iniciando el código con constantes
//seleccionamos los objetos
const video = document.querySelector('video');        
const player = new MediaPlayer({el:video});

const button = document.querySelector('button');

//usamos la api del dom
button.onclick = () => player.togglePlay();

console.log(food)



