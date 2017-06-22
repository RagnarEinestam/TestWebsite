try {
    var style = localStorage.getItem("index");
    document.getElementById(style).selected = true;
    document.getElementById("header").style.backgroundColor = localStorage.getItem("header-color");
    document.getElementById("header").style.color = localStorage.getItem("header-font-color"); document.getElementById("navigation").style.backgroundColor = localStorage.getItem("nav-color");
}
catch(err) {
    console.log(err);
}

var slideimages = new Array();
var images = document.querySelectorAll("#slideshow img");
for(var i = 0; i < images.length; i++){
    slideimages.push(images[i]);
}
var step = 0;
function slideit() {
    document.getElementById("slideshow-img").src = slideimages[step].src;
    console.log(slideimages[step].src + " " + step);
    var counter = step+1;
    if (step < images.length-1) {
        step++;
    } else {
        step = 0;
    }
    document.getElementById("image-count").innerHTML = counter + "/" + images.length;
    setTimeout("slideit()", 3000);
}
try {
    slideit();
}
catch(err) {
    console.log(err);
}
function theme(sel){
    var str = sel.options[sel.selectedIndex].text;
    localStorage.setItem("index", str);
    switch(str) {
        case "Spearmint":
         document.getElementById("header").style.backgroundColor = "#66FFCC";
            localStorage.setItem("header-color", "#66FFCC");
            document.getElementById("header").style.color = "#3D987A";
            localStorage.setItem("header-font-color", "#3D987A");
            document.getElementById("navigation").style.backgroundColor = "#5CE5B7";
            localStorage.setItem("nav-color", "#5CE5B7");
            break;
            
        case "Epic":
         document.getElementById("header").style.backgroundColor = "#CC66FF";
            localStorage.setItem("header-color", "#CC66FF");
            document.getElementById("header").style.color = "#8844AA";
           localStorage.setItem("header-font-color", "#8844AA"); document.getElementById("navigation").style.backgroundColor = "#A150C9";
            localStorage.setItem("nav-color", "#A150C9");
            break;
        case "Ocean":
         document.getElementById("header").style.backgroundColor = "#00ACE6";
            localStorage.setItem("header-color", "#00ACE6");
            document.getElementById("header").style.color = "#006080";
            localStorage.setItem("header-font-color", "#006080");
            document.getElementById("navigation").style.backgroundColor = "#0086B3";
            localStorage.setItem("nav-color", "#0086B3");
            break;
    }
}
try{
    document.getElementById("nav-title").addEventListener("click", function(){
    if(document.getElementById("navbar").style.display == 'block'){
        document.getElementById("navbar").style.display = 'none';
    }else{
        document.getElementById("navbar").style.display = 'block';
    }
}, false);
}catch(err){ 
    console.log(err);
}