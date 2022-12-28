"use strict";

const shareButton = document.querySelector(".share-button");
const shareEl = document.querySelector(".share");
const overlayEL = document.querySelector(".overlay");

const hide = function () {
  shareEl.classList.add("hidden");
};

const display = function () {
  shareEl.classList.remove("hidden");
};

let active = false;
shareButton.addEventListener("click", function () {
  if (active == false) {
    display();
    active = true;
  } else {
    hide();
    active = false;
  }
});

overlayEL.addEventListener("click", function () {
  if (active != false) {
    shareEl.classList.add("hidden");
    active = false;
  }
});
