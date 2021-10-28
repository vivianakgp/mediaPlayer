function AutoPlay() {}
// eslint-disable-next-line func-names
AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    // eslint-disable-next-line no-param-reassign
    player.muted = true;
  }
  player.play();
};
export default AutoPlay;
