
let btn1 = document.querySelector(".btn-box");
let currMode ="blue";
var sliderCounter = 0;
var sliderContent = [
    "Frontend Developer",
    "Web Designer",
    "UI/UX Designer"
   
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

slide();
setInterval(slide, 2000);


btn1.addEventListener("click" , ()=>{
    if(currMode === "blue"){
        currMode === "black";
        document.querySelector("body").style.backgroundColor ="black"
    }
    else {
        currMode = "blue"
        document.querySelector("body").style.backgroundColor ="blue"
    }
}
)