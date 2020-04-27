//document.getElementById("slider-left").onclick = switchLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider(){
    timer = setTimeout(function (){
        var polosa =  document.getElementById("items");
        left = left - 128;
        if (left < -768){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left +"px";// команда left работает если у элемента стоит position или absolute, или relative, или fixed 
        autoSlider();
    }, 1000);
}

