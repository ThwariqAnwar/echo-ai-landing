const sections = document.querySelectorAll("section");

const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.opacity = "1";
});

window.addEventListener("mouseout", () => {
  glow.style.opacity = "0";
});

window.addEventListener("load", () => {
  const card = document.querySelector(".dashboard-card");
  const bars = document.querySelectorAll(".bar span");
  const status = document.querySelector(".status");
  const loadingText = document.querySelector(".loading-text");

  // Step 1: show loading
  setTimeout(() => {
    loadingText.style.opacity = "1";
  }, 300);

  // Step 2: animate bars
  setTimeout(() => {
    bars.forEach(bar => {
      bar.style.transition = "width 1.4s ease";
      bar.style.width = bar.dataset.width;
    });
  }, 1200);

  // Step 3: reveal status
  setTimeout(() => {
    status.style.opacity = "1";
    status.style.transition = "opacity 0.6s ease";
    loadingText.style.display = "none";
    card.classList.remove("loading");
  }, 2600);
});
