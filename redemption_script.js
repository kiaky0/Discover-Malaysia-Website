//Searching Function with local storage stored
document.addEventListener('DOMContentLoaded', function () {
    // Function to perform the search
    function performSearch(searchInput) {
        const locationRows = document.querySelectorAll('.location-row');


        locationRows.forEach(function (row) {
            const locationName = row.querySelector('.location-name').textContent.toLowerCase();
            if (locationName.includes(searchInput)) {
                row.style.display = ''; // Show the row if it matches

            } else {
                row.style.display = 'none'; // Hide the row if it does not match
            }
        });

        // Store the search term and visible rows in localStorage
        localStorage.setItem('userSearch', searchInput);
    }

    // Initialize search input and apply previous search on page load
    const savedSearch = localStorage.getItem('userSearch');
    if (savedSearch) {
        document.getElementById('search-input').value = savedSearch;
        performSearch(savedSearch); // Apply the saved search
    }

    // Add event listener to search button
    document.getElementById('search-button').addEventListener('click', function () {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        performSearch(searchInput);
    });

    // Optional: Add functionality to search when pressing "Enter"
    document.getElementById('search-input').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default behavior
            document.getElementById('search-button').click();
        }
    });
});



// Code validation for the gift
const codes = {
    redeemkl: "TRAVELKL",
    redeemsunway: "TRAVELSUNWAY",
    redeempetronas: "TRAVELPETRONAS",
    redeemlangkawi: "TRAVELLANGKAWI",
    redeemmelaka: "TRAVELMELAKA",
    redeemcameron: "TRAVELCAMERON",
    redeembatu: "TRAVELBATU",
    redeemmount: "TRAVELMOUNT",
    redeemtioman: "TRAVELTIOMAN",
    redeempenang: "TRAVELPENANG",
    redeemsipadan: "TRAVELSIPADAN",
    redeemchina: "TRAVELCHINA",
    redeemdataran: "TRAVELDATARAN",
    // Add more as needed
};

document.getElementById("redeemkl").addEventListener("click", function () {
    redeem("redeemkl");
});

document.getElementById("redeemsunway").addEventListener("click", function () {
    redeem("redeemsunway");
});

document.getElementById("redeempetronas").addEventListener("click", function () {
    redeem("redeempetronas");
});

document.getElementById("redeemlangkawi").addEventListener("click", function () {
    redeem("redeemlangkawi");
});

document.getElementById("redeemmelaka").addEventListener("click", function () {
    redeem("redeemmelaka");
});

document.getElementById("redeemcameron").addEventListener("click", function () {
    redeem("redeemcameron");
});

document.getElementById("redeembatu").addEventListener("click", function () {
    redeem("redeembatu");
});

document.getElementById("redeemmount").addEventListener("click", function () {
    redeem("redeemmount");
});

document.getElementById("redeemtioman").addEventListener("click", function () {
    redeem("redeemtioman");
});

document.getElementById("redeempenang").addEventListener("click", function () {
    redeem("redeemspenang");
});

document.getElementById("redeemsipadan").addEventListener("click", function () {
    redeem("redeemsipadan");
});

document.getElementById("redeemchina").addEventListener("click", function () {
    redeem("redeemchina");
});

document.getElementById("redeemdataran").addEventListener("click", function () {
    redeem("redeemdataran");
});


function redeem(buttonId) {
    const userInput = window.prompt("Please enter the redemption code:");

    if (userInput === null || userInput.trim() === "") {
        return;
    }

    if (userInput === codes[buttonId]) {
        alert("Code accepted! Voucher sent to your email.");
    } else {
        const goToContact = confirm("Invalid code. Would you like to contact us for assistance?");
        if (goToContact) {
            window.location.href = "contactUs.html";  // Redirects to the contact page
        }
    }
}



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

//Redeem how?
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.how-to-redeem-button');
    var modal = document.getElementById('redeem-modal');
    var overlay = document.querySelector('.modal-overlay');

    if (button && modal && overlay) {
        button.addEventListener('click', function () {
            modal.style.display = 'flex'; // Show the modal
        });

        overlay.addEventListener('click', function () {
            modal.style.display = 'none'; // Hide the modal
        });
    }
});