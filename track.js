function tracker(){
    let a = 0;
    let keyPressAmount = 0;

    function countMouseClick() {
        a = a + 1;
         document.getElementById("trackerInside").innerHTML =
         "Number of mouse clicks:" + a;
    }
    
    const elem = document.getElementById("body1");
    elem.addEventListener("click", countMouseClick);
    elem.addEventListener("keydown", countKeyPress(keyPressAmount));
    var test = "<p id='trackerInside3'></p>";
    document.getElementById("tracker").insertAdjacentHTML('beforeend',test);
    incrSec();
    
}
let seconds = 0;
let minutes = 0;
    function incrSec(){
        var timeSpentString = new String(); 
        seconds = seconds + 1;
        if(seconds >= 60){
            seconds = seconds % 60;
            minutes = minutes + 1;
        }
        if(minutes > 0){
            timeSpentString = "Total time spent: "+minutes+" minutes and "+seconds+" seconds";
        }else{
            timeSpentString = "Total time spent: "+seconds+" seconds";
        }
        document.getElementById("trackerInside2").innerHTML = timeSpentString;
        setTimeout(incrSec, 1000);
    }

    function countKeyPress(keyPressAmount){
        keyPressAmount++;
        var keyPressString = new String("Total key presses: " +keyPressAmount);
        document.getElementById("trackerInside3").innerHTML = keyPressString;
    }