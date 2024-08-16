document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const locationRows = document.querySelectorAll('.location-row');

        locationRows.forEach(function(row) {
            const locationName = row.querySelector('.location-name').textContent.toLowerCase();
            if (locationName.includes(searchInput)) {
                row.style.display = ''; // Show the row if it matches the search
            } else {
                row.style.display = 'none'; // Hide the row if it does not match
            }
        });
    });

    // Optional: Add functionality to search when pressing "Enter"
    document.getElementById('search-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('search-button').click();
        }
    });
});


// JavaScript can be used for handling redeem actions and showing additional information
document.querySelectorAll('.redeem-button').forEach(button => {
    button.addEventListener('click', function() {
        alert("Code redeemed! Voucher will be sent to your email.");
    });
});

document.querySelector('.how-to-redeem-button').addEventListener('click', function() {
    alert("To redeem your prize, please visit the locations listed and enter the corresponding code.");
});

//Google Map
// Function to initialize the map
let map; // Declare a global variable for the map

function initMap() {
    // Initialize the map centered on a default location
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 3.139, lng: 101.6869 }, // Default center (Kuala Lumpur)
        zoom: 12
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all map buttons
    const mapButtons = document.querySelectorAll('.map-button');

    mapButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the address from the button's data attribute
            const address = button.getAttribute('data-address');
            
            // Geocode the address to get latitude and longitude
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: address }, function (results, status) {
                if (status === 'OK') {
                    // Set the map center to the geocoded location
                    map.setCenter(results[0].geometry.location);
                    
                    // Add a marker at the geocoded location
                    new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    
                    // Adjust zoom level if necessary
                    map.setZoom(15);
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    });
});
