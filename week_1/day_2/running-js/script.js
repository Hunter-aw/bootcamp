let userAge = prompt("Hey there partner, how old are ya?")
let userGender = prompt("Tell me good lookin' is you a man or a woo man?")

if (userAge < 18) {
    alert("Wo-ho-hoa there sonny, you're a little to young to be drinkin ain't ya? Why don't you come back in a couple years")
} else if (userGender === "female" | "woman" | "woo man") {
    alert("Alrighty Missy, drinks on our us tonight, darn tootin!!")
} else if (userGender === "male" | "man") {
    alert("Well partner, you can come on it, but I ain't payin for ya!")
} else {
    alert("What do you mean gender is a construct?")
}

