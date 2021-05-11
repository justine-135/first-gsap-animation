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

tl.to("p", {
    y: -7,
    duration: 1,
    stagger: 0.75
})

tl.to(".slider",{
    duration: 1,
    y: "-100%"
})

tl.to(".intro",{
    duration: 1,
    y: "-100%",
    delay: 0.3
}, "-=1")
