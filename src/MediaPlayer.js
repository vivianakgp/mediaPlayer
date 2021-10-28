/**
 * add instead a class/ constructor
 * receive one config obj as a parameter
 */
function MediaPlayer(config) {
  this.media = config.vi;
  this.plugins = config.plugins;
  this.initPlugins();
}
MediaPlayer.prototype.initPlugins = function () {
  // para tener contro sobre la cantidad de datos
  // que le voy a pasar a los plugins y que no tengan acceso a todo el player
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    // creamos propiedad virtual get and set
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};
MediaPlayer.prototype.toggleMute = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};
export default MediaPlayer;
