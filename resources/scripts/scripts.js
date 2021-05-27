/*
Table of Contents:
- Surprise button
- Chapter Visibility: Variables, Functions, Event Listeners
- Carousels: General Functions, Variables, Event Listeners
- Beethoven Bootcamp: Catalogue-object, Variables, Functions, Event Listeners
*/

//Surprise button
//const root = document.documentElement;
const root = document.querySelector(":root");
const surpriseButton = document.getElementById("button-surprise");

function changeColors() {
  let x = getComputedStyle(root);
  if (x.getPropertyValue('--top-color') == "#e07a5f") {
    root.style.setProperty('--bground-color', "white");
    root.style.setProperty('--top-color', "#d1e8e2");
    root.style.setProperty('--nav-color', "#d1e8e2");
    root.style.setProperty('--card-color', "lightgreen");
    root.style.setProperty('--logo-color', "black");
    root.style.setProperty('--font-color', "black");
    root.style.setProperty('--accent-color', "red");
  } else {
    root.style.setProperty('--bground-color', "#f4f1de");
    root.style.setProperty('--top-color', "#e07a5f");
    root.style.setProperty('--nav-color', "#f2cc8f");
    root.style.setProperty('--card-color', "#f2cc8f");
    root.style.setProperty('--logo-color', "#004f70");
    root.style.setProperty('--font-color', "black");
    root.style.setProperty('--accent-color', "#e07a5f");
  }
}

surpriseButton.addEventListener("click", changeColors);



//CHAPTER Visibility
let logoBarTitle = document.getElementById("logo-bar-title");
const linkArr = Array.from(document.getElementsByClassName("nav-link"));
//const firstLink = linkArr[0];

const chapterArr = Array.from(document.getElementsByTagName("section"));
const chapterHeadingsArr = Array.from(document.getElementsByClassName("ch-hd"));

let currentIndex = 0;

//Functions Visibility
function updateVisibleChapter(index) {
  chapterArr.forEach((element, i) => {
    if (i === index) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  })
}

function updateCurrentNav(index) {
  linkArr.forEach((element, i) => {
    if (i === index) {
      element.classList.add("nav-link-focus");
    } else {
      element.classList.remove("nav-link-focus");
    }
  })
}

function updateLogoBarTitle(index) {
  let y = chapterHeadingsArr[index].innerHTML;
  return logoBarTitle.innerHTML = y;
}

function onlyThisChapVis(index) {
  updateVisibleChapter(index);
  updateCurrentNav(index);
  return updateLogoBarTitle(index);
}

function mainlyThisChapVis(index) {
  chapterArr.forEach((element) => {
    element.classList.remove("hidden");
  });
  linkArr.forEach((element) => {
    element.classList.remove("nav-link-focus");
  });
  return chapterArr[index].scrollIntoView(true);
}

function decideChapVis(index) {
  if (window.innerWidth > 600) {
    onlyThisChapVis(index);
  } else {
    mainlyThisChapVis(index);
  }
}

/*Event Listeners Visibility*/
window.addEventListener("load", () => {
  currentIndex = 0;
  decideChapVis(currentIndex);
});

window.addEventListener("resize", () => {
  decideChapVis(currentIndex);
});

linkArr.map((item) => {
  item.addEventListener("click", () => {
    currentIndex = linkArr.indexOf(item);
    decideChapVis(currentIndex);
  });
});


//CAROUSELS

//General Functions
function newVisibility(arr, visindex) {
  arr.forEach((element, index) => {
    if (index === visindex) {
      element.classList.remove("hidden");
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
      element.classList.add("hidden");
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

//Variables Carousels
//Ideas Carousel
const ideasImages = Array.from(document.getElementsByClassName("idea-tile"));
const ideasBackButton = document.querySelector("#button-back-ideas");
const ideasNextButton = document.querySelector("#button-next-ideas");
let ideasVisibleIndex = 0;

//FCC Carousel
const fccImages = Array.from(document.getElementsByClassName("fcc-tile"));
const fccBackButton = document.getElementById("button-back-fcc");
const fccNextButton = document.getElementById("button-next-fcc");
let fccVisibleIndex = 0;

//FAC Carousel
const facImages = Array.from(document.getElementsByClassName("fac-tile"));
const facBackButton = document.querySelector("#button-back-fac");
const facNextButton = document.querySelector("#button-next-fac");
let facVisibleIndex = 0;


//Event Listeners Carousels
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




//BEETHOVEN: Catalogue-object: Sharps are +, Flats are -.
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

//Variables Beethoven
const dropBeet = document.getElementById("beethoven-choices");
const buttonBeet = document.getElementById("beethoven-button");
const displayFieldBeet = document.getElementById("beethoven-result-display");

//Because "key" is a concept in either a JavaScript-object or a music-piece, I'll use "Vorz" for the music-context (abbreviation of German "Vorzeichen", i.e. number of accidentals).

//Functions Beethoven
function knowChosenVorz() {
  return parseInt(dropBeet.value);
}

function returnMatches(ctlg, choice) {
  let allMatches = "";
  for (let opus in ctlg) {
    let rightMvtsArr = [];
    for (let mvt in ctlg[opus]) {
      let mvtAllVorz = ctlg[opus][mvt];
      for (let vorz in mvtAllVorz) {
        if (mvtAllVorz[vorz] === choice) {
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

/*Event Listeners Beethoven*/
dropBeet.addEventListener("change", () => {
  returnMatches(catalogueBeethovenSym, knowChosenVorz());
});