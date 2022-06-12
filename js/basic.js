//felfelé gomb
let scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
let rootElement = document.documentElement;
scrollToTopBtn.classList.add("hidden");

function handleScroll() {
    // szkrollozható pixelek száma
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    // képernyő 35% -nál lesz látható
    if (rootElement.scrollTop / scrollTotal > 0.35) {
      // button látható
      scrollToTopBtn.classList.remove("hidden");
      scrollToTopBtn.classList.add("show-btn");
    } else {
      // button elrejt
      scrollToTopBtn.classList.remove("show-btn");
      scrollToTopBtn.classList.add("hidden");
    }
  }
  
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  //esemény kezelők
  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
  