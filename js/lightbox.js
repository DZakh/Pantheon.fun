const page = document.querySelector(".page");

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery__img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.currentSrc;
    if (lightbox.firstChild)
      lightbox.removeChild(lightbox.firstChild);
    lightbox.appendChild(img);
    page.style.overflow = "hidden";
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget)
    return;
  lightbox.classList.remove('active');
  page.style.overflow = "auto";
})