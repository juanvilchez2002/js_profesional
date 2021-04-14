//importando MediaPlayer
import MediaPlayer, {food }from  './MediaPlayer.js';
import AutoPlay from './plugin/AutoPlay.js';
import AutoPause from "./plugin/AutoPause.ts";

//iniciando el código con constantes
//seleccionamos los objetos
const video = document.querySelector('video');        
const player = new MediaPlayer({
    el:video, 
    plugins:[new AutoPlay(), new AutoPause()]
});

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

//adicionando la variable para usar 'UnmuteMute'
const muteButton = document.querySelector('#muteButton');

muteButton.onclick = () => {
    if(player.media.muted){
        player.unmute();
    }else{
        player.mute();
    }
};


//serve para verificar si el navegador da apoyo al serviceworker
//un serviceWorker es una capa que vive entre el navegador y el internet
//sirven para hacer que nuestras aplicaciones funciones Offline


//añadimos el 'if' para detectar si el navegador del usuario le da apoyo
//a los 'Service Workers'

if('serviceWorker' in navigator){
    //registramos el archivo sw.js que sera el service worker
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}

console.log(food)



