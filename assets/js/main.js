

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
   * Easy on scroll event listener 
   */
 const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

/**
   * Navbar links active state on scroll
   */
 let menuLinks = select('.j-menu .scrollto', true)
 const menuLinkActive = () => {
   let position = window.scrollY + 200
   menuLinks.forEach(menuLink => {
     if (!menuLink.hash) return
     let section = select(menuLink.hash)
     if (!section) return
     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        menuLink.classList.add('is-active')
     } else {
        menuLink.classList.remove('is-active')
     }
   })
 }
 window.addEventListener('load', menuLinkActive)
 onscroll(document, menuLinkActive)


const scrollto = (el) => {
  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos,
    behavior: "smooth",
  });
};

on("click", ".burger-btn", function (e) {
  select(".j-menu").classList.toggle("collapsed");
  document.body.style.overflow = "hidden"
});

on("click", ".j-close", function (e) {
  select(".j-menu").classList.toggle("collapsed");
  document.body.style.overflow = "scroll"
});

on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('.j-menu')
      if (body.classList.contains('collapsed')) {
        body.classList.remove('collapsed')
        let navbarToggle = select('.burger-btn')
        navbarToggle.classList.toggle('collapsed')
        document.body.style.overflow = "scroll";
      }
      scrollto(this.hash)
    }
  }, true)

/**
 * Scroll with ofset on page load with hash links in the url
 */


window.addEventListener("load", () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

const typed = select(".professions");
if (typed) {
  let typed_strings = typed.getAttribute("data-professions");
  typed_strings = typed_strings.split(",");
  new Typed(".professions", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

$('.parallax-window').parallax({
  androidFix: true,
  iosFix: true,
  imageSrc: "/resources/images/me.png",
});

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
		cover      : true,
		heightRatio: 0.5,
  } ).mount();
} );