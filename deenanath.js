document.addEventListener('DOMContentLoaded', function () {
    const specialtyFilter = document.getElementById('ctl00_ContentPlaceHolder1_ddSpeciality');
    const nameFilter = document.getElementById('ctl00_ContentPlaceHolder1_txtSearchBox');
    const doctors = document.querySelectorAll('.doctor_detail_box');

    function filterDoctors() {
        const selectedSpecialty = specialtyFilter.value.toUpperCase();
        const searchName = nameFilter.value.trim().toUpperCase();

        doctors.forEach(function (doctor) {
            const doctorName = doctor.querySelector('.detail').textContent.toUpperCase();
            const doctorSpecialty = doctor.querySelector('.specilaties').textContent.toUpperCase();

            console.log('Selected Specialty:', selectedSpecialty);
            console.log('Doctor Specialty:', doctorSpecialty);

            let nameMatches = true;
            let specialtyMatches = true;

            // Check if the doctor's name matches the search input
            if (searchName) {
                nameMatches = doctorName.includes(searchName);
            }

            // Check if the doctor's specialty matches the selected specialty
            if (selectedSpecialty && selectedSpecialty !== '0') {
                specialtyMatches = doctorSpecialty.includes(selectedSpecialty);
            }

            // Show the doctor only if both conditions are met
            if (nameMatches && specialtyMatches) {
                doctor.parentElement.style.display = '';
            } else {
                doctor.parentElement.style.display = 'none';
            }
        });
    }

    // Add event listeners for both specialty and name filtering
    specialtyFilter.addEventListener('change', filterDoctors);
    nameFilter.addEventListener('input', filterDoctors);

    // Trigger filtering on form submission (if any additional button is used)
    document.getElementById('ctl00_ContentPlaceHolder1_btnSearch').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission
        filterDoctors();
    });

    // Initial filter on page load (optional)
    filterDoctors();
});
