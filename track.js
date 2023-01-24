/**
 * Tracker:
 * This function is called or "unloaded" to body
 * of the signUp page. So the events start via
 * this function
 */

let seconds = 0;
let minutes = 0;
let keyPressAmount = -1;
let totalInputCharacter = -1;  
// Knk bunlari -1 yaptim cunku dumduz submite tiklayinca hic key basmadan 1 olarak ekrana cikiyor. cunku fonksiyonlar hep +1 e odakli

function tracker(){ 
    let a = 0;      //variable for mouse click counter
    
    /**
     * Function countMouseClick
     * this function counts the mouse clicks by incrementing
     * the mouse click counter every time the mouse is clicked
     * inside the body.
     */
    function countMouseClick() {
        a = a + 1;
        document.getElementById("trackerInside").innerHTML =
         "Number of mouse clicks:" + a;
    }
    
    countKeyPress();
    inputFieldCounter(); //!!!!Knk bunlar olmadan dumduz hicbir sey yazmadan ve klavyeye tiklamadan basinca bosluk oluyor onun icin bir kere calistridim ki innerhtml atamalari olsun
    //o yuzden keypressler -1 ile basliyor!!!!!!!
 
    const elem = document.getElementById("body1");      //elem is the id of the body
    elem.addEventListener("click", countMouseClick);    //event for clicking is added to body
    elem.addEventListener("keydown", countKeyPress);    //event for key presses is added to body
    const elem2 = document.getElementById("formID");
    elem2.addEventListener("keydown", inputFieldCounter);
    incrSec();                                          //starts the time incremention
    keyTypeInitialize();
   

}

    /**
     * Function incrSec()
    * incrSec is incrementing second
    * every 1000 milisecond this function recurses itself
    * and increments the second by 1 every time.
    * also if second is higher than 60, it starts typing
    * minute and second. When second is lower then 60
    * it only types the seconds.
    * every 60 seconds, minute is incremented by 1 and
    * 60 is modulo'd so it becomes 0 again.
    */
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

    function countKeyPress(){
        keyPressAmount = keyPressAmount + 1;
        var keyPressString = new String("Total key presses: " + keyPressAmount);
        document.getElementById("trackerInside3").innerHTML = keyPressString;
    }

    function keyTypeInitialize(){
        document.getElementById().addEventListener("keydown");
    }
    

    
    function inputFieldCounter()
    {
        totalInputCharacter = totalInputCharacter + 1;
        var charCountString = new String("Total char presses: " + totalInputCharacter);
        document.getElementById("trackerInside4").innerHTML = charCountString;
    }

    function trackerCaller()
    {
        document.getElementById('tracker').style.display='contents';
        return true;
    }