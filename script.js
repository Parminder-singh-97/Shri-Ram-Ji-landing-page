
gsap.from("nav ul li",{
    x:30,
    delay:0.7,
    opacity:0,
    duration:1,
    stagger:1

});
gsap.from(".image2",{
    y:50,
    delay:0.7,
    opacity:0,
    duration:1,
    ease:"power1.inOut"

});
gsap.from(".image3",{
    y:100,
    opacity:0,
    delay:2.5,
    duration:2,
    ease:"power1.inOut"

});
gsap.from(".image4",{
    y:50,
    opacity:0,
    duration:1,
    ease:"power1.inOut"
});



gsap.from(".content",{

   y:100,
   delay:1.5,
   opacity:0,
   duration:1.9,
   ease:"power1.inOut"

});


var slide = document.querySelector("#checkbox");


var slidebar = document.querySelector(".slidebar");

var check = 0;

slide.addEventListener("click",  () => {
    if (check == 0) {
   
      slidebar.style.scale = "1";
    
      
      
      check = 1
    } else {
        
        slidebar.style.scale = "0";
       
      check = 0
  }
});
