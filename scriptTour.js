//Script for filter button function
document.getElementById('filter-button').addEventListener('click', function () {
    var filters = document.getElementById('filters');
    filters.style.display = (filters.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('apply-filter').addEventListener('click', function () {
    var locationFilter = document.getElementById('location').value;
    var languageFilter = document.getElementById('language').value;
    var experienceFilter = document.getElementById('experience').value;

    // Save filters in cookies
    setCookie('locationFilter', locationFilter, 30); // Save for 30 days
    setCookie('languageFilter', languageFilter, 30);
    setCookie('experienceFilter', experienceFilter, 30);

    // Apply the filters
    applyFilters(locationFilter, languageFilter, experienceFilter);
});

function applyFilters(locationFilter, languageFilter, experienceFilter) {
    var tourGuides = document.getElementsByClassName('tour-guide');
    var hasVisibleGuide = false;

    for (var i = 0; i < tourGuides.length; i++) {
        var guide = tourGuides[i];
        var guideLocations = guide.getAttribute('data-location').split(',');
        var guideLanguages = guide.getAttribute('data-language').split(',');
        var guideExperience = guide.getAttribute('data-experience');

        var locationMatch = locationFilter === 'all' || guideLocations.includes(locationFilter);
        var languageMatch = guideLanguages.includes(languageFilter);
        var experienceMatch = experienceFilter === 'all' || experienceFilter === guideExperience;

        if (locationMatch && languageMatch && experienceMatch) {
            guide.style.display = 'flex';
            hasVisibleGuide = true;
        } else {
            guide.style.display = 'none';
        }
    }

    if (!hasVisibleGuide) {
        window.confirm("No tour guides match your search. Please try different filters.");
    }
}

document.getElementById('clear-filter').addEventListener('click', function () {
    // Reset all filters to their default values
    document.getElementById('location').value = 'all';
    document.getElementById('language').value = 'english';
    document.getElementById('experience').value = 'all';

    // Show all tour guides by resetting the filtering
    const tourGuides = document.querySelectorAll('.tour-guide');
    tourGuides.forEach(function (guide) {
        guide.style.display = 'flex'; // Display all guides
    });

});

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to erase a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Show the cookie consent banner if not already accepted
document.addEventListener('DOMContentLoaded', () => {
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    }

    // Handle the accept button click
    document.getElementById('accept-cookies').addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Set cookie for 1 year
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });
});

//Cookies Loading
document.addEventListener('DOMContentLoaded', () => {
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-consent-banner').style.display = 'block';
    } else {
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }

    // Load and apply saved filters
    var locationFilter = getCookie('locationFilter') || 'all';
    var languageFilter = getCookie('languageFilter') || 'english';
    var experienceFilter = getCookie('experienceFilter') || 'all';

    document.getElementById('location').value = locationFilter;
    document.getElementById('language').value = languageFilter;
    document.getElementById('experience').value = experienceFilter;

    applyFilters(locationFilter, languageFilter, experienceFilter);

    document.getElementById('accept-cookies').addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365);
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });
});

//Clear Cookie Function
/* Clear the cookie banner
function clearCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999; path=/';
}

// Call the function to clear the cookie
clearCookie('cookiesAccepted');
*/