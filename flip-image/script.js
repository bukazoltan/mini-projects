const pictures = document.querySelectorAll('.image');

const clickHandle = (e) => {
    console.log('yo');
}

pictures.forEach((picture) => {
    picture.addEventListener('click', clickHandle)
});