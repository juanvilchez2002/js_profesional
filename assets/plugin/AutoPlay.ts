import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() {
    }
    run(player: MediaPlayer) {
        // player.mute();
        // player.play();
        if (!player.muted) {
            player.muted = true;
        } else {
            player.muted = false;
        }

        player.play();
    }
}

export default AutoPlay;