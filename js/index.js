// Goal: Refactor the class to include headerTransparency and headerTitleColor - one class to rule them all...
//       Remove the hover effects - let CSS handle them

class NavLink {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("mouseover", () => this.mouseOver());
    this.element.addEventListener("mouseout", () => this.mouseOut());
    window.addEventListener("scroll", () => this.changeLinkColor());
  }
  mouseOver() {
    this.element.style.borderBottom = "2px solid rgba(76, 86, 106, 0.8)";
  }
  mouseOut() {
    this.element.style.borderBottom = "none";
  }
  changeLinkColor() {
    window.scrollY >= 200 ? (this.element.style.color = "#d8dee9") : (this.element.style.color = "#2e3440");
  }
}

const linkNav = document.querySelectorAll(`.header__link[data-tab='linkNav']`).forEach(link => new NavLink(link));

const headerTransparency = document.querySelector(".header");
const headerTitleColor = document.querySelector(".header__title--link");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 /* change to suit */) {
    headerTransparency.style.backgroundColor = "#5e81ac"; // change color
    headerTransparency.style.transition = "background-color 500ms";
    headerTitleColor.style.color = "white";
    headerTitleColor.style.transition = "color 500ms";
  } else {
    headerTransparency.style.backgroundColor = "transparent";
    headerTitleColor.style.color = "#2e3440";
  }
});
