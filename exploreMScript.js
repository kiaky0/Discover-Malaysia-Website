const tours = [
    {
        id: 1,
        title: "Greatest Island Penang",
        description: "Experience the charm of Penang, Malaysia's \"Pearl of the Orient,\" with our 3-day, 2-night tour. Discover the island's rich cultural heritage as you explore historic George Town, a UNESCO World Heritage site. ",
        image: "exploreImg/penangImg.jpeg",
        date: "2024-09-15",
        price: 1580,
        slots: 10
    },
    {
        id: 2,
        title: "Langkawi",
        description: "Experience the best of Langkawi in a 3-day, 2-night tour. Explore the island's stunning beaches, mystical mangroves, and iconic landmarks. Begin with a cable car ride to the breathtaking Sky Bridge, offering panoramic views of the lush landscape.",
        image: "exploreImg/langkawiImg.jpg",
        date: "2024-10-01",
        price: 2220,
        slots: 0
    },
    {
        id: 3,
        title: "Gopeng Clamping Park",
        description: "Escape into nature with this 2-day, 1-night adventure at Gopeng Glamping Park. Nestled in the lush greenery of Gopeng, this tour offers a perfect blend of relaxation and outdoor activities. Enjoy comfortable glamping accommodations, surrounded by scenic landscapes.",
        image: "exploreImg/gopengClamping.jpeg",
        date: "2024-10-12",
        price: 1300,
        slots: 27
    },
    {
        id: 4,
        title: "Sarawak",
        description: "Discover the wonders of Sarawak on a 3-day, 2-night tour that immerses you in the rich culture and natural beauty of Borneo. Begin your journey with a visit to the Semenggoh Wildlife Centre to see the iconic orangutans in their natural habitat.",
        image: "exploreImg/sarawakRiver.jpg",
        date: "2024-10-18",
        price: 3200,
        slots: 32
    },
    {
        id: 5,
        title: "Pulau Tioman",
        description: "Escape to the stunning Pulau Tioman for an unforgettable 3-day, 2-night adventure. Immerse yourself in the island's natural beauty, with crystal-clear waters perfect for snorkeling, vibrant coral reefs, and lush rainforests waiting to be explored.",
        image: "exploreImg/pulauTioman.jpg",
        date: "2024-10-20",
        price: 2600,
        slots: 22
    },
    {
        id: 6,
        title: "Genting Highland",
        description: "Escape to the cool and refreshing Genting Highlands for a 3-day, 2-night adventure. Your journey begins with a scenic drive up the mountains, where you'll check into a luxurious hotel. Over the next two days, indulge in the excitement of the vibrant theme park, explore the colorful indoor and outdoor attractions",
        image: "exploreImg/genting.jpg",
        date: "2024-10-30",
        price: 1600,
        slots: 19
    },
    {
        id: 7,
        title: "Sabah",
        description: "Embark on an unforgettable 3-day, 2-night adventure in Sabah, Borneo’s crown jewel. Day 1 kicks off with your arrival in Kota Kinabalu, where you'll explore the bustling markets and savor local delicacies. Day 2 takes you deep into the lush rainforests of Kinabalu Park, home to Mount Kinabalu, Malaysia’s tallest peak. ",
        image: "exploreImg/sabahSea.jpg",
        date: "2024-11-01",
        price: 3560,
        slots: 16
    },
    {
        id: 8,
        title: "Kuantan City",
        description: "Embark on a 2-day, 1-night adventure in Kuantan, where the city's rich culture and natural beauty await. Begin your journey with a visit to Teluk Cempedak Beach, where golden sands meet azure waters. Explore the vibrant Kuantan River Cruise, offering stunning views of mangroves and local wildlife. Discover the city’s history at the Sultan Ahmad Shah State Mosque and the local museums. ",
        image: "exploreImg/kuantan.jpeg",
        date: "2024-11-02",
        price: 2120,
        slots: 20
    },
    {
        id: 9,
        title: "KL City",
        description: "Explore the vibrant city of Kuala Lumpur over four days and three nights. Immerse yourself in the rich cultural tapestry as you visit iconic landmarks like the Petronas Twin Towers, Batu Caves, and Merdeka Square. Enjoy a mix of modern attractions and historical sites, savor delicious local cuisine, and shop at bustling markets and high-end malls. ",
        image: "exploreImg/klCity.jpg",
        date: "2024-11-14",
        price: 4200,
        slots: 12
    },
    // Add more tour objects here
];

function displayTours(toursToShow) {
    const tourList = document.getElementById('tourList');
    tourList.innerHTML = '';

    toursToShow.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <img src="${tour.image}" alt="${tour.title}">
            <div class="tour-info">
                <h2>${tour.title}</h2>
                <p>${tour.description}</p>
                <p>Date: ${tour.date}</p>
                <p>Price: RM ${tour.price}</p>
                <p>Available slots: ${tour.slots}</p>
                <button onclick="registerForTour(${tour.id})" ${tour.slots === 0 ? 'disabled' : ''}>
                    ${tour.slots > 0 ? 'Register' : 'Sold Out'}
                </button>
            </div>
        `;
        tourList.appendChild(tourCard);
    });
}

function searchTours() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredTours = tours.filter(tour => 
        tour.title.toLowerCase().includes(searchTerm) || 
        tour.description.toLowerCase().includes(searchTerm)
    );
    displayTours(filteredTours);
}

function applyFilters() {
    const dateFilter = document.getElementById('dateFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    const filteredTours = tours.filter(tour => {
        const tourDate = new Date(tour.date);
        const filterDate = new Date(dateFilter);
        return (
            (!dateFilter || tourDate >= filterDate) &&
            (!priceFilter || tour.price <= priceFilter)
        );
    });

    displayTours(filteredTours);
}

function registerForTour(tourId) {
    const tour = tours.find(t => t.id === tourId);
    if (tour && tour.slots > 0) {
        tour.slots--;
        alert(`You have successfully registered for the ${tour.title} tour!`);
        displayTours(tours);
    } else {
        alert("Sorry, this tour is fully booked.");
    }
}

// Initial display of all tours
displayTours(tours);