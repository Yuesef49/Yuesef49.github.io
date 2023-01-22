function tracker(){
    let a = 0;

    function countMouseClick() {
        a = a + 1;
         document.getElementById("trackerInside").innerHTML =
         "Number of mouse clicks:" + a;
    }
    
    const elem = document.getElementById("body1");
    elem.addEventListener("click", countMouseClick);
    
    incrSec();
    
}
let second = 0;
    function incrSec(){
        second = second + 1;
        var timeSpentString = new String("Total time spent: " + second); 
        document.getElementById("trackerInside2").innerHTML = timeSpentString;
        setTimeout(incrSec, 1000);
    }