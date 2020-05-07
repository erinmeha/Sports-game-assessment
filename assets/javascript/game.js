const teamoneNumshots = document.querySelector("#teamone-numshots")
const teamoneGoals = document.querySelector("#teamone-numgoals")

let T1shots = 0
let T1goals = 0

const teamoneButton = document.querySelector("#teamone-shoot-button")
teamoneButton.addEventListener("click", function (){
    let random = Math.random()
    teamoneNumshots.innerHTML = T1shots +=1
    if (random <0.5){
        teamoneGoals.innerHTML = T1goals +=1
    }
})

const teamtwoNumshots = document.querySelector("#teamtwo-numshots");
const teamtwoGoals = document.querySelector("#teamtwo-numgoals");

let T2shots = 0
let T2goals = 0

const teamtwoButton = document.querySelector("#teamtwo-shoot-button")
teamtwoButton.addEventListener("click", function (){
    let random = Math.random ()
    teamtwoNumshots.innerHTML = T1shots +=1
    if (random <0.5){
        teamtwoGoals.innerHTML = T1goals +=1
    }
})

const resetButton = document.querySelector("#reset-button")
const resetNum = document.querySelector("#num-resets")
let numreset = 0
resetButton.addEventListener("click", function (){
    teamoneNumshots.innerHTML = T1shots = 0
    teamoneGoals.innerHTML = T1goals = 0
    teamtwoNumshots.innerHTML = T2shots = 0
    teamtwoGoals.innerHTML = T2goals = 0
    resetNum.innerHTML = numreset += 1
})