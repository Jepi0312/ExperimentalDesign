var menu = document.querySelector('#mobile-menu'); //Targets the items within the navbar menu (Home, About, Services) with the class navbar__menu

var menuLinks = document.querySelector('.navbar__menu');
var navLogo = document.querySelector('#navbar__logo'); // Display Mobile Menu by creating an arrow function that triggers and toggles the classes is.active and active

var mobileMenu = function mobileMenu() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu); //Show active menu when scrolling

var highlightMenu = function highlightMenu() {
  var elem = document.querySelector('.highlight');
  var homeMenu = document.querySelector('#home-page');
  var aboutMenu = document.querySelector('#about-page');
  var servicesMenu = document.querySelector('#services-page');
  var scrollPos = window.scrollY; // console.log(scrollPos);
  // Adds 'highlights' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu); // Close mobile Menu when clicking on a menu item

var hideMobileMenu = function hideMobileMenu() {
  var menuBars = document.querySelector('.is-active');

  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu); //Play Audio button

var play = document.querySelector('#play');
var title = document.querySelector('#title');
var recent_volume = document.querySelector('#volume');
var volume_show = document.querySelector('#volume_show');
var slider = document.querySelector('#duration_slider');
var show_duration = document.querySelector('#show_duration');
var track_image = document.querySelector('#track_image');
var auto_play = document.querySelector('#auto');
var present = document.querySelector('#present');
var total = document.querySelector('#total');
var artist = document.querySelector('#artist');
var timer;
var autoplay = 0;
var index_no = 0;
var playing_song = false; //create a audio Element

var track = document.createElement('audio'); //All songs list

var All_song = [{
  name: "NEPTUNE",
  path: "music\\NEPTUNE.mp3",
  img: "images\\neptune.png",
  singer: "Produced by Jepi"
}]; //Function to load the tracks

function load_track(index_no) {
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();
}

load_track[index_no]; //checking whether song is playing or not

function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
} // play song


function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
} // Function to load the track

/***/ "./src/app.css";