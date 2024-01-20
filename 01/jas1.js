function loadSubjects() {
    var semesterSelect = document.getElementById('semesterSelect');
    var selectedSemester = semesterSelect.value;

    var subjectDetailsContainer = document.getElementById('subjectDetails');
    subjectDetailsContainer.innerHTML = ""; // Clear previous details

    // Simulated data - Replace this with your actual data or fetch from a server
    var subjects = [
        { name: 'Subject 1', details: 'Details for Subject 1', semester: '1' },
        { name: 'Subject 2', details: 'Details for Subject 2', semester: '1' },
        { name: 'Subject 3', details: 'Details for Subject 3', semester: '2' },
        { name: 'Subject 4', details: 'Details for Subject 4', semester: '2' },
        // Add more subjects for each semester
    ];

    // Populate the semester dropdown
    var semesterOptions = document.getElementById('semesterSelect');
    var uniqueSemesters = [...new Set(subjects.map(subject => subject.semester))];

    uniqueSemesters.forEach(function(semester) {
        var option = document.createElement('option');
        option.value = semester;
        option.text = 'Semester ' + semester;
        semesterOptions.add(option);
    });

    // Display details for selected semester
    var selectedSubjects = subjects.filter(function(subject) {
        return subject.semester == selectedSemester;
    });

    if (selectedSubjects.length > 0) {
        selectedSubjects.forEach(function(subject) {
            var subjectDiv = document.createElement('div');
            subjectDiv.innerHTML = '<h3>' + subject.name + '</h3><p>' + subject.details + '</p>';
            subjectDetailsContainer.appendChild(subjectDiv);
        });
    } else {
        subjectDetailsContainer.innerHTML = '<p>No subjects available for selected semester.</p>';
    }
}

// Initial load on page load
loadSubjects();