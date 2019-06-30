class ScrollEffects {
  constructor(element) {
    this.element = element;
    this.headerBackground = this.element.querySelector(".header-container");
    this.titleColor = this.headerBackground.querySelector(".header__title");
    this.linkNav = this.element.querySelectorAll(`.nav__link`).forEach(link => new NavLink(link));
    window.addEventListener("scroll", () => this.scrollEffects());
  }
  scrollEffects() {
    if (window.scrollY >= 10) {
      this.headerBackground.style.backgroundColor = "#5e81ac";
      this.headerBackground.style.transition = "background-color 500ms";
      this.titleColor.style.color = "#e5e9f0";
      this.titleColor.style.transition = "color 300ms";
    } else {
      this.headerBackground.style.backgroundColor = "transparent";
      this.headerBackground.style.transition = "background-color 500ms";
      this.titleColor.style.color = "#2e3440";
    }
  }
}

class NavLink {
  constructor(element) {
    this.element = element;
    window.addEventListener("scroll", () => this.scrollEffects());
  }
  scrollEffects() {
    window.scrollY >= 10 ? (this.element.style.color = "#d8dee9") : (this.element.style.color = "#2e3440");
  }
}

const scroll = document.querySelectorAll(".container-page").forEach(scroll => new ScrollEffects(scroll));

const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    nav.classList.toggle("nav__active");
  });
};

navSlide();
