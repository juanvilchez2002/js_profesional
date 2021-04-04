//importando MediaPlayer
import MediaPlayer, {food }from  './MediaPlayer.js';
import AutoPlay from './plugin/AutoPlay.js';
import AutoPause from "./plugin/AutoPause.js";

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

console.log(food)



