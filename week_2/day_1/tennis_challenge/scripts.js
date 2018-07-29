let newPoint = prompt("Who just scored?")

let ifScore = function() {
    if (this.score < 30) {
        this.score += 15;
        return;
    } else if (this.score < 40) {
        this.score+=10;
        return;
}
}

let ifDeuce = function() {
    if ((hunter.score === 40) && (jona.score === 40)) {
        hunter.score = "Deuce!"
        jona.score = "Deuce!"
        return;
    } 
}

let playDeuce = function() {
    if (ifDeuce) {
        if(newPoint) {
            newPoint.score = "Advantage!"
        }
}
}

const hunter ={
    name: "Hunter",
    score: 0,
    // ifScore:

};
const jona ={
    name: "Jona",
    score: 0,
    // ifScore:

};

newPoint();