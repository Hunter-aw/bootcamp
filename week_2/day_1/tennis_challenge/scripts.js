let scorer = prompt("Who just scored?")

const Hunter = {
    name: "Hunter",
    score: 0,
    point: scorePoint()

};
const Jona = {
    name: "Jona",
    score: 0,
    point: scorePoint()

};

function alertScore() {
    alert(`The current score is Hunter ${Hunter.score}, Jona ${Jona.score}`)
}

function checkDeuce() {
    if ((Hunter.score === 40) && (Jona.score === 40)) {
        Hunter.score = "Deuce!"
        Jona.score = "Deuce!"
        return;
    } 
}

function playDeuce() {
        scorer.score = "Advantage!";
        scorer();
        if (scorer.score === "Advantage") {
            scorer.score === "Winner!"
        } else {
            Hunter.score = "Deuce!"
            Jona.score = "Deuce!"
            return;
        }
        return;
    }

function scorePoint (scorer) {
    if (this.score < 30) {
        this.score += 15
        return;
    } else if (this.score < 40) {
        this.score += 10
        return;
    } else if (checkDeuce()) {
        playDuece()
    }else this.score = "Winner!"
    return;
};

function checkWin(scorer) {
    if ((Jona.score === "Winner!") || (Hunter.score === "Winner!")) {
        alert(`We have a winner! Congratulations ${scorer}`)
    } else {return;}

}

function playTennis() {
    scorer;
    alertScore();
    while (!checkWin()) {
        scorer.point();
        checkWin();
        alertScore();
    }
    return;
}


playTennis();