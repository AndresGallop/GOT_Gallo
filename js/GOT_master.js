(()=> {
  console.log('fired!');

  let lightBox = document.querySelector(".lightbox"),
      lbClose = lightBox.querySelector("span"),
      lbVideo = lightBox.querySelector("video"),
      sigils = document.querySelectorAll(".sigilContainer");


  function showHideLightbox() {
    lightBox.classList.toggle('show-lightbox');

  //Try Making the video play as well

  //check the play state of the video.
  //if it's paused or not playing, that means we just opened the lightBox
  //and we want the video to play
  if (lbVideo.paused) {
    lbVideo.play();
  } else {
    //lightbox is open and we want the video to stop and rewind when we close it
    lbVideo.currentTime = 0;
    lbVideo.pause();

  }


  //rewind the video and make it puse at currentTime of 0


}

  sigils.forEach(sigil => sigil.addEventListener("click", showHideLightbox));
  lbClose.addEventListener("click", showHideLightbox);

  //add
  lbVideo.addEventListener("ended", showHideLightbox);
})();
