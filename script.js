```javascript
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Menutup menu setelah pengguna memilih halaman
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Buka menu navigasi"
            );

            menuToggle.textContent = "☰";
        });

    });

    // Menutup menu jika pengguna mengeklik di luar navbar
    document.addEventListener("click", function (event) {

        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {
            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Buka menu navigasi"
            );

            menuToggle.textContent = "☰";
        }

    });

}


// =========================
// AUTOMATIC COPYRIGHT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// SIMPLE SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".product-card, .value-card, .vm-card, .about-content, .about-image"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, currentObserver) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    currentObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {

        element.classList.add("reveal");
        observer.observe(element);

    });

}
```
