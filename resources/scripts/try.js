//CHAPTER Visibility
let logoBarTitle = document.getElementById("logo-bar-title");
const linkArr = Array.from(document.getElementsByClassName("nav-link"));
const firstLink = linkArr[0];

const chapterArr = Array.from(document.getElementsByTagName("section"));
const chapterHeadingsArr = Array.from(document.getElementsByClassName("ch-hd"));

//var currentChapter = chapterArr[0];
var currentIndex = 0;


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
  // scroll to this Chapter;
  return chapterArr[index].scrollIntoView(true);
}

function decideChapVis(index) {
  if (window.innerWidth > 600) {
    onlyThisChapVis(index);
  } else {
    mainlyThisChapVis(index);
  }
}


/*Event Listeners */

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


//OLD

//CHAPTER Visibility
let logoBarTitle = document.getElementById("logo-bar-title");
const linkArr = Array.from(document.getElementsByClassName("nav-link"));
const firstLink = linkArr[0];
const chapterArr = Array.from(document.getElementsByTagName("section"));
const chapterHeadingsArr = Array.from(document.getElementsByClassName("ch-hd"));
var currentChapter = chapterArr[0];

function newChapterVisibility(arr, visindex) {
  arr.forEach((element, index) => {
    if (index === visindex) {
      element.classList.remove("tile-hidden");
    } else {
      element.classList.add("tile-hidden");
    }
  })
}

function newNavFocus(arr, visindex) {
  arr.forEach((element, index) => {
    if (index === visindex) {
      element.classList.add("nav-link-focus");
    } else {
      element.classList.remove("nav-link-focus");
    }
  })
}

function knowChapterIndex(link) {
  return linkArr.indexOf(link);
}
function knowChapterHTML(link) {
  let x = knowChapterIndex(link);
  return chapterArr[x];
}
/*
function knowChapterId(link) {
  let x = getChapterHTML(link);
  return x.id;
}
*/
function updateCurrentChapter(link) {
  let x = knowChapterIndex(link);
  return currentChapter = chapterArr[x];
}

function updateVisibleChapter(link) {
  let x = knowChapterIndex(link);
  return newChapterVisibility(chapterArr, x);
}

function updateCurrentNav(link) {
  let x = knowChapterIndex(link);
  return newNavFocus(linkArr, x);
}

function allChaptersVisAllNavNormal(arr) {
  arr.forEach((element, index) => {
    element.classList.remove("tile-hidden");
    element.classList.remove("nav-link-focus");
  });
}

function updateLogoBarTitle(link) {
  let x = knowChapterIndex(link);
  let y = chapterHeadingsArr[x].innerHTML;
  return logoBarTitle.innerHTML = y;
}





function chapterToggle(link) {
  updateLogoBarTitle(link);
  if (window.innerWidth > 600) {
    updateVisibleChapter(link);
    updateCurrentNav(link);
  }
  return updateCurrentChapter(link);
}

//Event-Listeners Chapters
window.onload = (event) => {
  chapterToggle(firstLink);
  currentChapter = chapterArr[0];
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {

    allChaptersVisAllNavCurrent(chapterArr);
  } else if (window.innerWidth > 600) {
    chapterToggle();
  }
});

/*
window.onresize = (event) => {
  allChaptersVisAllNavCurrent(chapterArr);
  chapterToggle(firstLink);
};
*/

const linkListeners = linkArr.map((link) => {
  link.addEventListener("click", () => {
    chapterToggle(link);
  });
});