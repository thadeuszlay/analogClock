"use strict";

const handSecond = document.querySelector(".watch__hand--second");
const handMinute = document.querySelector(".watch__hand--minute");
const handHour = document.querySelector(".watch__hand--hour");

function updateHands() {
  const fullCircleDegree = 360;
  const fullCircleForSeconds = 60;
  const fullCircleForMinutes = 60;
  const fullCircleForHours = 12;
  const degreeOffset = 90;

  const handSecond = document.querySelector('.watch__hand--second');

  const now = new Date();
  const nowSeconds = now.getSeconds();
  const nowMinutes = now.getMinutes();
  const nowHours = now.getHours();

  console.log("nowSeconds: ", nowSeconds);

  const secondsInDegrees = (nowSeconds / fullCircleForSeconds) *
    fullCircleDegree;
  const minutesInDegrees = (nowMinutes / fullCircleForMinutes) *
    fullCircleDegree;
  const hoursInDegrees = (nowHours / fullCircleForHours) *
    fullCircleDegree;
  console.log("secondsInDegrees: ", secondsInDegrees);

  handSecond.style.transform = `rotate(${secondsInDegrees - degreeOffset}deg)`;
  handMinute.style.transform = `rotate(${minutesInDegrees - degreeOffset}deg)`;
  handHour.style.transform = `rotate(${hoursInDegrees - degreeOffset}deg)`;


}

setInterval(updateHands, 1000);
