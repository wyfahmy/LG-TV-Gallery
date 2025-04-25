document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("slide");
  const { imageList, imageDuration, transitionSpeed, objectFitMode } = SlideshowSettings;
  let i = 0;

  slide.style.objectFit = objectFitMode;

  function showNextImage() {
    slide.style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
    slide.style.opacity = 0;

    setTimeout(() => {
      slide.src = imageList[i];
      slide.onload = () => {
        slide.style.opacity = 1;
      };
      i = (i + 1) % imageList.length;
    }, transitionSpeed);
  }

  slide.src = imageList[i];
  slide.onload = () => { slide.style.opacity = 1; };
  i++;

  setInterval(showNextImage, imageDuration);
});
