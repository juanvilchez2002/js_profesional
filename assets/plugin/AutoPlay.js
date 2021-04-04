function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    // player.mute();
    // player.play();

    if(!player.muted){
        player.muted = true
    }else{     
        player.muted = false
    }

    player.play()
};
export default AutoPlay;