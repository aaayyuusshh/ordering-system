document.addEventListener('DOMContentLoaded', function () {
    const languageDropdown = document.getElementById('languageDropdown');
    const selectedLanguage = document.getElementById('selectedLanguage');
    const languageOptions = document.querySelector('.languageOptions');

    // Toggle the visibility of the language options when clicking on the dropdown
    languageDropdown.addEventListener('click', function () {
        languageOptions.classList.toggle('show');
    });

    // Handle language selection
    languageOptions.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedLang = event.target.dataset.lang;
            selectedLanguage.innerText = selectedLang;

            // Store the selected language in localStorage
            localStorage.setItem('selectedLanguage', selectedLang);

            // Remove the 'selected' class from all language options
            document.querySelectorAll('.languageOptions li').forEach(function (li) {
                li.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked language option
            event.target.classList.add('selected');

            languageOptions.classList.remove('show');
        }
    });

    // Close the language options when clicking outside the dropdown
    document.addEventListener('click', function (event) {
        if (!event.target.closest('#languageDropdown')) {
            languageOptions.classList.remove('show');
        }
    });

    // Check if there's a selected language in localStorage on page load
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
        selectedLanguage.innerText = storedLanguage;

        // Add the 'selected' class to the corresponding language option
        document.querySelector(`.languageOptions li[data-lang="${storedLanguage}"]`).classList.add('selected');
    }
});
