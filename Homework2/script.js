const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const btns = Array.from(document.querySelectorAll(".dot"));

const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  removeActiveClass();
  btns[slideIndex].classList.add("active");
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  removeActiveClass();
  btns[slideIndex].classList.add("active");
  updateSlider();
}
// Функция для удаление предыдущего активного класса
function removeActiveClass() {
  const activeEls = document.querySelectorAll(".active");
  activeEls.forEach((activeEl) => activeEl.classList.remove("active"));
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
// Обработка кликов по точкам
btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    slideIndex = index;
    const activeEl = document.querySelector(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
    }
    if (e.target.tagName === "DIV") {
      e.target.classList.add("active");
    }
    updateSlider();
  });
});
