const arrowleft=document.querySelector(".left");
const arrowright=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image")
const bottom=document.querySelector(".bottom");
const length=images.length;

for(let i=0;i<length;i++){
    const button=document.createElement("div")
    button.className="button";
    bottom.appendChild(button);
 }
 const buttons=document.querySelectorAll(".button");
 buttons[0].style.backgroundColor="white";

 const resetcolor=()=>{
    buttons.forEach((button,i)=>{
        button.style.backgroundColor="transparent";
    })
 }
 buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetcolor()
        slider.style.transform=`translate(-${i*600}px)`;
        sliderNum=i+1;
        button.style.backgroundColor="white";
    })
 })
const nextslide=()=>{
    slider.style.transform=`translate(-${sliderNum*600}px)`
    sliderNum++;
}
const getfirstslide=()=>{
    slider.style.transform=`translate(0px)`
    sliderNum=1;
}
const getLastslide=()=>{
    slider.style.transform=`translate(-${(length-1)*600}px)`
    sliderNum=length;
}
const prevslide=()=>{
    slider.style.transform=`translate(-${(sliderNum-2)*600}px)`
    sliderNum--;
}
const colorchange=()=>{
    resetcolor();
    console.log(sliderNum)
    buttons[sliderNum-1].style.backgroundColor="white"
}
let sliderNum=1;
 arrowright.addEventListener("click",()=>{
    sliderNum<length ? nextslide() : getfirstslide();
    colorchange();
 })
 arrowleft.addEventListener("click",()=>{
    sliderNum>1 ? prevslide():getLastslide();
    colorchange();
 })
 