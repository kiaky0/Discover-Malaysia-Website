const tours = [
    {
        id: 1,
        title: "Greatest Island Penang",
        description: "Embark on an unforgettable journey along one of Australia's most breathtaking coastal routes, the Great Ocean Road. Starting from vibrant Melbourne, you'll trav...",
        image: "exploreImg/penangImg.jpeg",
        date: "2023-09-15",
        price: 1380,
        slots: 10
    },
    {
        id: 2,
        title: "Langkawi",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/langkawiImg.jpg",
        date: "2023-10-01",
        price: 2120,
        slots: 0
    },
    {
        id: 3,
        title: "Gopeng Clamping Park",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/gopengClamping.jpeg",
        date: "2023-10-12",
        price: 2120,
        slots: 27
    },
    {
        id: 4,
        title: "Sarawak",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/sarawakRiver.jpg",
        date: "2023-10-18",
        price: 2120,
        slots: 55
    },
    {
        id: 5,
        title: "Pulau Tioman",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/pulauTioman.jpg",
        date: "2023-10-20",
        price: 2120,
        slots: 55
    },
    {
        id: 6,
        title: "Genting Highland",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/genting.jpg",
        date: "2023-10-30",
        price: 2120,
        slots: 55
    },
    {
        id: 7,
        title: "Sarawak",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/sarawakRiver.jpg",
        date: "2023-10-01",
        price: 2120,
        slots: 55
    },
    {
        id: 8,
        title: "Kuantan City",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/kuantan.jpeg",
        date: "2023-11-02",
        price: 2120,
        slots: 55
    },
    {
        id: 9,
        title: "KL City",
        description: "Experience Hobart's amazing city culture, before heading north to Cradle Mountain National Park, Launceston, the Bay of Fires, and Wineglass Bay - regarded as o...",
        image: "exploreImg/klCity.jpg",
        date: "2023-10-01",
        price: 2120,
        slots: 55
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
                <p>Price: AUD $${tour.price}</p>
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