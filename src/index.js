// eslint-disable-next-line import/extensions
import MediaPlayer from './MediaPlayer.js';
// eslint-disable-next-line import/extensions
import AutoPlay from './plugins/AutoPlay.js';
// import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
// import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';
/**
 * this code isn't extensible
 */
// const video = document.querySelector('video');
// const button = document.getElementById('playButton');
// button.addEventListener('click', () => video.play());
const video = document.querySelector('video');
const player = new MediaPlayer({ vi: video, plugins: [new AutoPlay()] });
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');

playButton.addEventListener('click', () => player.togglePlay());
muteButton.addEventListener('click', () => player.toggleMute());
