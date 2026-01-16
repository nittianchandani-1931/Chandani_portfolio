// ================= MENU TOGGLE =================
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ================= GSAP INIT =================
gsap.registerPlugin(ScrollTrigger);

// ================= NAVBAR ANIMATION =================
gsap.from("nav", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from("nav ul li", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  delay: 0.3,
  ease: "power3.out",
});
// ========== Header Animation ==========

// ---------- SPLIT FUNCTIONS ----------
function splitChars(el) {
  const text = el.textContent;
  el.innerHTML = "";

  [...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    el.appendChild(span);
  });
}

function splitWords(el) {
  const words = el.textContent.split(" ");
  el.innerHTML = "";

  words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + "\u00A0";
    span.style.display = "inline-block";
    el.appendChild(span);
  });
}

// ---------- SPLIT TEXT ----------
splitChars(document.getElementById("hello"));
splitChars(document.getElementById("im"));
splitChars(document.getElementById("name"));
splitWords(document.getElementById("role"));

// ---------- GSAP ANIMATION ----------
const tl = gsap.timeline();

tl.from("#hello span", {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power4.out"
})
.from(["#im span", "#name span"], {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power4.out"
}, "-=0.4")
.from("#role span", {
  y: 40,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.3");


// ================= PROJECT CARDS (BONUS) =================
gsap.from(".project-list div", {
  scrollTrigger: {
    trigger: ".project-list",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
});

// ================= SKILL BARS FILL =================

gsap.from(".about-col-1 img", {
  scrollTrigger: {
    trigger: ".about-col-1",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  rotateY: 10,
  scale: 0.9,
  duration: 1.2,
  ease: "power4.out",
});
gsap.from(".skill-bar .fill", {
  width: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%",
    toggleActions: "play none none none"
  }
});