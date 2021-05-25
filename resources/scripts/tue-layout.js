/*
let myHeading = document.querySelector("h1");

myHeading.textContent = "Barbara's page";
*/

//CAROUSELS

//Functions
//new visibility
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

//each direction
function backFn(arr, visindex) {
  if (visindex === 0) {
    visindex = arr.length - 1;
  } else {
    visindex--;
  }
  newVisibility(arr, visindex);
  return visindex;
}

function nextFn(arr, visindex) {
  if (visindex === arr.length - 1) {
    visindex = 0;
  } else {
    visindex++;
  }
  newVisibility(arr, visindex);
  return visindex;
}


//Variables
//Ideas Carousel
const ideasImages = Array.from(document.getElementsByClassName("idea-tile"));
const ideasBackButton = document.querySelector("#button-back-ideas");
const ideasNextButton = document.querySelector("#button-next-ideas");
let ideasVisibleIndex = 0;

//FCC Carousel
const fccImages = Array.from(document.getElementsByClassName("fcc-tile"));
//const fccBackButton = document.querySelector("#button-back-fcc");
const fccBackButton = document.getElementById("button-back-fcc");
const fccNextButton = document.getElementById("button-next-fcc");
//const fccNextButton = document.querySelector("#button-next-fcc");
let fccVisibleIndex = 0;

//FAC Carousel
const facImages = Array.from(document.getElementsByClassName("fac-tile"));
const facBackButton = document.querySelector("#button-back-fac");
const facNextButton = document.querySelector("#button-next-fac");
let facVisibleIndex = 0;


//Event Listeners
ideasBackButton.addEventListener("click", () => {
  ideasVisibleIndex = backFn(ideasImages, ideasVisibleIndex);
});
ideasNextButton.addEventListener("click", () => {
  ideasVisibleIndex = nextFn(ideasImages, ideasVisibleIndex);
});

fccBackButton.addEventListener("click", () => {
  console.log("Hello");
  fccVisibleIndex = backFn(fccImages, fccVisibleIndex);
});
fccNextButton.addEventListener("click", () => {
  fccVisibleIndex = nextFn(fccImages, fccVisibleIndex);
});

facBackButton.addEventListener("click", () => {
  facVisibleIndex = backFn(facImages, facVisibleIndex);
});
facNextButton.addEventListener("click", () => {
  facVisibleIndex = nextFn(facImages, facVisibleIndex);
});




//BEETHOVEN: Sharps are +, Flats are -.
const catalogueBeethovenSym = {
  "Symphony 1": {
    "1": [0],
    "2": [-1],
    "3": [1],
    "4": [1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.1_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=A6h4Gi2_LA4"
  },

  "Symphony 2": {
    "1": [2],
    "2": [3],
    "3": [2],
    "4": [2],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.2_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=lcEXvrBfXDM"
  },

  "Symphony 3": {
    "1": [-3],
    "2": [-3, 0],
    "3": [-3],
    "4": [-3],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.3_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=fhHcty9OM-0"
  },

  "Symphony 4": {
    "1": [-2],
    "2": [-3],
    "3": [-2],
    "4": [-2],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.4_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=uGWklkORHJo"
  },

  "Symphony 5": {
    "1": [-3],
    "2": [-4],
    "3": [-3, 0],
    "4": [0],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.5_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=0B4uudNh9-Q"
  },

  "Symphony 6": {
    "1": [-1],
    "2": [-2],
    "3": [-1],
    "4": [-4],
    "5": [-1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.6_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=Zv4PIFRpYcw"
  },

  "Symphony 7": {
    "1": [3],
    "2": [0],
    "3": [-1, 2],
    "4": [3, 0],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.7_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=fWGCB81TFPQ"
  },

  "Symphony 8": {
    "1": [-1],
    "2": [-2],
    "3": [-1],
    "4": [-1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.8_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=V6set4KUs4w"
  },

  "Symphony 9": {
    "1": [-1, -2],
    "2": [-1, 2, 1],
    "3": [-2, 2, 1, -3, -2],
    "4": [-1, -2, 2, 1, 5],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.9_(Beethoven,_Ludwig_van)",
    "YouTube": "https://www.youtube.com/watch?v=gT91esZK90I"
  }
}

//Variables
const dropBeet = document.getElementById("beethoven-choices");
const buttonBeet = document.getElementById("beethoven-button");
const displayFieldBeet = document.getElementById("beethoven-result-display");

//Because "key" is a concept in either a JavaScript-object or a music-piece, I'll use "Vorz" for the music-context (abbreviation of German "Vorzeichen", i.e. number of accidentals).

//Beethoven Functions
function knowChosenVorz() {
  return parseInt(dropBeet.value);
}

function returnMatches(ctlg, choice) {
  let allMatches = "";
  for (let opus in ctlg) {
    //  console.log(opus);
    let rightMvtsArr = [];
    for (let mvt in ctlg[opus]) {
      //      console.log(mvt);
      //      console.log(ctlg[opus][mvt]);
      let mvtAllVorz = ctlg[opus][mvt];
      //     console.log(testVorz);
      for (let vorz in mvtAllVorz) {
        if (mvtAllVorz[vorz] === choice) {
          //       console.log(opus + ", " + mvt);
          rightMvtsArr.push(mvt);
          console.log(rightMvtsArr);
        }
      }
    }
    if (rightMvtsArr.length !== 0) {
      let rightMvtsStr = rightMvtsArr.join(", ");
      let plural;
      if (rightMvtsArr.length === 1) {
        plural = "";
      } else if (rightMvtsArr.length >= 1) {
        plural = "s";
      }
      let imslpText = `<a target="_blank" href="${ctlg[opus]["IMSLP"]}" title="Sheet Music">&#119070;</a>`;
      let ytText = `<a target="_blank" href="${ctlg[opus]["YouTube"]}" title="Listen">&#128362;</a>`;
      let message = `<li>${opus} - Movement${plural} ${rightMvtsStr} - ${imslpText} or ${ytText}</li>`;
      allMatches += message;
    }
  }
  return displayFieldBeet.innerHTML = allMatches;
}

dropBeet.addEventListener("change", () => {
  returnMatches(catalogueBeethovenSym, knowChosenVorz());
});

