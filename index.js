let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let teamHome = document.getElementById("team-home")
let teamGuest = document.getElementById("team-guest")

home = 0
guest = 0


function increaseHomeScoreOne() {
   home += 1
    homeScore.textContent = home
}

function increaseHomeScoreTwo() {
   home += 2
    homeScore.textContent = home   
}

function increaseHomeScoreThree() {
   home += 3
    homeScore.textContent = home
}

function increaseGuestScoreOne(){
    guest += 1
    guestScore.textContent = guest
}

function increaseGuestScoreTwo(){
    guest += 2
    guestScore.textContent = guest
}

function increaseGuestScoreThree(){
    guest += 3
    guestScore.textContent = guest
}

function newGame() {
    home=0
    guest=0
    guestScore.textContent = 0
    homeScore.textContent = 0
}
 
 
 










/*function emreHayvan(){
    guestScore.textContent = "Evet"
}
function seloHayvan(){
    homeScore.textContent = "Hayir"
}
//function decreaseHomeScoreOne() {
    //home -=1
//homeScore.textContent = home
    //} */