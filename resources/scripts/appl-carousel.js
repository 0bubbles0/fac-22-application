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

//Helper-Functions
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

//Event Listeners
ideasBackButton.addEventListener("click", backIdeasFn);
ideasNextButton.addEventListener("click", nextIdeasFn);

fccBackButton.addEventListener("click", backFccFn);
fccNextButton.addEventListener("click", nextFccFn);


//------------------------------------------
//FAC Carousel
const facImages = Array.from(document.getElementsByClassName("fac-tile"));
const facBackButton = document.querySelector("#button-back-fac");
const facNextButton = document.querySelector("#button-next-fac");
let facVisibleIndex = 0;

//helper function: new visibility
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

//fac-carousel with general helper-function
function newVisibility(arr, visindex) {
  arr.forEach((element, index) => {
    if (index === visindex) {
      element.classList.remove("tile-hidden");
      element.classList.add("tile-visible");
    } else {
      element.classList.remove("tile-visible");
      element.classList.add("tile-hidden");
    }
  })
}
function backFacFnGeneral() {
  console.log(facVisibleIndex);
  if (facVisibleIndex === 0) {
    facVisibleIndex = facImages.length - 1;
  } else {
    facVisibleIndex--;
  }
  console.log(facVisibleIndex);
  newVisibility(facImages, facVisibleIndex);
}

function nextFacFnGeneral() {
  console.log(facVisibleIndex);
  if (facVisibleIndex === facImages.length - 1) {
    facVisibleIndex = 0;
  } else {
    facVisibleIndex++;
  }
  console.log(facVisibleIndex);
  newVisibility(facImages, facVisibleIndex);
}

//general carousel
function backFn(arr, visindex) {
  console.log(visindex);
  if (visindex === 0) {
    visindex = arr.length - 1;
  } else {
    visindex--;
  }
  console.log(visindex);
  newVisibility(arr, visindex);
  return visindex;
}

function nextFn(arr, visindex) {
  console.log(visindex);
  if (visindex === arr.length - 1) {
    visindex = 0;
  } else {
    visindex++;
  }
  console.log(visindex);
  newVisibility(arr, visindex);
  return visindex;
}

/*
//very specific
facBackButton.addEventListener("click", backFacFn);
facNextButton.addEventListener("click", nextFacFn);
*/

//very general with parameters & outside event
facBackButton.addEventListener("click", () => { backFn(facImages, facVisibleIndex) });
facNextButton.addEventListener("click", () => { nextFn(facImages, facVisibleIndex) });

/*

//very general
facBackButton.addEventListener("click", backFn);
facNextButton.addEventListener("click", nextFn);


//very general with parameters
facBackButton.addEventListener("click", backFn(facImages, facVisibleIndex));
facNextButton.addEventListener("click", nextFn(facImages, facVisibleIndex));


//with general helper function
facBackButton.addEventListener("click", backFacFnGeneral);
facNextButton.addEventListener("click", nextFacFnGeneral);

//very general with parameters & outside event
facBackButton.addEventListener("click", event => { backFn(facImages, facVisibleIndex) });
facNextButton.addEventListener("click", event => { nextFn(facImages, facVisibleIndex) });

*/


/*
//General
function newVisibility(arr, visindex) {
  arr.forEach((element, index) => {
    if (index === visindex) {
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

facBackButton.addEventListener("click", backFn(facImages, facVisibleIndex));
facNextButton.addEventListener("click", nextFn(facImages, facVisibleIndex));
*/