const divShareIcon = document.querySelector("#user-info div:last-of-type");
const divShareActiveIcon = document.querySelector(
  "#share-info div:last-of-type"
);

const shareIcon = document.querySelector("#user-info div:last-of-type img");
const shareActiveIcon = document.querySelector(
  "#share-info div:last-of-type img"
);

const facebookIcon = document.querySelector("img[alt='Facebook']");
const twitterIcon = document.querySelector("img[alt='Twitter']");
const pinterestIcon = document.querySelector("img[alt='Pinterest']");

divShareIcon.addEventListener("mouseover", function () {
  this.classList.toggle("share-button-hover");
  shareIcon.src = "../images/icon-share-active.svg";
});

divShareIcon.addEventListener("mouseout", function () {
  this.classList.toggle("share-button-hover");
  shareIcon.src = "../images/icon-share.svg";
});

divShareActiveIcon.addEventListener("mouseover", function () {
  this.classList.toggle("share-button-active-hover");
  shareActiveIcon.src = "../images/icon-share.svg";
});

divShareActiveIcon.addEventListener("mouseout", function () {
  this.classList.toggle("share-button-active-hover");
  shareActiveIcon.src = "../images/icon-share-active.svg";
});

// Handle Social Icons Hovering
facebookIcon.addEventListener("mouseover", function () {
  this.src = "../images/icon-facebook-active.svg";
});

facebookIcon.addEventListener("mouseout", function () {
  this.src = "../images/icon-facebook.svg";
});

twitterIcon.addEventListener("mouseover", function () {
  this.src = "../images/icon-twitter-active.svg";
});

twitterIcon.addEventListener("mouseout", function () {
  this.src = "../images/icon-twitter.svg";
});

pinterestIcon.addEventListener("mouseover", function () {
  this.src = "../images/icon-pinterest-active.svg";
});

pinterestIcon.addEventListener("mouseout", function () {
  this.src = "../images/icon-pinterest.svg";
});

const handleShareBar = () => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 1440) {
    const userInfo = document.querySelector("#user-info");
    const shareInfo = document.querySelector("#share-info");

    divShareIcon.addEventListener("click", function () {
      userInfo.classList.toggle("show-hide");
      shareInfo.classList.toggle("show-hide");
    });

    divShareActiveIcon.addEventListener("click", function () {
      userInfo.classList.toggle("show-hide");
      shareInfo.classList.toggle("show-hide");
    });
  } else {
    const tooltip = document.getElementById("share-tooltip");
    divShareIcon.addEventListener("click", function () {
      tooltip.classList.toggle("tooltip-visible");
    });
  }
};

window.addEventListener("resize", handleShareBar());
