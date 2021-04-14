class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),

            media: this.media,

            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();

    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    //función para manejar 'UnmuteMute'
    unmuteMute() {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    }
};








export default MediaPlayer;
export const food = "comida";