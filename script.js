"use strict";

const shareButton = document.querySelector(".share-button");
const shareEl = document.querySelector(".share");
const overlayEL = document.querySelector(".overlay");

shareButton.addEventListener("click", () => {
  shareEl.classList.toggle("hidden");
});

overlayEL.addEventListener("click", () => {
  if (!shareEl.classList.contains("hidden")) {
    shareEl.classList.add("hidden");
  }
});
