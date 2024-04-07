/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*===============================readMore functionality ======================================= */
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more");
  const articleContent = document.querySelector(".article-content");
  const originalText = articleContent.textContent;
  const maxLength = 135; // Maximum number of words to show initially

  // Function to truncate text to a specified length of words
  function truncateText(text, maxLength) {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ");
    }
    return text;
  }

  // Truncate the text initially
  articleContent.textContent = truncateText(originalText, maxLength);

  readMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    articleContent.textContent = articleContent.classList.contains("expanded")
      ? truncateText(originalText, maxLength)
      : originalText;
    articleContent.classList.toggle("expanded");

    if (articleContent.classList.contains("expanded")) {
      readMoreBtn.textContent = "Read Less";
    } else {
      readMoreBtn.textContent = "Read More";
    }
  });
});

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*================================= sticky navbar ===================================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*================================= remove toggle icon and navbar ===================================*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*================================= scroll reveal ===================================*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*================================= typed js ===================================*/

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Software Engineer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*===================== Progress Bar Section =============*/

const mainFn = () => {
  const progress = document.querySelector(".progress-bars-wrapper");
  const progressBarPercents = [85, 80, 86, 90, 75];

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

window.addEventListener("scroll", () => {
  mainFn();
});

/*-----Footer--------*/
const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;
