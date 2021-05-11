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

document.querySelector("button").addEventListener('click', ()=>{
    document.querySelector("ul").classList.toggle("add");
})