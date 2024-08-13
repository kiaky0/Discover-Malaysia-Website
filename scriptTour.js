// script.js
document.getElementById('filter-button').addEventListener('click', function() {
    var filters = document.getElementById('filters');
    filters.style.display = (filters.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('apply-filter').addEventListener('click', function() {
    var locationFilter = document.getElementById('location').value;
    var languageFilter = document.getElementById('language').value;
    var experienceFilter = document.getElementById('experience').value;
    
    var tourGuides = document.getElementsByClassName('tour-guide');
    var noResultsMessage = document.getElementById('no-results');
    var hasVisibleGuide = false; // Track if any tour guide matches the filters
    
    for (var i = 0; i < tourGuides.length; i++) {
        var guide = tourGuides[i];
        var guideLocations = guide.getAttribute('data-location').split(','); // Split the locations by comma
        var guideLanguages = guide.getAttribute('data-language').split(','); // Split the languages by comma
        var guideExperience = guide.getAttribute('data-experience');
        
        var locationMatch = locationFilter === 'all' || guideLocations.includes(locationFilter);
        var languageMatch =  guideLanguages.includes(languageFilter);
        var experienceMatch = experienceFilter === 'all' || experienceFilter === guideExperience;
        
        if (locationMatch && languageMatch && experienceMatch) {
            guide.style.display = 'flex'; // Ensure flex layout is maintained
            hasVisibleGuide = true;
        } else {
            guide.style.display = 'none';
        }
    }
    noResultsMessage.style.display = hasVisibleGuide ? 'none' : 'block';
});