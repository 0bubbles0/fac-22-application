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
const fccBackButton = document.querySelector("#button-back-fcc");
const fccNextButton = document.querySelector("#button-next-fcc");
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




//BEETHOVEN
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



const dropBeet = document.getElementById("beethoven-choices");
const buttonBeethoven = document.getElementById("beethoven-button");
const displayFieldBeethoven = document.getElementById("beethoven-result-display");
let desiredKey = -3;

function knowChosenVorz() {
  let seeValue = dropBeet.value;
  //console.log(seeValue);
  let seeChosenValue = dropBeet.options[dropBeet.selectedIndex].value;
  //console.log(seeChosenValue);
  return seeChosenValue;
}

//Practice 01:00
function returnMatches(ctlg, desiredvorz) {
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
        if (mvtAllVorz[vorz] === desiredvorz) {
          //       console.log(opus + ", " + mvt);
          rightMvtsArr.push(mvt);
        }
      }
    }
    if (rightMvtsArr.length !== 0) {
      let rightMvtsStr = rightMvtsArr.join(", ");
      let imslpURL = ctlg[opus]["IMSLP"];
      let ytURL = ctlg[opus]["YouTube"];
      let imslpText = `<a target="_blank" href="${ctlg[opus]["IMSLP"]}" title="Sheet Music">&#119070;</a>`;
      let ytText = `<a target="_blank" href="${ytURL}" title="Listen">&#128362;</a>`;
      let message1 = `<li>${opus} - Mvt: ${rightMvtsStr} - ${imslpText} or ${ytText}</li>`;
      //console.log(message1);
      allMatches += message1;
    }
  }
  return displayFieldBeethoven.innerHTML = allMatches;
}


returnMatches(catalogueBeethovenSym, desiredKey)
/*
console.log("h");

buttonBeethoven.addEventListener("click", () => {
  let wantedVorz = knowChosenVorz();
  dropBeet.value = wantedVorz;
});

dropBeet.addEventListener("change", () => {
  let desiredVorz = knowChosenVorz();
  console.log(desiredVorz);
  returnMatches(catalogueBeethovenSym, knowChosenVorz());
});
  */