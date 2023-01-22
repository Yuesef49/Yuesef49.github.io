let a = 0;

function countMouseClick() {
    a = a + 1;
     document.getElementById("trackerInside").innerHTML =
     "Number of mouse clicks:" + a;
}

const elem = document.getElementById("body1");
elem.addEventListener("click", countMouseClick);

document.getElementById("signUpSubmitButton").addEventListener("click", incrementionStopper);

let second = 0;
let IsClicked = false;
function incrSec(){
    second = second + 1;
    var timeSpentString = new String("Total time spent: " + second); 
    document.getElementById("trackerInside2").innerHTML = timeSpentString;
}
function incrementionStopper(){
    IsClicked = true;
}


while(!IsClicked){
    setInterval(incrSec, 1000);
}
