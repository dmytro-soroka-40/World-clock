// New-york

const hourArrowNewYork = document.getElementById('clock__hour-arrow_new-york');
const minArrowNewYork = document.getElementById('clock__min-arrow_new-york');
const secArrowNewYork = document.getElementById('clock__sec-arrow_new-york');

// London

const hourArrowLondon = document.getElementById('clock__hour-arrow_london');
const minArrowLondon = document.getElementById('clock__min-arrow_london');
const secArrowLondon = document.getElementById('clock__sec-arrow_london');

// Kyiv

const hourArrowKyiv = document.getElementById('clock__hour-arrow_kyiv');
const minArrowKyiv = document.getElementById('clock__min-arrow_kyiv');
const secArrowKyiv = document.getElementById('clock__sec-arrow_kyiv');

// Tokio

const hourArrowTokio = document.getElementById('clock__hour-arrow_tokio');
const minArrowTokio = document.getElementById('clock__min-arrow_tokio');
const secArrowTokio = document.getElementById('clock__sec-arrow_tokio');

const getUTCTime = () => {
  let time = new Date();
  let hour = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();

  let diffTimeNewYour = 4,
    diffTimeKyiv = 2,
    diffTimeTokio = 9;

  setNewYorkTime(hour - diffTimeNewYour, minutes, seconds);
  setLondonTime(hour, minutes, seconds);
  setKyivTime(hour + diffTimeKyiv, minutes, seconds);
  setTokioTime(hour + diffTimeTokio, minutes, seconds);
};

const setNewYorkTime = (hour, minutes, seconds) => {
  hourArrowNewYork.style.transform = `rotateZ(${hour * 30 + minutes / 12}deg)`;
  minArrowNewYork.style.transform = `rotateZ(${minutes * 6}deg)`;
  secArrowNewYork.style.transform = `rotateZ(${seconds * 6}deg)`;
};

const setLondonTime = (hour, minutes, seconds) => {
  hourArrowLondon.style.transform = `rotateZ(${hour * 30 + minutes / 12}deg)`;
  minArrowLondon.style.transform = `rotateZ(${minutes * 6}deg)`;
  secArrowLondon.style.transform = `rotateZ(${seconds * 6}deg)`;
};

const setKyivTime = (hour, minutes, seconds) => {
  hourArrowKyiv.style.transform = `rotateZ(${hour * 30 + minutes / 12}deg)`;
  minArrowKyiv.style.transform = `rotateZ(${minutes * 6}deg)`;
  secArrowKyiv.style.transform = `rotateZ(${seconds * 6}deg)`;
};

const setTokioTime = (hour, minutes, seconds) => {
  hourArrowTokio.style.transform = `rotateZ(${hour * 30 + minutes / 12}deg)`;
  minArrowTokio.style.transform = `rotateZ(${minutes * 6}deg)`;
  secArrowTokio.style.transform = `rotateZ(${seconds * 6}deg)`;
};

setInterval(() => {
  getUTCTime();
}, 1000);
