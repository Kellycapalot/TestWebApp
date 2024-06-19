document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    function showTab(target) {
        contents.forEach(content => {
            if (content.id === target) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            showTab(target);
        });
    });

    // Show the home screen by default
    showTab("home");
});
