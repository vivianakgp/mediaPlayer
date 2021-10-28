// define an interception observer
// observer check if an specific elem is visibility respect the viewport
// give an config obj where define an number threshold a minimum  25% of visibility
class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handler = this.handler.bind(this);
  }

  run(player) {
    this.player = player;
    const obs = new IntersectionObserver(this.handler, {
      threshold: this.threshold,
    });
    obs.observe(player.media);
  }

  handler(entries) {
    const entrie = entries[0];
    console.log(entrie);
    const isVisible = entrie.intersectionRatio > this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
  //   constructor() {
  //     this.threshold = 0.50;
  //     this.annunciator = this.annunciator.bind(this);
  //   }

  //   run(player) {
  //     this.player = player;
  //     // here interception observer
  //     const observer = new IntersectionObserver(this.annunciator, {
  //       threshold: this.threshold,
  //     });
  //     observer.observe(this.player.media);
  //   }

//   annunciator(entries) {
//     const entry = entries[0];
//     console.log(entry);
//     // avisar si el elem se esta llendo o esta llegando
//     // y pausar o despausar
//     const isVisible = entry.intersectionRatio >= this.threshold;
//     if (isVisible) {
//       this.player.play();
//     } else {
//       this.player.pause();
//     }
//   }
}
export default AutoPause;
