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
      maxPeople: 4   
    },
    {
      name: "Bao Sheng Durian Farm",
      location: "Penang", 
      type: "countryside",
      price: 380,
      imageUrl: "sourceImg/accomodation/durian.jpg",
      description: "Stay amidst durian orchards at Bao Sheng Durian Farm. Enjoy fresh durians, cozy accommodations, and the beauty of the Malaysian countryside.",
      maxPrice: 300,
      maxPeople: 2
    },
    {
      name: "Ohana Kuala Lumpur",
      location: "Kuala Lumpur",
      type: "city",
      price: 100,
      imageUrl: "sourceImg/accomodation/ohana.jpg",
      description: "Stay in the heart of Kuala Lumpur in this stylish and modern apartment. Enjoy convenient access to shopping malls, iconic landmarks, and vibrant nightlife.",
      maxPrice: 100,
      maxPeople: 2
    },
    {
        name: "Banyan Tree Kuala Lumpur",
        location: "Kuala Lumpur",
        type: "city",
        price: 1185,
        imageUrl: "sourceImg/accomodation/bayan.jpg",
        description: "Experience 5-star luxury in the heart of Kuala Lumpur. This modern apartment offers easy access to shopping, landmarks, and nightlife.",
        maxPrice: 1185,
        maxPeople: 2
    },
    {
      name: "Country Garden Danga Bay @ Nest Home",
      location: "Johor",
      type: "seaside",
      price: 200,
      imageUrl: "sourceImg/accomodation/garden.jpg", 
      description: "Enjoy beachfront homestays and sea-view apartments with convenient access to the beach and mall. Perfect for a relaxing getaway with stunning views.",
      maxPrice: 200,
      maxPeople: 6
    }
  ];
  
  // Function to create accommodation cards
  function createAccommodationCard(accommodation) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card accommodation-card">
          <img src="${accommodation.imageUrl}" class="card-img-top" alt="${accommodation.name}">
          <div class="card-body">
            <h5 class="card-title">${accommodation.name}</h5>
            <p class="card-text">${accommodation.location} - ${accommodation.type}</p>
            <p class="card-text"><strong>RM ${accommodation.price}/night</strong></p>
            <p class="card-text">${accommodation.description}</p>
            <a href="#" class="btn btn-primary">Book Now</a> 
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
  
    console.log("Selected Type:", selectedType);
    console.log("Selected Location:", selectedLocation);
    console.log("Max Price:", maxPrice);
    console.log("Max People:", maxPeople);
  
    const filteredAccommodations = accommodationsData.filter(accommodation => {
        const typeMatch = selectedType === 'all' || accommodation.type === selectedType;
        const locationMatch = selectedLocation === 'all' || accommodation.location === selectedLocation;
        const priceMatch = accommodation.maxPrice <= maxPrice; // Compare with maxPrice
        const peopleMatch = accommodation.maxPeople >= maxPeople;
  
      console.log("Accommodation:", accommodation.name);
      console.log("  - Type Match:", typeMatch);
      console.log("  - Location Match:", locationMatch);
      console.log("  - Price Match:", priceMatch);
      console.log("  - People Match:", peopleMatch);
  
      return typeMatch && locationMatch && priceMatch && peopleMatch;
    });
  
    console.log("Filtered Accommodations:", filteredAccommodations);
  
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
  }
  
  // Add event listener to the filter button
  document.getElementById('filter-button').addEventListener('click', filterAndDisplayAccommodations);
  
  // Initial display of all accommodations
  filterAndDisplayAccommodations();

// Get the "Explore Accommodations" button (assuming it has the ID "explore-button")
const exploreButton = document.getElementById('explore-button'); 




