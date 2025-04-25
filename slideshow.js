document.addEventListener("DOMContentLoaded", () => {
  const slideA = document.createElement("img");
  const slideB = document.createElement("img");
  const { imageList, imageDuration, transitionSpeed, objectFitMode } = SlideshowSettings;
  let i = 0, active = slideA, inactive = slideB;

  slideA.style.position = slideB.style.position = "absolute";
  slideA.style.width = slideB.style.width = "100%";
  slideA.style.height = slideB.style.height = "100%";
  slideA.style.top = slideB.style.top = "0";
  slideA.style.left = slideB.style.left = "0";
  slideA.style.transition = slideB.style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
  slideA.style.objectFit = slideB.style.objectFit = objectFitMode;
  slideA.style.opacity = 1;
  slideB.style.opacity = 0;

  document.body.appendChild(slideA);
  document.body.appendChild(slideB);

  active.src = imageList[i];
  i = (i + 1) % imageList.length;

  setInterval(() => {
    inactive.src = imageList[i];
    i = (i + 1) % imageList.length;
    inactive.onload = () => {
      active.style.opacity = 0;
      inactive.style.opacity = 1;
      [active, inactive] = [inactive, active];
    };
  }, imageDuration);
});
