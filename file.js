// let dropdown=document.getElementById("dropdownId")
// let menu=document.querySelector(".dropdown-menu")
// let z=document.querySelector(".z")
// dropdown.addEventListener("mousemove",function(){
//     z.style.display="block"
// })
const boxs = document.querySelectorAll(".cardf")
const options = {}
const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("slide", el.isIntersecting)
        })
    },
    options)
boxs.forEach(box => {
    observer.observe(box)
})
const ii = document.querySelectorAll(".carder")
const yy = {}
const ers = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("slidd", el.isIntersecting)
        })
    },
    yy)
ii.forEach(box => {
    ers.observe(box)
})
const hh = document.querySelectorAll(".cards")
const fr = {}
const se = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("sliddf", el.isIntersecting)
        })
    },
    fr)
hh.forEach(box => {
    se.observe(box)
})



const sec = document.querySelectorAll(".sec-section")
const section = {}
const sect = new IntersectionObserver((entriesr) => {
        entriesr.forEach(eld => {
            eld.target.classList.toggle("secs", eld.isIntersecting)
        })
    },
    section)
sec.forEach(boxm => {
    sect.observe(boxm)
})


const d = document.querySelectorAll(".cardr")
const f = {}
const g = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            el.target.classList.toggle("slider", el.isIntersecting)
        })
    },
    f)
d.forEach(box => {
    g.observe(box)
})
const xx = document.querySelectorAll(".section")
const dd = {}
const er = new IntersectionObserver((entriesr) => {
        entriesr.forEach(eld => {
            eld.target.classList.toggle("secsr", eld.isIntersecting)
        })
    },
    dd)
xx.forEach(boxm => {
    er.observe(boxm)
})
