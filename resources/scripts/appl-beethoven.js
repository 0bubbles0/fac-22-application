const catalogueBeethovenSym = {
  "Symphony 1": {
    "1": [0],
    "2": [-1],
    "3": [1],
    "4": [1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.1_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 2": {
    "1": [2],
    "2": [3],
    "3": [2],
    "4": [2],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.2_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 3": {
    "1": [-3],
    "2": [-3, 0],
    "3": [-3],
    "4": [-3],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.3_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 4": {
    "1": [-2],
    "2": [-3],
    "3": [-2],
    "4": [-2],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.4_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 5": {
    "1": [-3],
    "2": [-4],
    "3": [-3, 0],
    "4": [0],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.5_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 6": {
    "1": [-1],
    "2": [-2],
    "3": [-1],
    "4": [-4],
    "5": [-1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.6_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 7": {
    "1": [3],
    "2": [0],
    "3": [-1, 2],
    "4": [3, 0],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.7_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 8": {
    "1": [-1],
    "2": [-2],
    "3": [-1],
    "4": [-1],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.8_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

  "Symphony 9": {
    "1": [-1, -2],
    "2": [-1, 2, 1],
    "3": [-2, 2, 1, -3, -2],
    "4": [-1, -2, 2, 1, 5],
    "IMSLP": "https://imslp.org/wiki/Symphony_No.9_(Beethoven,_Ludwig_van)",
    "YouTube": "url"
  }

}

const dropBeet = document.getElementById("beethoven-choices");
const buttonBeethoven = document.getElementById("beethoven-button");
const displayFieldBeethoven = document.getElementById("beethoven-result-display");
const desiredKey = -3;

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
      let imslpText = `<a target="_blank" href="${imslpURL}" title="Sheet Music">&#119070;</a>`;
      let ytText = `<a target="_blank" href="${ytURL}" title="Listen">&#128362;</a>`;
      let message1 = `<li>${opus} - Mvt: ${rightMvtsStr} - ${imslpText} or ${ytText}.</li>`;
      //console.log(message1);
      allMatches += message1;
    }
  }
  return displayField.innerHTML = allMatches;
}

buttonBeethoven.addEventListener("click", () => {
  let wantedVorz = knowChosenVorz();
  dropBeet.value = wantedVorz;
});

dropBeet.addEventListener("change", () => {
  let desiredVorz = knowChosenVorz();
  console.log(desiredVorz);
  ctlgReturnMatches(catalogueBeethovenSym, knowChosenVorz());
});




//Practice 23:30
function catalogueAccessArray(ctlg) {
  for (let opus in ctlg) {
    //  console.log(opus);
    let rightMvtsArr = [];
    for (let mvt in ctlg[opus]) {
      //      console.log(mvt);
      //      console.log(ctlg[opus][mvt]);
      let testVorz = ctlg[opus][mvt];
      //     console.log(testVorz);
      for (let vorz in testVorz) {
        if (testVorz[vorz] === desiredVorz) {
          //       console.log(opus + ", " + mvt);
          rightMvtsArr.push(mvt);
        }
      }
    }
    // console.log(rightMvtsArr.join(", "));
    let message = "Play " + opus + ", Mvts " + rightMvtsArr.join(", ");
    console.log(message);
  }
  return ".";
}

//Practice
const catalogueBeethovenSym = {
  "Symphony 1": {
    "Movement 1": [0],
    "Movement 2": [-1],
    "Movement 3": [1],
    "Movement 4": [1],
    "IMSLP": "url",
    "YouTube": "url"
  },
  "Symphony 3": {
    "Movement 1": [-3],
    "Movement 2": [-3, 0, 1],
    "Movement 3": [-3],
    "Movement 4": [-3],
    "IMSLP": "url",
    "YouTube": "url"
  }
}

const desiredVorz = 1;

function VorzComparison(test) {
  if (test === desiredVorz) {
    return true;
  }
  return false;
}

function catalogueAccessArray(ctlg) {
  for (let opus in ctlg) {
    console.log(opus);
    for (let mvt in ctlg[opus]) {
      //      console.log(mvt);
      //      console.log(ctlg[opus][mvt]);
      let testVorz = ctlg[opus][mvt];
      console.log(testVorz);
      for (let i = 0; i < testVorz.length; i++) {
        if (testVorz[i] === desiredVorz) {
          console.log(mvt);
        }
      }
      /*
            console.log(typeof(testVorz));
            if (typeof(testVorz) == "object") {
              let testVorzArr = [];
              for (let i=0; i < testVorz.length; i++) {
                console.log(testVorz[i]);
                testVorzArr.push(testVorz[i]);
              }
              console.log(testVorzArr);
              console.log(typeof(testVorzArr));
            }
           
            if (typeof(testArr) == "object" && "0" in testArr) {
              console.log(mvt);
            }
            */
      //    if () {}
      //      let anyMatch = testArr.some(x => x === desiredKey);
    }
    //    console.log(ctlg[opus]);
    /*
        for (let mvt in opus) {
          console.log(ctlg[opus][mvt]);
        }
        console.log(ctlg[opus]["Movement 1"]);
        */
  }
  return ".";
}

function catalogueIterator2(obj) {
  for (let x in obj) {
    //    console.log(ctlg[opus]);
    console.log(x);
    // console.log("Play " + obj[x]["Movement 1"]);
    /*
    for (let y in x) {
      console.log("Play " + obj[x][y]);
    }
  */
  }
  return ".";
}

//console.log(catalogueBeethovenSym["Symphony 1"]["IMSLP"]);
console.log(catalogueAccessArray(catalogueBeethovenSym));


/*Can turn movement-Vorz into catalogueAccessArray
 console.log(testVorz);
      console.log(typeof(testVorz));
      if (typeof(testVorz) == "object") {
        let testVorzArr = [];
        for (let i=0; i < testVorz.length; i++) {
          console.log(testVorz[i]);
          testVorzArr.push(testVorz[i]);
        }
        console.log(testVorzArr);
        console.log(typeof(testVorzArr));
      }
 */