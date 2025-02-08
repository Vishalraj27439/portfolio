function menu() {
  const menuIcon = document.querySelector(".menubar");
  const nav = document.querySelector(".nav");
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("hide");
    if (nav.classList.contains("hide")) {
      menuIcon.src = "images/menuBar.png";
    } else {
      menuIcon.src = "images/close.png";
    }
  });
}
menu();

function page1() {
  var tl = gsap.timeline();
  tl.from(".logo,.nav li", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.3,
    stagger: 0.1,
  });

  tl.from(".hero-title", {
    x: -100,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(".hero-description", {
    x: -200,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(".social-links", {
    x: -200,
    duration: 0.2,
    opacity: 0,
  });
  tl.from(".hero-button", {
    opacity: 0,
    duration: 0.1,
  });
  tl.from(
    ".profile-image",
    {
      opacity: 0,
      y: 30,
      duration: 0.5,
    },
    "-=1"
  );
}
page1();

function contactPage() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-page",
      scroller: "body",
      scrub: 2,
      start: "top 50%",
      end: "top 0%",
    },
  });
  tl2.from(
    ".contact-page-container img",
    {
      x: -100,
      opacity: 0,
    },
    "contact"
  );
  tl2.from(
    ".form-container",
    {
      x: 100,
      opacity: 0,
    },
    "contact"
  );
}
contactPage();
