
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };
  
  showMenu("nav-toggle", "nav-menu");

  const navLink = document.querySelectorAll(".nav-link");
  
  function changeActiveNavLink(hash) {
    navLink.forEach((n) => n.classList.remove("active-link"));
    const activeLink = document.querySelector(`[href="${hash}"]`);
    activeLink.classList.add("active-link");

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  }
  

  const hash = window.location.hash;
  
  if (hash) {
    const activeLink = document.querySelector(`[href="${hash}"]`);
    activeLink.classList.add("active-link");
  } else {
    navLink[0].classList.add("active-link");
  }
  

  const scrollLink = document.querySelectorAll("a[href^='#']");
  
  scrollLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      const headerHeight = document.getElementById("header").offsetHeight;
      const position = target.offsetTop - headerHeight;
  

      window.location.hash = href;

      changeActiveNavLink(href);
  
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });
  

  function scroll() {
    const header = document.getElementById("header");
    const scrollTop = document.getElementById("scroll-top");
    const scrollDown = document.getElementById("scroll-down");
  
    const scrollY = window.scrollY;
  
    if (scrollY >= 200) {
      scrollTop.classList.add("show");
      scrollDown.classList.remove("show");
    } else {
      scrollTop.classList.remove("show");
      scrollDown.classList.add("show");
    }
  
    if (scrollY >= 550) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }
  
  window.addEventListener("scroll", scroll);

  const slider = (container, wrapper, items, autoPlay = false) => {
    let slideIndex = 0;
    const margin = 30;
  
    const pagination = container.querySelector(".pagination");
    const nextBtn = container.querySelector(".next");
    const prevBtn = container.querySelector(".prev");
  
    function setDefaultStyle() {
      container.style.overflow = "hidden";
      wrapper.style.display = "flex";
      wrapper.style.transition = "transform 0.5s ease-in-out";
    }
  
    function setItemWidth() {
      const containerWidth = container.offsetWidth;
      items.forEach((data) => {
        data.style.width = `${containerWidth}px`;
        data.style.marginRight = `${margin}px`;

        if (data === items[items.length - 1]) {
          data.style.marginRight = "0";
        }
      });
    }
  
    function addPaginationBullet() {

      pagination.innerHTML = "";
  
      items.forEach((data, i) => {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");

        bullet.setAttribute("data-index", `${i}`);
        pagination.appendChild(bullet);
  

        bullet.addEventListener("click", () => {
          slideIndex = i;
          updateSlider();
        });
      });
    }
  
    function updateSlider() {
      wrapper.style.transform = `translateX(-${
        slideIndex * (items[0].offsetWidth + margin)
      }px)`;
  
      const bullets = container.querySelectorAll(".bullet");
      bullets.forEach((bullet, i) => {
        if (i === slideIndex) {
          bullet.classList.add("active");
        } else {
          bullet.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      if (slideIndex === items.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      updateSlider();
    }
  
    function prevSlide() {
      if (slideIndex === 0) {
        slideIndex = items.length - 1;
      } else {
        slideIndex--;
      }
      updateSlider();
    }
  
    function initSlide() {
      setDefaultStyle();
      setItemWidth();
      addPaginationBullet();
      updateSlider();
    }
  
    window.addEventListener("resize", () => {
      setItemWidth();
      updateSlider();
    });
  

    let xDown = null;
    let yDown = null;
  
    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    }
  
    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
  
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
  
      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;
  
      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;
  
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
  
      xDown = null;
      yDown = null;
    }
  
    wrapper.addEventListener("touchstart", handleTouchStart, false);
    wrapper.addEventListener("touchmove", handleTouchMove, false);
  

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", nextSlide);
      prevBtn.addEventListener("click", prevSlide);
    }
  

    if (autoPlay) {
      setInterval(() => {
        nextSlide();
      }, 3000);
    }
  
    initSlide();
  };
  

  const worksContainer = document.querySelector(".works-container");
  const worksWrapper = document.querySelector(".works-wrapper");
  const worksData = document.querySelectorAll(".works-data");
  
  const worksFilter = document.getElementById("works-filter");
  
  async function filterWorks(category) {
    worksData.forEach((data) => {
      if (category === "all") {
        data.classList.add("active");
      } else {
        if (data.getAttribute("data-category") === category) {
          data.classList.add("active");
        } else {
          data.classList.remove("active");
        }
      }
    });
  
    const activeWorks = document.querySelectorAll(".works-data.active");
    slider(worksContainer, worksWrapper, activeWorks);
  }
  

  worksFilter.addEventListener("change", (e) => {
    const category = e.target.value;
    filterWorks(category);
  });

  window.addEventListener("load", () => {
    const category = worksFilter.value;
    filterWorks(category);
  });
  

  const testimonialContainer = document.querySelector(".testimonial-container");
  const testimonialWrapper = document.querySelector(".testimonial-wrapper");
  const testimonialData = document.querySelectorAll(".testimonial-data");
  
  slider(testimonialContainer, testimonialWrapper, testimonialData, true);
  
  

  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  

    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const subject = form.querySelector('input[name="subject"]');
    const message = form.querySelector('textarea[name="message"]');
  
    const errors = [];
  
    const addError = (input, message) => {
      const formControl = input.classList.add("error");
      const small = input.nextElementSibling;
      small.innerText = message;
    }
  
    const removeError = (input) => {
      const formControl = input.classList.remove("error");
      const small = input.nextElementSibling;
      small.innerText = "";
    }
  
    if (name.value === "") {
      addError(name, "Name is required");
      errors.push(name);
    } else {
      removeError(name);
    }
  
    if (email.value === "") {
      addError(email, "Email is required");
      errors.push(email);
    } else {
      removeError(email);
    }
  
    if (subject.value === "") {
      addError(subject, "Subject is required");
      errors.push(subject);
    } else {
      removeError(subject);
    }
  
    if (message.value === "") {
      addError(message, "Message is required");
      errors.push(message);
    } else {
      removeError(message);
    }
  
    if (errors.length === 0) {
      form.reset();
      alert("Your message has been sent!");
    } else {
      errors[0].focus();
    }
  });
