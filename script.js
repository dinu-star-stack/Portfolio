// ===============================
// Attendance Management System
// ===============================

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

function showAttendanceImage() {
    popupImage.src = projectImages[currentImage];

    imageCounter.textContent =
        (currentImage + 1) + " / " + projectImages.length;
}

if (viewProjectBtn && projectPopup) {

    viewProjectBtn.addEventListener("click", function (event) {
        event.preventDefault();

        projectPopup.classList.add("active");

        currentImage = 0;
        showAttendanceImage();
    });
}

if (popupClose) {
    popupClose.addEventListener("click", function () {
        projectPopup.classList.remove("active");
    });
}

if (nextImage) {
    nextImage.addEventListener("click", function () {

        currentImage++;

        if (currentImage >= projectImages.length) {
            currentImage = 0;
        }

        showAttendanceImage();
    });
}

if (previousImage) {
    previousImage.addEventListener("click", function () {

        currentImage--;

        if (currentImage < 0) {
            currentImage = projectImages.length - 1;
        }

        showAttendanceImage();
    });
}


// ===============================
// Student Management System
// ===============================

const viewStudentProjectBtn =
    document.getElementById("viewStudentProjectBtn");

const studentProjectImages = [
    "images/login.png",
    "images/course.png",
    "images/student.png",
    "images/lecturer.png",
    "images/batch.png"
];

let currentStudentImage = 0;


// Create Student Management popup
if (viewStudentProjectBtn) {

    viewStudentProjectBtn.addEventListener("click", function (event) {

        event.preventDefault();

        currentStudentImage = 0;

        const studentPopup = document.createElement("div");

        studentPopup.className = "project-popup active";

        studentPopup.innerHTML = `
            <div class="popup-content">

                <button class="popup-close student-popup-close">
                    &times;
                </button>

                <img id="studentPopupImage"
                     src="${studentProjectImages[0]}"
                     alt="Student Management System Screenshot">

                <div class="popup-controls">

                    <button id="studentPreviousImage">
                        ←
                    </button>

                    <span id="studentImageCounter">
                        1 / 5
                    </span>

                    <button id="studentNextImage">
                        →
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(studentPopup);


        const studentPopupImage =
            document.getElementById("studentPopupImage");

        const studentImageCounter =
            document.getElementById("studentImageCounter");

        const studentPreviousImage =
            document.getElementById("studentPreviousImage");

        const studentNextImage =
            document.getElementById("studentNextImage");

        const studentPopupClose =
            studentPopup.querySelector(".student-popup-close");


        function showStudentImage() {

            studentPopupImage.src =
                studentProjectImages[currentStudentImage];

            studentImageCounter.textContent =
                (currentStudentImage + 1) +
                " / " +
                studentProjectImages.length;
        }


        studentNextImage.addEventListener("click", function () {

            currentStudentImage++;

            if (
                currentStudentImage >=
                studentProjectImages.length
            ) {
                currentStudentImage = 0;
            }

            showStudentImage();
        });


        studentPreviousImage.addEventListener("click", function () {

            currentStudentImage--;

            if (currentStudentImage < 0) {
                currentStudentImage =
                    studentProjectImages.length - 1;
            }

            showStudentImage();
        });


        studentPopupClose.addEventListener("click", function () {

            studentPopup.remove();

        });


        // Close popup when clicking outside the popup content
        studentPopup.addEventListener("click", function (event) {

            if (event.target === studentPopup) {
                studentPopup.remove();
            }

        });

    });
}


// ===============================
// Portfolio
// ===============================

console.log("Portfolio website loaded successfully.");