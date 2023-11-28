window.addEventListener('load', () => {
  renderPhoto();
});

async function fetchPhotos() {
  const KEY = "BqccJsrfTmovmsaZAxmNYEOVUJZqOrOvHS0CDpNqO20";

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${KEY}`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}


async function renderPhoto() {
  const photo = await fetchPhotos();
  if (photo) {
      const photoBox = document.querySelector('.photoBox');
      const img = document.createElement('img');
      img.classList.add('image');

      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      photoBox.appendChild(img);

      const imagePhotographerNameDiv = document.querySelector('.image_photographer-name');
      imagePhotographerNameDiv.textContent = `${photo.user.name}`;

      const imageLikesCounterSpan = document.querySelector('.image_likes-counter');
      imageLikesCounterSpan.textContent = `${photo.likes}`;

  }
}

const counterButton = document.querySelector('.loadBtn');
counterButton.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    const likesCounter = document.querySelector('.image_likes-counter');
    const currentCounter = parseInt(likesCounter.textContent, 10);
    likesCounter.textContent = currentCounter + 1;
}