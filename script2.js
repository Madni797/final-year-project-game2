// ===============================
// LAHORE SPEEDSTER RIDE
// script.js
// ===============================

// Navbar Background on Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,0.90)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Hero Fade Animation
// ===============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {

        hero.style.transition = "1.2s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0px)";

    }, 300);

});

// ===============================
// Watch Trailer Button
// ===============================

const trailer = document.querySelector(".trailer");

trailer.addEventListener("click", function(e){

    e.preventDefault();

    const url = prompt("Paste your YouTube Trailer Link");

    if(url){

        window.open(url,"_blank");

    }

});

// ===============================
// Feature Card Animation
// ===============================

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});

// ===============================
// Vehicle Hover Effect
// ===============================

const vehicles = document.querySelectorAll(".vehicle-card");

vehicles.forEach(vehicle=>{

vehicle.addEventListener("mouseenter",()=>{

vehicle.style.transform="translateY(-15px)";

vehicle.style.transition=".4s";

});

vehicle.addEventListener("mouseleave",()=>{

vehicle.style.transform="translateY(0px)";

});

});

// ===============================
// Team Animation
// ===============================

const members=document.querySelectorAll(".member");

members.forEach(member=>{

member.addEventListener("mouseenter",()=>{

member.style.transform="scale(1.05)";

member.style.transition=".3s";

});

member.addEventListener("mouseleave",()=>{

member.style.transform="scale(1)";

});

});

// ===============================
// Hero Background Zoom
// ===============================

const bg=document.querySelector(".hero-background img");

let zoom=1;

setInterval(()=>{

zoom+=0.0005;

bg.style.transform=`scale(${zoom})`;

if(zoom>=1.1){

zoom=1;

}

},30);

// ===============================
// Typing Effect
// ===============================

const heading=document.querySelector(".hero h2");

const text="Experience Lahore Like Never Before";

let i=0;

heading.innerHTML="";

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0E8B3D";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Footer Year
// ===============================

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${year} Lahore Speedster Ride | All Rights Reserved`;

}