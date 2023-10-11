//parallax
function firstParallax() {
    document.body.style = `--first-banner_scroll: ${window.scrollY}px`;
    requestAnimationFrame(firstParallax);
}
  
requestAnimationFrame(firstParallax);