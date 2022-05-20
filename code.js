let toggle = false;
let start;
let stopId;
let progress;

let element = document.getElementById('element');
element.setAttribute("style", "background : blue ; position:absolute ; width:50px ; height:50px ; top:50px");

function stlp(timestamp){
    if(!start || progress >400 ) start= timestamp;
    progress = (timestamp-start)/10 +50;
    element.style.top= progress +'px';
    stopId= window.requestAnimationFrame(stlp);
}
function toggleAnimation(){
    if(!toggle){
        toggle= true;
        window.requestAnimationFrame(stlp);

    } else {
        toggle= false;
        cancelAnimationFrame(stopId);
    }
}

