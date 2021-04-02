function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function(){
    // this.plugins.forEach(plugin => {
    //     plugin.run(this);
    // });

    const player = {
        play: () => this.play(),
        pause: () => this.pause(),

        media: this.media,

        get muted(){
            return this.media.muted
        },

        set muted(value){
            this.media.muted = value
        }
    }
}

MediaPlayer.prototype.play = function(){
    this.media.play();
};

MediaPlayer.prototype.pause = function(){
    this.media.pause();

};

MediaPlayer.prototype.togglePlay = function (){
  if(this.media.paused){
    this.play();
  }else{
    this.pause();
  }
};

MediaPlayer.prototype.mute = function(){
    this.media.paused = True;
};

MediaPlayer.prototype.unmute = function(){
    this.media.paused = False;
}

//función para manejar 'UnmuteMute'
MediaPlayer.prototype.unmuteMute = function(){
    this.media.muted? this.media.muted=false : this.media.muted=true;
}

export default MediaPlayer;
export const food = "comida";