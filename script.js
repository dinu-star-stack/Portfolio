const viewProjectBtn = document.getElementById("viewProjectBtn");
const projectPopup = document.getElementById("projectPopup");
const popupClose = document.getElementById("popupClose");
const popupImage = document.getElementById("popupImage");
const previousImage = document.getElementById("previousImage");
const nextImage = document.getElementById("nextImage");
const imageCounter = document.getElementById("imageCounter");

const projectImages = [
    "images/attendance-login.png",
    "images/attendance-admin.png",
    "images/attendance-lecturer.png",
    "images/attendance-student.png",
    "images/attendance-qr.png"
];

let currentImage = 0;

if(viewProjectBtn && projectPopup){

viewProjectBtn.addEventListener("click", function(event) {
        event.preventDefault();
        projectPopup.classList.add("active");
    });
}

viewProjectBtn.addEventListener("click", function (event) {
    event.preventDefault();

    projectPopup.classList.add("active");

    currentImage = 0;

    showImage();
});

popupClose.addEventListener("click", function () {
    projectPopup.classList.remove("active");
});

function showImage() {
    popupImage.src = projectImages[currentImage];

    imageCounter.textContent =
        (currentImage + 1) + " / " + projectImages.length;
}

nextImage.addEventListener("click", function () {
    currentImage++;

    if (currentImage >= projectImages.length) {
        currentImage = 0;
    }

    showImage();
});

previousImage.addEventListener("click", function () {
    currentImage--;

    if (currentImage < 0) {
        currentImage = projectImages.length - 1;
    }

    showImage();
});

// Portfolio JavaScript

console.log("Portfolio website loaded successfully.");