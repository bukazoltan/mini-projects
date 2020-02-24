const images = document.querySelectorAll('.image');

const clickHandle = (e) => {
  console.log('yo');
}

images.forEach((image) => {
  image.addEventListener('click', clickHandle)
});