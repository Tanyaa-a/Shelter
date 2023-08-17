
(function () {
  const burgerItem = document.querySelector(".header__burger");
  const menu = document.getElementById("main__menu");
  const body = document.querySelector("body");
  let overlay;

  burgerItem.addEventListener("click", () => {
    burgerItem.classList.toggle("rotate");
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
      overlay = createOverlay(); 
      body.appendChild(overlay); 
      body.style.overflow = 'hidden'; 
    } else {
      removeOverlay();
      body.style.overflow = ''; 
    }
  });

  body.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__burger") && !menu.contains(event.target)) {
      menu.classList.remove("open");
      burgerItem.classList.remove("rotate");
      removeOverlay(); 
      body.style.overflow = ''; 
    }
  });

  window.addEventListener("scroll", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      burgerItem.classList.remove("rotate");
      removeOverlay();
      body.style.overflow = ''; 
    }
  });

  function createOverlay() {
    let overlayElement = document.createElement('div');
    overlayElement.style.position = 'fixed';
    overlayElement.style.backgroundColor = 'rgba(41,41,41,0.6)';
    overlayElement.style.left = 0;
    overlayElement.style.right = 0;
    overlayElement.style.top = 0;
    overlayElement.style.bottom = 0;
    overlayElement.style.zIndex = '1';
    overlayElement.style.display = 'flex';
    return overlayElement;
  }

  function removeOverlay() {
    if (overlay) { 
      overlay.remove();
      overlay = null; 
    }
  }
})();
