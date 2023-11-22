document.addEventListener("DOMContentLoaded", function () {
    // Add interactivity to the submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        // You can add code here to handle form submission or display a success message.
        alert("Form submitted successfully!");
    });

    // Add a simple animation to the contact form
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("mouseover", function () {
        contactForm.style.transform = "scale(1.1)";
    });
    contactForm.addEventListener("mouseout", function () {
        contactForm.style.transform = "scale(1)";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Add interactivity to the reports page
    const reportSections = document.querySelectorAll(".report");
    reportSections.forEach(function (reportSection) {
        reportSection.addEventListener("click", function () {
            // Add code here to handle clicks on report sections, e.g., open report in a new tab.
            const reportLink = reportSection.querySelector("a");
            if (reportLink) {
                window.open(reportLink.href, "_blank");
            }
        });
    });
});

