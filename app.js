// gsap.from(".box", {
//     duration: 2,
//     scale: 0.5, 
//     opacity: 0, 
//     delay: 0.5, 
//     stagger: 0.2,
//     ease: "elastic", 
//     force3D: true
//   });

let tl = gsap.timeline();

tl.from(".cover", {
    duration: 1,
    y: 1000
})
  
//   document.querySelectorAll(".box").forEach(function(box) {
//     box.addEventListener("click", function() {
//       gsap.to(".box", {
//         duration: 0.5, 
//         opacity: 0, 
//         y: 100, 
//         stagger: 0.1,
//         ease: "back.in"
//       });
//     });
//   });