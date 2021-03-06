import "bootstrap";

import Glide from "@glidejs/glide";

var glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1,
  focusAt: 0,
  // autoplay: 3000,
  hoverpause: true,
  animationTimingFunc: "ease-in-out",
  animationDuration: 800,
});

glide.mount();
