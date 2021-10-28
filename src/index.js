// eslint-disable-next-line import/extensions
import MediaPlayer from './MediaPlayer.js';
// eslint-disable-next-line import/extensions
import AutoPlay from './plugins/AutoPlay.js';
// eslint-disable-next-line import/extensions
import AutoPause from './plugins/AutoPause.js';
// import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';
/**
 * this code isn't extensible
 */
// const video = document.querySelector('video');
// const button = document.getElementById('playButton');
// button.addEventListener('click', () => video.play());
const video = document.querySelector('video');
const player = new MediaPlayer({
  vi: video,
  plugins: [new AutoPlay(), new AutoPause()],
});
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');

playButton.addEventListener('click', () => player.togglePlay());
muteButton.addEventListener('click', () => player.toggleMute());
