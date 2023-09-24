'use strict'
//email copying
const email = document.querySelectorAll(".contacts-email");
//const email = document.querySelector(".contacts-email__text");
//const emailTitle = document.querySelector(".contacts-email__title");

email.forEach( (element) => {
  element.addEventListener("click", (event) => {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = element.querySelector(".contacts-email__text").textContent;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  
    element.querySelector(".contacts-email__title").style.opacity = "100%";

    if(window.innerWidth < 768) {
      setInterval( () => { element.querySelector(".contacts-email__title").style.opacity = "0%" }, 2000);
    }
  });

  window.addEventListener("mousemove", (event) => {
    element.querySelector(".contacts-email__title").style.opacity = "0%";
  });
});

//mobile hamburger
const hamburgerButton = document.querySelector(".hamburger__button");
const hamburger = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", (event) => {
  if(!hamburgerButton.classList.contains("hamburger__button_pressed")) {
    hamburgerButton.classList.add("hamburger__button_pressed");
    hamburger.classList.add("hamburger_opened");
  } else {
    hamburgerButton.classList.remove("hamburger__button_pressed");
    hamburger.classList.remove("hamburger_opened");
  }
});

//header hide
const header = document.querySelector(".header");
let lastScroll = 0;
document.body.onscroll = function() {
  const currentScroll = window.scrollY;
  if(currentScroll - lastScroll > 0 && !header.classList.contains("header_hidden"))
  {
    header.classList.add("header_hidden");

    if(hamburger.classList.contains("hamburger_opened")) {
      hamburgerButton.classList.remove("hamburger__button_pressed");
      hamburger.classList.remove("hamburger_opened");
    }
  } else if (currentScroll - lastScroll < 0 && header.classList.contains("header_hidden")) {
    header.classList.remove("header_hidden");
  }
  lastScroll = currentScroll;
}

//Swiper
const worksSlider = document.querySelector(".works-slider .swiper");

const swiper = new Swiper(worksSlider, {
  observer: true,
  observeParents: true,
  spaceBetween: 85,
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,

  navigation: {
    nextEl: '.works-slider-button-next',
    prevEl: '.works-slider-button-prev',
  },

  breakpoints: {
    1199: {
      spaceBetween: 85,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 94,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 126,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 147,
      slidesPerView: 1,
    },
    320: {
      spaceBetween: 147,
      slidesPerView: 1,
    },
  }
});

//Pot animation
function changeStateOfSection(elements, prefix, isOpening)
{
  elements.forEach(item => {
    if (isOpening) {
      if(item.classList.contains(prefix + "-front")) {
        item.classList.add(prefix + "-front_opened");
      } else {
        item.classList.add(prefix + "-back_opened");
      }
    } else {
      if(item.classList.contains(prefix + "-front")) {
        item.classList.remove(prefix + "-front_opened");
      } else {
        item.classList.remove(prefix + "-back_opened");
      }
    }
  });
}

const pot = document.querySelectorAll('[class*="fifth-section__pot"]');
const foam = document.querySelectorAll('[class*="fifth-section__foam"]');
const gypsum = document.querySelectorAll('[class*="fifth-section__gypsum"]');

const plant = document.querySelector('.fifth-section');

const leftText = document.querySelector('.fifth-section__first-wrapper');
const rightText = document.querySelector('.fifth-section__second-wrapper');
const mobileText = document.querySelector('.fifth-section__mobile-text-wrapper');

const options = {
  rootMargin: '500% 0% -70% 0%'
};

const potCallback = function(entries, callback) {
  entries.forEach( (entry) => {
    const { isIntersecting } = entry;

    if(isIntersecting){
      changeStateOfSection(foam, "fifth-section__foam", true);
      changeStateOfSection(gypsum, "fifth-section__gypsum", true);
      changeStateOfSection(pot, "fifth-section__pot", true);

      mobileText.classList.remove("fifth-section__mobile-text-wrapper_closed");

      leftText.classList.remove("fifth-section__first-wrapper_closed");
      rightText.classList.remove("fifth-section__second-wrapper_closed");
    } else {
      changeStateOfSection(foam, "fifth-section__foam", false);
      changeStateOfSection(gypsum, "fifth-section__gypsum", false);
      changeStateOfSection(pot, "fifth-section__pot", false);

      mobileText.classList.add("fifth-section__mobile-text-wrapper_closed");

      leftText.classList.add("fifth-section__first-wrapper_closed");
      rightText.classList.add("fifth-section__second-wrapper_closed");
    }
  });
}

const potObserver = new IntersectionObserver(potCallback, options);
const potTarget = plant;

potObserver.observe(potTarget);

//video replaying

const video = document.querySelector(".seventh-section__video");
const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(vid => {
    if(vid.isIntersecting) {
      video.currentTime = "0";
      video.play();
    } else {
      video.pause();
    }
  });
});

videoObserver.observe(video);