"use strict"

let resetButton = document.querySelector("#reset-button")
let resetCounter = document.querySelector("#num-resets");

// Team 1 Variables
let t1_shotsTaken = document.querySelector("#teamone-numshots");
let t1_shootButton = document.querySelector("#teamone-shoot-button");
let t1_goals = document.querySelector("#teamone-numgoals");

// A team object only contains ints
let team1 = {
  shotsTaken: 0,
  goals: 0
}

// Team 2 Variables
let t2_shotsTaken = document.querySelector("#teamtwo-numshots");
let t2_shootButton = document.querySelector("#teamtwo-shoot-button");
let t2_goals = document.querySelector("#teamtwo-numgoals");

let team2 = {
  shotsTaken: 0,
  goals: 0
}


// Takes a min, max pair and returns a random value x where (min <= x <= max)
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

// Returns a binary integer at random
function getBinaryRandom() {
    return Math.floor(getRandom(0,2));
}

// Updates innerHTML of score elements
function updateScoreboard(){
  t1_goals.innerHTML = team1.goals;
  t1_shotsTaken.innerHTML = team1.shotsTaken;
  t2_goals.innerHTML = team2.goals;
  t2_shotsTaken.innerHTML = team2.shotsTaken;
}

// Increases goal by 1 at random
// Always increments shotsTaken and updates scoreboard
function makeShot(team) {
  if (getBinaryRandom()) {
    team.goals += 1;
  }
  team.shotsTaken += 1;
  updateScoreboard();
}

// Resets score elements on user confirmation
function reset(){
  if(confirm("Do you want to reset?")) {
    team1.goals = 0;
    team1.shotsTaken = 0;
    team2.goals = 0;
    team2.shotsTaken = 0;
    resetCounter.innerHTML = Number(resetCounter.innerHTML) + 1
    updateScoreboard();
  }
}

t1_shootButton.addEventListener("click", function(){
  makeShot(team1)
});

t2_shootButton.addEventListener("click", function(){
  makeShot(team2)
});

resetButton.addEventListener("click", function() {
  reset();
});

