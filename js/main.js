// Smooth scrolling for anchor links (if any exist)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
      document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}

// Search filter for societies
const search = document.getElementById("search-bar");
const societies = document.querySelectorAll(".societies > div");
if (search && societies.length) {
  search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase();

    societies.forEach(society => {
      const text = society.innerText.toLowerCase();
      society.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

// Back to top button
const topBtn = document.getElementById("backToTop");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Tooltip for nav icons
const icons = document.querySelectorAll(".nav-item");
const tooltip = document.getElementById("nav-tooltip");

if (icons.length && tooltip) {
  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      const text = icon.getAttribute("data-description");
      tooltip.textContent = text;
      tooltip.style.opacity = "1";

      const rect = icon.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + "px";
      tooltip.style.top = rect.bottom + 10 + "px";
      tooltip.style.transform = "translateX(-50%)"; // centers tooltip
    });

    icon.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
      tooltip.textContent = "";
    });
  });
}
