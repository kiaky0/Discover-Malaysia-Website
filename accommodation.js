// Accommodation Data 
const accommodationsData = [
    {
        name: "Flamingo Hotel",
        location: "Penang",
        type: "seaside",
        price: 220, 
        imageUrl: "sourceImg/accomodation/flamingo.jpg",
        description: "Experience the charm of Penang in this cozy homestay located in the heart of George Town. Enjoy easy access to local attractions, delicious street food, and vibrant cultural experiences.",
        maxPrice: 220, 
        maxPeople: 4, 
        bedrooms: 2, 
        bathrooms: 1,
        starRating: 4 
    },
    {
        name: "Bao Sheng Durian Farm",
        location: "Penang", 
        type: "countryside",
        price: 380,
        imageUrl: "sourceImg/accomodation/durian.jpg",
        description: "Stay amidst durian orchards at Bao Sheng Durian Farm. Enjoy fresh durians, cozy accommodations, and the beauty of the Malaysian countryside.",
        maxPrice: 380,
        maxPeople: 2,
        bedrooms: 1,
        bathrooms: 1,
        starRating: 3
    },
    {
        name: "Ohana Kuala Lumpur",
        location: "Kuala Lumpur",
        type: "city",
        price: 100,
        imageUrl: "sourceImg/accomodation/ohana.jpg",
        description: "Stay in the heart of Kuala Lumpur in this stylish and modern apartment. Enjoy convenient access to shopping malls, iconic landmarks, and vibrant nightlife.",
        maxPrice: 100,
        maxPeople: 2,
        bedrooms: 1, 
        bathrooms: 1,
        starRating: 3 
    },
    {
        name: "Banyan Tree Kuala Lumpur",
        location: "Kuala Lumpur",
        type: "city",
        price: 1185,
        imageUrl: "sourceImg/accomodation/bayan.jpg",
        description: "Experience 5-star luxury in the heart of Kuala Lumpur. This modern apartment offers easy access to shopping, landmarks, and nightlife.",
        maxPrice: 1185,
        maxPeople: 2,
        bedrooms: 1,
        bathrooms: 1,
        starRating: 5
    },
    {
        name: "Country Garden Danga Bay @ Nest Home",
        location: "Johor",
        type: "seaside",
        price: 200,
        imageUrl: "sourceImg/accomodation/garden.jpg", 
        description: "Enjoy beachfront homestays and sea-view apartments with convenient access to the beach and mall. Perfect for a relaxing getaway with stunning views.",
        maxPrice: 200,
        maxPeople: 6,
        bedrooms: 3,
        bathrooms: 2,
        starRating: 4 
    }
];

// Function to create accommodation cards
function createAccommodationCard(accommodation) {
    // Create bedroom icons
    const bedroomIcons = '<i class="fas fa-bed"></i> '.repeat(accommodation.bedrooms);

    // Create bathroom icons
    const bathroomIcons = '<i class="fas fa-bath"></i> '.repeat(accommodation.bathrooms);

    // Create rating stars (assuming a 5-star rating system)
    let ratingStars = '';
    for (let i = 0; i < 5; i++) {
        if (i < accommodation.starRating) {
            ratingStars += '<i class="fas fa-star"></i> '; // Filled star
        } else {
            ratingStars += '<i class="far fa-star"></i> '; // Empty star
        }
    }

    return `
        <div class="col-md-4 mb-4">
            <div class="card accommodation-card">
                <img src="${accommodation.imageUrl}" class="card-img-top" alt="${accommodation.name}">
                <div class="card-body">
                    <h5 class="card-title">${accommodation.name}</h5>
                    <p class="card-text">${accommodation.location} - ${accommodation.type}</p>
                    <p class="card-text">
                        ${bedroomIcons} 
                        ${bathroomIcons}
                    </p>
                    <p class="card-text">
                        <span class="rating">${ratingStars}</span>
                    </p>
                    <p class="card-text"><strong>RM ${accommodation.price}/night</strong></p>
                    <p class="card-text">${accommodation.description}</p>
                    <a href="#" class="btn btn-primary book-now-button" data-accommodation-name="${accommodation.name}">Book Now</a> 
                </div>
            </div>
        </div>
    `;
}

// Get the container for accommodation cards
const accommodationCardsContainer = document.getElementById('accommodation-cards');

// Get price range elements
const priceRangeSlider = document.getElementById('price-range');
const priceValueDisplay = document.getElementById('price-value');

// Location mapping for filtering
const locationMap = {
    "all": "all",
    "penang": "Penang",
    "kl": "Kuala Lumpur",
    "johor": "Johor"
};

// Update displayed price value when slider changes
priceRangeSlider.addEventListener('input', () => {
    priceValueDisplay.textContent = `RM ${priceRangeSlider.value}`;
});

// Filter and display accommodations
function filterAndDisplayAccommodations() {
    const selectedType = document.getElementById('accommodation-type').value;
    const selectedLocation = document.getElementById('location').value;
    const maxPrice = parseInt(priceRangeSlider.value);
    const maxPeopleInput = document.getElementById('max-people').value;

    // Handle empty input for maxPeople
    const maxPeople = maxPeopleInput ? parseInt(maxPeopleInput) : 1;

    const filteredAccommodations = accommodationsData.filter(accommodation => {
        const typeMatch = selectedType === 'all' || accommodation.type === selectedType;
        const locationMatch = selectedLocation === 'all' || accommodation.location === locationMap[selectedLocation];
        const priceMatch = accommodation.maxPrice <= maxPrice;
        const peopleMatch = accommodation.maxPeople >= maxPeople;

        return typeMatch && locationMatch && priceMatch && peopleMatch;
    });

    if (filteredAccommodations.length === 0) {
        // No accommodations found
        accommodationCardsContainer.innerHTML = '<h5 class="text-center" style="color: blue;">Apologies, no accommodations match your search criteria. Please try again.</h5>';
    } else {
        // Display the filtered accommodations
        accommodationCardsContainer.innerHTML = '';
        filteredAccommodations.forEach(accommodation => {
            const cardHtml = createAccommodationCard(accommodation);
            accommodationCardsContainer.innerHTML += cardHtml;
        });
    }

    // Update displayed price value initially
    priceValueDisplay.textContent = `RM ${priceRangeSlider.value}`;
}

// Add event listener to the filter button
document.getElementById('filter-button').addEventListener('click', filterAndDisplayAccommodations);

// Initial display of all accommodations
filterAndDisplayAccommodations();

// Smooth scrolling for the "Explore Accommodations" button
const exploreButton = document.getElementById('explore-button');

exploreButton.addEventListener('click', (event) => {
    event.preventDefault();

    const accommodationsGrid = document.getElementById('accommodations-grid');
    if (accommodationsGrid) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollTop = accommodationsGrid.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    } else {
        console.error("Error: #accommodations-grid section not found!");
    }
});

// Book Now button click handler
accommodationCardsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('book-now-button')) {
        const accommodationName = event.target.dataset.accommodationName;
        alert(`You have booked ${accommodationName}!`);
        // You can add further booking logic here
    }
});