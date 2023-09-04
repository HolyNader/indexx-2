let colorList = document.querySelectorAll(".colorMaster span");

let Colors = window.localStorage.getItem("color-data");
if (Colors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-data")
  );
  colorList.forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === Colors) {
      element.classList.add("active");
    }
  });
}

colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorList.forEach((li) => {
      li.classList.remove("active");
      e.target.classList.add("active");
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );
    });
    localStorage.setItem("color-data", e.target.dataset.color);
  });
});
openSide = function () {
  let gear = document.getElementById("sideBar");
  if (gear.style.left == "-280px") {
    gear.style.left = "0px";
  } else {
    gear.style.left = "-280px";
  }
};
openSide();

onRandomBG = function () {
  let backgroundInterval;
  backgroundInterval = setInterval(() => {
    let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
    let randomNumber = Math.floor(Math.random() * imgArr.length);
    let bgImg = document.getElementById("landing");
    bgImg.style.backgroundImage = "url('img/" + imgArr[randomNumber] + "')";
  }, 10000);

  offRandomBG = function () {
    clearInterval(backgroundInterval);
  };
};
onRandomBG();
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  let offsetTop = ourSkills.offsetTop;
  let windowScroll = this.pageYOffset;
  let skillHeight = ourSkills.offsetHeight;
  let allSpan = document.querySelectorAll(".skills .box span");
  if (windowScroll > offsetTop - skillHeight) {
    allSpan.forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  } else {
    allSpan.forEach((element) => {
      element.style.width = 0;
    });
  }
};

let gallery = document.querySelectorAll(".our-gallery img");

gallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "imageOverlay";
    document.body.appendChild(overlay);
    let Imag = document.createElement("img");
    Imag.className = "overlayImage";
    Imag.src = e.target.src;
    overlay.appendChild(Imag);
    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      imgHeading.className = "imgHeading";
      overlay.appendChild(imgHeading);
      imgHeading.innerHTML = img.alt;
    }

    let closeButton = document.createElement("span");
    let closeIcone = document.createTextNode("X");
    closeButton.className = "closeButton";

    closeButton.appendChild(closeIcone);
    overlay.appendChild(closeButton);
  });
  document.addEventListener("click", (e) => {
    if (e.target.className == "closeButton") {
      document.querySelector(".imageOverlay").remove();
    }
  });
});

const allLinks = document.querySelectorAll(".nav-item .nav-link");
const allBullet = document.querySelectorAll(".nav-bullet .bullet");
makeLoop = function (elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.scope).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
makeLoop(allBullet);
makeLoop(allLinks);
let btns1 = document.querySelectorAll(".buttons button");
let btns2 = document.querySelectorAll(".buttons2 button");
const allBullets = document.querySelector(".nav-bullet");
bulletOn = function () {
  allBullets.style.display = "block";
  localStorage.setItem("bullet_option", "block");
};
bulletOff = function () {
  allBullets.style.display = "none";
  localStorage.setItem("bullet_option", "none");
};
bulletOn();
btns2.forEach((ele) => {
  ele.classList.remove("active");
});

handleActive = function (ev) {
  ev.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      ev.forEach((ele) => {
        ele.classList.remove("active");
        e.target.classList.add("active");
      });
    });
  });
};
handleActive(btns1);
handleActive(btns2);
handleActive(allBullet);
bulletLocalitem = localStorage.getItem("bullet_option");

if (bulletLocalitem == "block") {
  allBullets.style.display = "block";
  document.querySelector(".buttons2 .yes").classList.add("active");
} else {
  allBullets.style.display = "none";
  document.querySelector(".buttons2 .no").classList.add("active");
}

resetOptions = function () {
  localStorage.clear();
window.location.reload();
};
