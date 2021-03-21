function MediaPlayer(config){
    this.media = config.el
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();

}

MediaPlayer.prototype.togglePlay = function (){
  if(this.media.paused){
    this.play();
  }else{
    this.pause();
  }
}

//iniciando el código con constantes
//seleccionamos los objetos
const video = document.querySelector('video');        
const player = new MediaPlayer({el:video});

const button = document.querySelector('button');

//usamos la api del dom
button.onclick = () => player.togglePlay();
