import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() {
    }
    run(player: MediaPlayer) {
        // player.mute();
        // player.play();
        if (!player.media.muted) {
            player.media.muted = true;
        } else {
            player.media.muted = false;
        }

        player.play();
    }
}

export default AutoPlay;