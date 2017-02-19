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

  const secondsInDegrees = ((nowSeconds / fullCircleForSeconds) *
    fullCircleDegree) - degreeOffset;
  const minutesInDegrees = ((nowMinutes / fullCircleForMinutes) *
    fullCircleDegree) - degreeOffset;
  const hoursInDegrees = ((nowHours / fullCircleForHours) *
    fullCircleDegree) - degreeOffset;

  handSecond.style.transform = `rotate(${secondsInDegrees}deg)`;
  handMinute.style.transform = `rotate(${minutesInDegrees}deg)`;
  handHour.style.transform = `rotate(${hoursInDegrees}deg)`;

}

setInterval(updateHands, 1000);
