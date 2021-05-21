/*
let myHeading = document.querySelector("h1");

myHeading.textContent = "Barbara's page";
*/

//CAROUSELS
//Variables
//Ideas Carousel
const ideasImages = Array.from(document.getElementsByClassName("idea-tile"));
const ideasBackButton = document.querySelector("#button-back-ideas");
const ideasNextButton = document.querySelector("#button-next-ideas");
let ideasVisibleIndex = 0;

//FCC Carousel
const fccImages = Array.from(document.getElementsByClassName("fcc-tile"));
const fccBackButton = document.querySelector("#button-back-fcc");
const fccNextButton = document.querySelector("#button-next-fcc");
let fccVisibleIndex = 0;

//FAC Carousel
const facImages = Array.from(document.getElementsByClassName("fac-tile"));
const facBackButton = document.querySelector("#button-back-fac");
const facNextButton = document.querySelector("#button-next-fac");
let facVisibleIndex = 0;

//Functions
//new visibility
//ideas
function ideasNewVisibility() {
  ideasImages.forEach((element, index) => {
    if (index === ideasVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

//fcc
function fccNewVisibility() {
  fccImages.forEach((element, index) => {
    if (index === fccVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

//fac
function facNewVisibility() {
  facImages.forEach((element, index) => {
    if (index === facVisibleIndex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

//each direction
//ideas
function backIdeasFn() {
  if (ideasVisibleIndex === 0) {
    ideasVisibleIndex = ideasImages.length - 1;
  } else {
    ideasVisibleIndex--;
  }
  ideasNewVisibility();
}

function nextIdeasFn() {
  if (ideasVisibleIndex === ideasImages.length - 1) {
    ideasVisibleIndex = 0;
  } else {
    ideasVisibleIndex++;
  }
  ideasNewVisibility();
}

//fcc
function backFccFn() {
  if (fccVisibleIndex === 0) {
    fccVisibleIndex = fccImages.length - 1;
  } else {
    fccVisibleIndex--;
  }
  fccNewVisibility();
}

function nextFccFn() {
  if (fccVisibleIndex === fccImages.length - 1) {
    fccVisibleIndex = 0;
  } else {
    fccVisibleIndex++;
  }
  fccNewVisibility();
}

//fac
function backFacFn() {
  if (facVisibleIndex === 0) {
    facVisibleIndex = facImages.length - 1;
  } else {
    facVisibleIndex--;
  }
  facNewVisibility();
}

function nextFacFn() {
  if (facVisibleIndex === facImages.length - 1) {
    facVisibleIndex = 0;
  } else {
    facVisibleIndex++;
  }
  facNewVisibility();
}

//Event Listeners
ideasBackButton.addEventListener("click", backIdeasFn);
ideasNextButton.addEventListener("click", nextIdeasFn);

fccBackButton.addEventListener("click", backFccFn);
fccNextButton.addEventListener("click", nextFccFn);

facBackButton.addEventListener("click", backFacFn);
facNextButton.addEventListener("click", nextFacFn);



/*
//General
function newVisibility(arr, x) {
  arr.forEach((element, index) => {
    if (index === x) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}

function backFn(arr, x) {
  if (x === 0) {
    x = arr.length - 1;
  } else {
    x--;
  }
  newVisibility(arr, x);
}

function nextFn(arr, x) {
  if (x === arr.length - 1) {
    x = 0;
  } else {
    x++;
  }
  newVisibility(arr, x);
}

fccBackButton.addEventListener("click", backFn(fccImages, fccVisibleIndex));
fccNextButton.addEventListener("click", nextFn(fccImages, fccVisibleIndex));
*/

//BEETHOVEN
