//importando MediaPlayer
import MediaPlayer, {food }from  './MediaPlayer.js'
import AutoPlay from '../plugin/AutoPlay.js'

//iniciando el código con constantes
//seleccionamos los objetos
const video = document.querySelector('video');        
const player = new MediaPlayer({el:video, plugin:[new AutoPlay()]});

const button = document.querySelector('button');
//adicionando la variable para usar 'UnmuteMute'
const bunmute = document.querySelector('#unmuteMure');

//usamos la api del dom
button.onclick = () => player.togglePlay();
//usando la api
bunmute.onclick = () => player.unmuteMute();


console.log(food)



