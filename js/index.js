const divShareIcon = document.querySelector("#user-info div:last-of-type");
const divShareActiveIcon = document.querySelector(
  "#share-info div:last-of-type"
);

const shareIcon = document.querySelector("#user-info div:last-of-type img");
const shareActiveIcon = document.querySelector(
  "#share-info div:last-of-type img"
);

const userInfo = document.querySelector("#user-info");
const shareInfo = document.querySelector("#share-info");

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

divShareIcon.addEventListener("click", function () {
  userInfo.classList.toggle("show-hide");
  shareInfo.classList.toggle("show-hide");
});

divShareActiveIcon.addEventListener("mouseover", function () {
  this.classList.toggle("share-button-active-hover");
  shareActiveIcon.src = "../images/icon-share.svg";
});

divShareActiveIcon.addEventListener("mouseout", function () {
  this.classList.toggle("share-button-active-hover");
  shareActiveIcon.src = "../images/icon-share-active.svg";
});

divShareActiveIcon.addEventListener("click", function () {
  userInfo.classList.toggle("show-hide");
  shareInfo.classList.toggle("show-hide");
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
