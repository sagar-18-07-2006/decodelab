
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");
const themeStatus = document.getElementById("themeStatus");
const updateText = document.getElementById("updateText");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const filterButtons = document.querySelectorAll(".filter-button");
const projectItems = document.querySelectorAll(".project-item");
const cardCount = document.getElementById("cardCount");
const visibleCount = document.getElementById("visibleCount");

let likes = 0;

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("show");
        const isOpen = mainNav.classList.contains("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "CLOSE" : "MENU";
    });
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        themeToggle.textContent = isLight ? "DARK MODE" : "LIGHT MODE";
        if (themeStatus) themeStatus.textContent = isLight ? "Light" : "Dark";
    });
}

if (updateText) {
    updateText.addEventListener("click", function () {
        heroTitle.textContent = "LOREM IPSUM UPDATED";
        heroText.textContent = "Dynamic content update is working while the architectural base theme remains unchanged.";
    });
}

if (likeButton) {
    likeButton.addEventListener("click", function () {
        likes += 1;
        likeCount.textContent = likes;
    });
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;
        let visible = 0;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });
        button.classList.add("active");

        projectItems.forEach(function (card) {
            const cardCategory = card.dataset.category;
            const shouldShow = selectedCategory === "all" || selectedCategory === cardCategory;
            card.classList.toggle("hidden", !shouldShow);
            if (shouldShow) visible += 1;
        });

        if (cardCount) cardCount.textContent = visible;
        if (visibleCount) visibleCount.textContent = visible + " modules are visible in the same base grid theme.";
    });
});


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const subjectValue = subjectInput.value.trim();
        const messageValue = messageInput.value.trim();
        let isValid = true;

        if (nameValue.length < 3) {
            nameError.textContent = "Name must be at least 3 characters.";
            isValid = false;
        }

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        if (subjectValue.length < 5) {
            subjectError.textContent = "Subject must be at least 5 characters.";
            isValid = false;
        }

        if (messageValue.length < 10) {
            messageError.textContent = "Message must be at least 10 characters.";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Success! Lorem ipsum form submitted.";
            contactForm.reset();
        }
    });
}
