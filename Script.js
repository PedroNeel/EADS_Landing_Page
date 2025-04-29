document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP + ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Logo scale on scroll
  gsap.to(".logo", {
    scale: 0.9,
    scrollTrigger: {
      trigger: "nav",
      start: "top top",
      end: "+=100",
      scrub: true,
    },
  });

  // Hero text fade-in
  gsap.from(".hero h1, .hero p, .hero .cta-primary", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Staggered card animations
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out",
  });

  // Section fade-ins
  const sections = gsap.utils.toArray("section");
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });

  // Button ripple effect
  document.querySelectorAll(".cta-primary, .cta-nav").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    });
  });

  // Intersection Observer (fallback)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
});