const tl = gsap.timeline({
    defaults: { duration: 0.7, ease: "Power3.easeOut" },
})

tl.fromTo(
    ".img-responsive", { scale: 1.3, borderRadius: "0rem" }, {
        scale: 1,
        borderRadius: "2rem",
        delay: 0.35,
        duration: 2.5,
        ease: "elastic.out(1.5,1)",
    }
)

tl.fromTo(".Cta1", { x: -110, opacity: 0 }, { x: 0, opacity: 1 }), "<"
tl.fromTo(".Cta2", { x: 110, opacity: 0 }, { x: 0, opacity: 1 }), "<90%"
tl.fromTo(".Cta3", { y: 110, opacity: 0 }, { y: 0, opacity: 1 }), "<80%"
tl.fromTo(".Cta4", { x: -110, opacity: 0 }, { x: 0, opacity: 1 }), "<"
tl.fromTo(".Cta5", { x: 110, opacity: 0 }, { x: 0, opacity: 1 }), "<90%"
tl.fromTo(".Cta6", { y: 110, opacity: 0 }, { y: 0, opacity: 1 }), "<80%"
tl.fromTo(
        ".Cta-btn", {
            y: 110,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
        }
    ),
    "<"

// Slipt text alternative
const logo = document.querySelector(".logo")
const letters = logo.textContent.split("")

logo.textContent = ""

letters.forEach((letter) => {
    logo.innerHTML += `<span class="letter">` + letter + `</span>`
})

gsap.set(".letter", { display: "inline-block" })
gsap.fromTo(
    ".letter", { y: "100%" }, { y: 0, delay: 3, stagger: 0.05, ease: "back.out(3)" }
)