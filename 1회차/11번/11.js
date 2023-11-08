let now = new Date()
// console.log(now)

let hours = now.getHours()
// console.log(hours)

function sayHi (time) {
    if(time < 10) {
        console.log("Good morning !")
    } else if (time >= 10 && time <= 18) {
        console.log("Good Afternoon !")
    } else {
        console.log("Good Evening !")
    }
}

sayHi(hours)