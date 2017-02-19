"use strict";

const handSecond = document.querySelector(".clock__hand--second");
const handMinute = document.querySelector(".clock__hand--minute");
const handHour = document.querySelector(".clock__hand--hour");

function updateHands() {
  const now = new Date();
  console.log("now: ", now);
}

updateHands();
