// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Close menu when clicking a link (mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navToggle.classList.remove("open");
      nav.classList.remove("open");
    }
  });
}

// Scroll reveal animations that reset when element leaves viewport
const animated = document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window && animated.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          // Remove class so animation can replay when scrolled back
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animated.forEach((el) => observer.observe(el));
} else {
  // Fallback if IntersectionObserver not supported
  animated.forEach((el) => el.classList.add("in-view"));
}

// Prevent default submission for demo forms
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.matches(".newsletter-form, .contact-form, .interest-form")) {
    e.preventDefault();
  }
});

