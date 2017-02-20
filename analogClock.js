"use strict";

const fullCircleDegree = 360;
const fullCircleForSeconds = 60;
const fullCircleForMinutes = 60;
const fullCircleForHours = 12;
const degreeOffset = 90;

const handSecond = document.querySelector(".watch__hand--second");
const handMinute = document.querySelector(".watch__hand--minute");
const handHour = document.querySelector(".watch__hand--hour");

let now = null;
let nowSeconds = null;
let nowMinutes = null;
let nowHours = null;

let secondsInDegrees = null;
let minutesInDegrees = null;
let hoursInDegrees = null;

function updateHands() {
  now = new Date();
  nowSeconds = now.getSeconds();
  nowMinutes = now.getMinutes();
  nowHours = now.getHours();

  secondsInDegrees = ((nowSeconds / fullCircleForSeconds) * fullCircleDegree) -
    degreeOffset;
  minutesInDegrees = ((nowMinutes / fullCircleForMinutes) * fullCircleDegree) -
    degreeOffset;
  hoursInDegrees = ((nowHours / fullCircleForHours) * fullCircleDegree) -
    degreeOffset;

  handSecond.style.transform = `rotate(${secondsInDegrees}deg)`;
  handMinute.style.transform = `rotate(${minutesInDegrees}deg)`;
  handHour.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(updateHands, 1000);
