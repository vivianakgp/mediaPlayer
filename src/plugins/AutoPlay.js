function AutoPlay(){};
// eslint-disable-next-line func-names
AutoPlay.prototype.run = function (player) {
  player.mute();
  player.play();
};
export default AutoPlay;