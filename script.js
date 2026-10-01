/* =========================================================
   PORTFOLIO PROJECT VIDEO SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const projectVideoPopup =
        document.getElementById("projectVideoPopup");

    const projectVideoPlayer =
        document.getElementById("projectVideoPlayer");

    const projectVideoSource =
        document.getElementById("projectVideoSource");

    const projectVideoTitle =
        document.getElementById("projectVideoTitle");

    const projectVideoClose =
        document.getElementById("projectVideoClose");

    const videoProjectButtons =
        document.querySelectorAll(".video-project-link");

    const projectPreviewVideos =
        document.querySelectorAll(".project-preview-video");


    /* =====================================================
       VIDEO PREVIEWS
    ===================================================== */

    projectPreviewVideos.forEach(function (video) {

        /*
         * Videos are muted and autoplay is enabled in HTML.
         * These events also provide better behaviour on desktop.
         */

        video.addEventListener("mouseenter", function () {

            video.play().catch(function () {
                // Browser may block playback.
            });

        });


        video.addEventListener("mouseleave", function () {

            /*
             * Keep the preview playing because autoplay
             * provides a continuous project preview.
             *
             * No reset is performed here so the video does
             * not jump back unexpectedly.
             */

        });

    });


    /* =====================================================
       OPEN PROJECT VIDEO
    ===================================================== */

    function openProjectVideo(videoPath, videoTitle) {

        if (
            !projectVideoPopup ||
            !projectVideoPlayer ||
            !projectVideoSource ||
            !projectVideoTitle
        ) {
            return;
        }


        projectVideoSource.src = videoPath;

        projectVideoTitle.textContent =
            videoTitle || "Project Demo";


        projectVideoPlayer.load();


        projectVideoPopup.classList.add("active");

        projectVideoPopup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add("no-scroll");


        projectVideoPlayer.play().catch(function () {
            // User can manually press play if autoplay is blocked.
        });

    }


    /* =====================================================
       PROJECT VIDEO BUTTONS
    ===================================================== */

    videoProjectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const videoPath =
                button.getAttribute("data-video");

            const videoTitle =
                button.getAttribute("data-title");


            if (!videoPath) {
                return;
            }


            openProjectVideo(
                videoPath,
                videoTitle
            );

        });

    });


    /* =====================================================
       CLOSE PROJECT VIDEO
    ===================================================== */

    function closeProjectVideo() {

        if (!projectVideoPopup) {
            return;
        }


        projectVideoPopup.classList.remove("active");

        projectVideoPopup.setAttribute(
            "aria-hidden",
            "true"
        );


        if (projectVideoPlayer) {

            projectVideoPlayer.pause();

            projectVideoPlayer.currentTime = 0;

        }


        if (projectVideoSource) {

            projectVideoSource.src = "";

        }


        if (projectVideoPlayer) {

            projectVideoPlayer.load();

        }


        document.body.classList.remove("no-scroll");

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (projectVideoClose) {

        projectVideoClose.addEventListener(
            "click",
            closeProjectVideo
        );

    }


    /* =====================================================
       CLICK OUTSIDE POPUP
    ===================================================== */

    if (projectVideoPopup) {

        projectVideoPopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    projectVideoPopup
                ) {

                    closeProjectVideo();

                }

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectVideoPopup &&
                projectVideoPopup.classList.contains("active")
            ) {

                closeProjectVideo();

            }

        }
    );


    /* =====================================================
       NAVIGATION ACTIVE STATE
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       PORTFOLIO LOADED
    ===================================================== */

    console.log(
        "Portfolio website loaded successfully."
    );

});