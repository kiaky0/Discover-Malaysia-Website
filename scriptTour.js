// script.js
document.getElementById('filter-button').addEventListener('click', function() {
    var filters = document.getElementById('filters');
    if (filters.style.display === 'none') {
        filters.style.display = 'block';
    } else {
        filters.style.display = 'none';
    }
});

document.getElementById('apply-filter').addEventListener('click', function() {
    var locationFilter = document.getElementById('location').value;
    var languageFilter = document.getElementById('language').value;
    var experienceFilter = document.getElementById('experience').value;
    
    var tourGuides = document.getElementsByClassName('tour-guide');
    
    for (var i = 0; i < tourGuides.length; i++) {
        var guide = tourGuides[i];
        var guideLocation = guide.getAttribute('data-location');
        var guideLanguage = guide.getAttribute('data-language');
        var guideExperience = guide.getAttribute('data-experience');
        
        if ((locationFilter === 'all' || locationFilter === guideLocation) &&
            (languageFilter === 'all' || languageFilter === guideLanguage) &&
            (experienceFilter === 'all' || experienceFilter === guideExperience)) {
            guide.style.display = 'block';
        } else {
            guide.style.display = 'none';
        }
    }
});
