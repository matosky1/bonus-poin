const imageLinks = [
    'img-1.avif',
    'image2.avif',
    'image3.avif',
    
];

let currentImageIndex = 0;

const galleryContainer = document.querySelector('.gallery-container');
const buttonsContainer = document.querySelector('.buttons');

function showImage() {
    
    const existingImage = galleryContainer.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }

    
    const newImage = document.createElement('img');
    newImage.src = imageLinks[currentImageIndex];
    newImage.alt = 'Gallery Image';
    newImage.setAttribute("id","image");

    
    galleryContainer.appendChild(newImage);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
    showImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageLinks.length) % imageLinks.length;
    showImage();
}


showImage();
