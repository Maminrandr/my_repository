gsap.registerPlugin(ScrollTrigger);

gsap.from(".about", {
    opacity: 0.1,
    y: 180,
    duration: 3,
    ease: "elastic.out(0.8, 4)",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%", 
        end: "top 50%",
        scrub: 3,
    }
});
gsap.from(".skill", {
    opacity: 0.1,
    y: 150,
    duration: 3,
    ease: "elastic.out(0.8, 4)",
    scrollTrigger: {
        trigger: ".skill",
        start: "top 80%", 
        end: "top 50%",
        scrub: 3,
    }
});
gsap.from(".project", {
    opacity: 0.1,
    y: 200,
    duration: 3,
    ease: "elastic.out(0.8, 4)",
    scrollTrigger: {
        trigger: ".project",
        start: "top 80%", 
        end: "top 50%",
        scrub: 3,
    }
});
gsap.from(".contact", {
    opacity: 0.1,
    y: 150,
    duration: 3,
    ease: "elastic.out(0.8, 4)",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%", 
        end: "top 50%",
        scrub: 3,
    }
});


