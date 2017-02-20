"use strict";

const fullCircleDegree = 360;
const degreeOffset = 90;
const FULL_CIRCLE_FOR = {
  SECOND: 60,
  MINUTE: 60,
  HOUR: 12
};
const HAND = {
  SECOND: document.querySelector(".watch__hand--second"),
  MINUTE: document.querySelector(".watch__hand--minute"),
  HOUR: document.querySelector(".watch__hand--hour")
};

function convertTimeUnitToDegrees(timeUnits, timeUnitsForFullCircle) {
  return ((timeUnits / timeUnitsForFullCircle) * fullCircleDegree) -
    degreeOffset;
}

function getRotationValue(degrees) {
  return `rotate(${degrees}deg)`;
}

function getCurrentTime() {
  const currentTime = new Date();
  return {
    second: currentTime.getSeconds(),
    minute: currentTime.getMinutes(),
    hour: currentTime.getHours()
  };
}

function convertTimeToDegrees(time) {
  return {
    second: convertTimeUnitToDegrees(time.second, FULL_CIRCLE_FOR.SECOND),
    minute: convertTimeUnitToDegrees(time.minute, FULL_CIRCLE_FOR.MINUTE),
    hour: convertTimeUnitToDegrees(time.hour, FULL_CIRCLE_FOR.HOUR)
  };
}

function updateHandPosition(degrees) {
  HAND.SECOND.style.transform = getRotationValue(degrees.second);
  HAND.MINUTE.style.transform = getRotationValue(degrees.minute);
  HAND.HOUR.style.transform = getRotationValue(degrees.hour);
}

function updateHands() {
  const now = getCurrentTime();
  const timeInDegrees = convertTimeToDegrees(now);
  updateHandPosition(timeInDegrees);
}

setInterval(updateHands, 1000);
