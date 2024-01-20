// script.js
function loadPage(page) {
    console.log(`Loading ${page} page...`);
}
function togglePersonalInfo() {
    var personalInfoBar = document.getElementById("personalInfoBar");
    personalInfoBar.classList.toggle("show-info-bar");
}
function redirectToPage() {
    // Get the selected values
    var selectedFaculty = document.getElementById("faculty").value;
    var selectedSemester = document.getElementById("semester").value;
    var selectedBatch = document.getElementById("batchNumber").value;

    // Construct the URL with selected values
    var url = "target_page.html?faculty=" + selectedFaculty + "&semester=" + selectedSemester + "&batch=" + selectedBatch;

    // Redirect to the target page
    window.location.href = url;
}


