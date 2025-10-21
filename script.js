// Restaurant data for Austin gluten-free restaurants
const restaurants = [
    {
        id: 1,
        name: "Picnik - Barton Springs",
        cuisine: "american",
        neighborhood: "downtown",
        price: "$$$",
        rating: 4.6,
        description: "100% gluten-free Modern American cuisine. Known for their bulletproof coffee and healthy, delicious meals. Barton Springs location.",
        features: ["100% GF", "Paleo Options", "Organic Ingredients"],
        location: "Downtown Austin (Barton Springs)",
        address: "1720 Barton Springs Rd, Austin, TX 78704",
        phone: "(512) 555-0124",
        website: "picnikrestaurants.com",
        icon: "fas fa-hamburger",
        images: [
            "images/restaurants/2-1.jpg",
            "images/restaurants/2-2.jpg", 
            "images/restaurants/2-3.jpg"
        ],
        featuredImage: "images/restaurants/2-1.jpg"
    },
    {
        id: 23,
        name: "Picnik - Burnet Road",
        cuisine: "american",
        neighborhood: "north-austin",
        price: "$$$",
        rating: 4.4,
        description: "100% gluten-free Modern American cuisine. Known for their bulletproof coffee and healthy, delicious meals. Burnet Road location.",
        features: ["100% GF", "Paleo Options", "Organic Ingredients"],
        location: "North Austin (Burnet Road)",
        address: "4801 Burnet Rd, Austin, TX 78756",
        phone: "(512) 555-0162",
        website: "picnikrestaurants.com",
        icon: "fas fa-hamburger"
    },
    {
        id: 3,
        name: "Casa de Luz",
        cuisine: "mexican",
        neighborhood: "east-austin",
        price: "$$",
        rating: 4.4,
        description: "Plant-based Mexican cuisine with many naturally gluten-free options. Fresh, organic ingredients and a warm, community atmosphere.",
        features: ["Plant-Based", "Organic", "Community Space"],
        location: "East Austin",
        address: "1000 E 11th St, Austin, TX 78702",
        phone: "(512) 555-0125",
        website: "casadeluz.org",
        icon: "fas fa-pepper-hot",
        images: [
            "images/restaurants/casa_de_luz.jpg",
            "images/restaurants/3-2.jpg",
            "images/restaurants/3-3.jpg"
        ],
        featuredImage: "images/restaurants/casa_de_luz.jpg"
    },
    {
        id: 4,
        name: "True Food Kitchen - Arboretum",
        cuisine: "mediterranean",
        neighborhood: "west-austin",
        price: "$$$",
        rating: 4.5,
        description: "Health-focused Mediterranean cuisine with clearly marked gluten-free options. Seasonal menu with fresh, local ingredients. Arboretum location.",
        features: ["Seasonal Menu", "Local Ingredients", "Health Focused"],
        location: "West Austin (Arboretum)",
        address: "3600 N Capital of Texas Hwy, Austin, TX 78746",
        phone: "(512) 555-0126",
        website: "truefoodkitchen.com",
        icon: "fas fa-leaf"
    },
    {
        id: 5,
        name: "Bouldin Creek Cafe",
        cuisine: "cafe",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.3,
        description: "Vegetarian and vegan cafe with many gluten-free options. Famous for their breakfast and brunch with gluten-free pancakes and waffles.",
        features: ["Vegetarian", "Vegan Options", "Brunch Specialties"],
        location: "South Austin",
        address: "1900 S 1st St, Austin, TX 78704",
        phone: "(512) 555-0127",
        website: "bouldincreekcafe.com",
        icon: "fas fa-coffee"
    },
    {
        id: 6,
        name: "Koriente",
        cuisine: "asian",
        neighborhood: "downtown",
        price: "$$",
        rating: 4.2,
        description: "Asian fusion restaurant with many gluten-free options. Fresh, healthy bowls and traditional Asian dishes made gluten-free.",
        features: ["Asian Fusion", "Fresh Bowls", "Healthy Options"],
        location: "Downtown Austin",
        address: "311 Colorado St, Austin, TX 78701",
        phone: "(512) 555-0128",
        website: "koriente.com",
        icon: "fas fa-bowl-food"
    },
    {
        id: 7,
        name: "The Steeping Room",
        cuisine: "cafe",
        neighborhood: "north-austin",
        price: "$$",
        rating: 4.1,
        description: "Tea house and cafe with gluten-free menu options. Perfect for afternoon tea with gluten-free scones and sandwiches.",
        features: ["Tea House", "Afternoon Tea", "GF Scones"],
        location: "North Austin",
        address: "4400 N Lamar Blvd #120, Austin, TX 78756",
        phone: "(512) 555-0129",
        website: "thesteepingroom.com",
        icon: "fas fa-mug-hot"
    },
    {
        id: 8,
        name: "Vinaigrette",
        cuisine: "mediterranean",
        neighborhood: "south-austin",
        price: "$$$",
        rating: 4.4,
        description: "Mediterranean salad bar and restaurant with extensive gluten-free options. Fresh, seasonal ingredients and customizable bowls.",
        features: ["Salad Bar", "Customizable", "Seasonal"],
        location: "South Austin",
        phone: "(512) 555-0130",
        website: "vinaigrette.com",
        icon: "fas fa-seedling"
    },
    {
        id: 9,
        name: "Snap Kitchen - Cedar Park",
        cuisine: "american",
        neighborhood: "cedar-park",
        price: "$$",
        rating: 4.0,
        description: "Grab-and-go healthy meals with many gluten-free options. Perfect for busy professionals who need quick, safe meals. Cedar Park location.",
        features: ["Grab & Go", "Healthy Meals", "Quick Service"],
        location: "Cedar Park",
        address: "11066 Pecan Park Blvd, Cedar Park, TX 78613",
        phone: "(512) 555-0131",
        website: "snapkitchen.com",
        icon: "fas fa-shopping-bag"
    },
    {
        id: 10,
        name: "The Beer Plant",
        cuisine: "american",
        neighborhood: "east-austin",
        price: "$$$",
        rating: 4.7,
        description: "Plant-based restaurant and bar with extensive gluten-free options. Known for their creative cocktails and innovative plant-based cuisine.",
        features: ["Plant-Based", "Craft Cocktails", "Innovative Cuisine"],
        location: "East Austin",
        phone: "(512) 555-0132",
        website: "thebeerplant.com",
        icon: "fas fa-wine-glass-alt"
    },
    {
        id: 11,
        name: "Flower Child - South Lamar",
        cuisine: "mediterranean",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.3,
        description: "Healthy Mediterranean-inspired restaurant with clearly marked gluten-free options. Fresh, organic ingredients and customizable meals. South Lamar location.",
        features: ["Organic", "Customizable", "Healthy Options"],
        location: "South Austin (South Lamar)",
        address: "4201 S Lamar Blvd, Austin, TX 78704",
        phone: "(512) 555-0133",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa"
    },
    {
        id: 21,
        name: "Flower Child - Domain",
        cuisine: "mediterranean",
        neighborhood: "north-austin",
        price: "$$",
        rating: 4.3,
        description: "Healthy Mediterranean-inspired restaurant with clearly marked gluten-free options. Fresh, organic ingredients and customizable meals. Domain location.",
        features: ["Organic", "Customizable", "Healthy Options"],
        location: "North Austin (Domain)",
        address: "11601 Domain Dr #150, Austin, TX 78758",
        phone: "(512) 555-0160",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa"
    },
    {
        id: 22,
        name: "Flower Child - Round Rock",
        cuisine: "mediterranean",
        neighborhood: "round-rock",
        price: "$$",
        rating: 4.3,
        description: "Healthy Mediterranean-inspired restaurant with clearly marked gluten-free options. Fresh, organic ingredients and customizable meals. Round Rock location.",
        features: ["Organic", "Customizable", "Healthy Options"],
        location: "Round Rock",
        address: "2001 S Interstate 35 Frontage Rd, Round Rock, TX 78664",
        phone: "(512) 555-0161",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa"
    },
    {
        id: 12,
        name: "Sweet Ritual",
        cuisine: "bakery",
        neighborhood: "east-austin",
        price: "$",
        rating: 4.5,
        description: "Vegan ice cream shop with many gluten-free options. All ice creams are dairy-free and many are gluten-free as well.",
        features: ["Vegan Ice Cream", "Dairy-Free", "GF Options"],
        location: "East Austin",
        phone: "(512) 555-0134",
        website: "sweetritual.com",
        icon: "fas fa-ice-cream"
    },
    {
        id: 13,
        name: "Bird, Bird Biscuit",
        cuisine: "american",
        neighborhood: "east-austin",
        price: "$$",
        rating: 4.6,
        description: "Popular breakfast and brunch spot with extensive gluten-free biscuit options. Known for their creative biscuit sandwiches and gluten-free alternatives.",
        features: ["GF Biscuits", "Brunch", "Creative Menu"],
        location: "East Austin",
        phone: "(512) 555-0135",
        website: "birdbirdbiscuit.com",
        icon: "fas fa-egg"
    },
    {
        id: 14,
        name: "Salt Traders Coastal Cooking",
        cuisine: "seafood",
        neighborhood: "downtown",
        price: "$$$",
        rating: 4.8,
        description: "100% dedicated gluten-free seafood restaurant offering dishes like flat top fish tacos and clam chowder. Completely safe for celiacs.",
        features: ["100% GF Kitchen", "Seafood", "Celiac Safe"],
        location: "Downtown Austin",
        address: "409 W 2nd St, Austin, TX 78701",
        phone: "(512) 555-0143",
        website: "salttraders.com",
        icon: "fas fa-fish"
    },
    {
        id: 22,
        name: "Bom Bakeshop",
        cuisine: "bakery",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.7,
        description: "Gluten-free bakery specializing in mochi donuts, operated by a celiac owner and her chef husband. Completely safe environment.",
        features: ["Dedicated GF", "Mochi Donuts", "Celiac Owned"],
        location: "South Austin",
        address: "4919 Airport Blvd #102, Austin, TX 78751",
        phone: "(512) 555-0144",
        website: "bombakeshop.com",
        icon: "fas fa-birthday-cake"
    },
    {
        id: 23,
        name: "Zucchini Kill",
        cuisine: "bakery",
        neighborhood: "east-austin",
        price: "$$",
        rating: 4.4,
        description: "Vegan and gluten-free bakery known for its punk-rock aesthetic and delectable sweets, including perfect vegan Swiss roll cake.",
        features: ["Vegan & GF", "Punk Rock", "Creative Sweets"],
        location: "East Austin",
        phone: "(512) 555-0145",
        website: "zucchinikill.com",
        icon: "fas fa-music"
    },
    {
        id: 24,
        name: "Ka-Prow",
        cuisine: "asian",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.2,
        description: "Pan-Asian eatery with a focus on Thai cuisine, offering a variety of gluten-free options in an intimate setting.",
        features: ["Thai Cuisine", "GF Options", "Intimate Setting"],
        location: "South Austin",
        phone: "(512) 555-0146",
        website: "kaprow.com",
        icon: "fas fa-bowl-food"
    },
    {
        id: 24,
        name: "True Food Kitchen - Domain",
        cuisine: "mediterranean",
        neighborhood: "north-austin",
        price: "$$$",
        rating: 4.5,
        description: "Health-focused Mediterranean cuisine with clearly marked gluten-free options. Seasonal menu with fresh, local ingredients. Domain location.",
        features: ["Seasonal Menu", "Local Ingredients", "Health Focused"],
        location: "North Austin (Domain)",
        address: "11601 Domain Dr, Austin, TX 78758",
        phone: "(512) 555-0163",
        website: "truefoodkitchen.com",
        icon: "fas fa-leaf"
    },
    {
        id: 25,
        name: "Dia's Market",
        cuisine: "grocery",
        neighborhood: "east-austin",
        price: "$$",
        rating: 4.3,
        description: "Specialty grocery store with deli and prepared foods offering grab-and-go gluten-free options, including customizable sandwiches on GF bread.",
        features: ["Grocery Store", "Deli", "GF Sandwiches"],
        location: "East Austin",
        phone: "(512) 555-0147",
        website: "diasmarket.com",
        icon: "fas fa-shopping-cart"
    },
    {
        id: 26,
        name: "Uchi",
        cuisine: "japanese",
        neighborhood: "south-austin",
        price: "$$$$",
        rating: 4.9,
        description: "Sushi restaurant with knowledgeable staff who can assist in modifying items for gluten-free needs. Offers dishes like the Machi Cure.",
        features: ["Sushi", "GF Modifications", "Knowledgeable Staff"],
        location: "South Austin",
        address: "801 S Lamar Blvd, Austin, TX 78704",
        phone: "(512) 555-0148",
        website: "uchiaustin.com",
        icon: "fas fa-fish"
    },
    {
        id: 27,
        name: "Odd Duck",
        cuisine: "american",
        neighborhood: "south-austin",
        price: "$$$",
        rating: 4.6,
        description: "Restaurant with separate gluten-free menu and staff conscientious about dietary restrictions. Frequently changing menu based on local ingredients.",
        features: ["GF Menu", "Local Ingredients", "Dietary Conscious"],
        location: "South Austin",
        phone: "(512) 555-0149",
        website: "oddduckaustin.com",
        icon: "fas fa-utensils"
    },
    {
        id: 28,
        name: "Snap Kitchen - Downtown",
        cuisine: "american",
        neighborhood: "downtown",
        price: "$$",
        rating: 4.0,
        description: "Grab-and-go healthy meals with many gluten-free options. Perfect for busy professionals who need quick, safe meals. Downtown location.",
        features: ["Grab & Go", "Healthy Meals", "Quick Service"],
        location: "Downtown Austin",
        address: "600 Congress Ave, Austin, TX 78701",
        phone: "(512) 555-0164",
        website: "snapkitchen.com",
        icon: "fas fa-shopping-bag"
    },
    {
        id: 29,
        name: "Snap Kitchen - West Lake Hills",
        cuisine: "american",
        neighborhood: "west-austin",
        price: "$$",
        rating: 4.0,
        description: "Grab-and-go healthy meals with many gluten-free options. Perfect for busy professionals who need quick, safe meals. West Lake Hills location.",
        features: ["Grab & Go", "Healthy Meals", "Quick Service"],
        location: "West Austin (West Lake Hills)",
        address: "3300 Bee Cave Rd, Austin, TX 78746",
        phone: "(512) 555-0165",
        website: "snapkitchen.com",
        icon: "fas fa-shopping-bag"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cuisineFilter = document.getElementById('cuisineFilter');
const neighborhoodFilter = document.getElementById('neighborhoodFilter');
const priceFilter = document.getElementById('priceFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const restaurantGrid = document.getElementById('restaurantGrid');
const restaurantCount = document.getElementById('restaurantCount');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// State
let filteredRestaurants = [...restaurants];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderRestaurants();
    setupEventListeners();
    setupMobileMenu();
});

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    cuisineFilter.addEventListener('change', handleFilter);
    neighborhoodFilter.addEventListener('change', handleFilter);
    priceFilter.addEventListener('change', handleFilter);
    clearFiltersBtn.addEventListener('click', clearFilters);
}

// Mobile Menu
function setupMobileMenu() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredRestaurants = [...restaurants];
    } else {
        filteredRestaurants = restaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
            restaurant.neighborhood.toLowerCase().includes(searchTerm) ||
            restaurant.description.toLowerCase().includes(searchTerm) ||
            restaurant.features.some(feature => 
                feature.toLowerCase().includes(searchTerm)
            )
        );
    }
    
    applyFilters();
}

// Filter functionality
function handleFilter() {
    applyFilters();
}

function applyFilters() {
    let filtered = [...filteredRestaurants];
    
    // Apply cuisine filter
    if (cuisineFilter.value) {
        filtered = filtered.filter(restaurant => 
            restaurant.cuisine === cuisineFilter.value
        );
    }
    
    // Apply neighborhood filter
    if (neighborhoodFilter.value) {
        filtered = filtered.filter(restaurant => 
            restaurant.neighborhood === neighborhoodFilter.value
        );
    }
    
    // Apply price filter
    if (priceFilter.value) {
        filtered = filtered.filter(restaurant => 
            restaurant.price === priceFilter.value
        );
    }
    
    renderRestaurants(filtered);
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    cuisineFilter.value = '';
    neighborhoodFilter.value = '';
    priceFilter.value = '';
    filteredRestaurants = [...restaurants];
    renderRestaurants();
}

// Render restaurants
function renderRestaurants(restaurantsToRender = filteredRestaurants) {
    if (restaurantsToRender.length === 0) {
        restaurantGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No restaurants found</h3>
                <p>Try adjusting your search criteria or filters to find more restaurants.</p>
            </div>
        `;
        restaurantCount.textContent = '0 restaurants found';
        return;
    }
    
    restaurantCount.textContent = `${restaurantsToRender.length} restaurant${restaurantsToRender.length === 1 ? '' : 's'} found`;
    
    restaurantGrid.innerHTML = restaurantsToRender.map(restaurant => `
        <div class="restaurant-card">
            <div class="restaurant-image-gallery">
                <div class="main-image">
                    <img src="images/restaurants/${restaurant.id}-1.jpg" alt="${restaurant.name}" class="restaurant-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="restaurant-icon-fallback" style="display: none;">
                        <i class="${restaurant.icon}"></i>
                    </div>
                </div>
                <div class="thumbnail-images">
                    <img src="images/restaurants/${restaurant.id}-2.jpg" alt="${restaurant.name} interior" class="thumbnail" onerror="this.style.display='none';">
                    <img src="images/restaurants/${restaurant.id}-3.jpg" alt="${restaurant.name} food" class="thumbnail" onerror="this.style.display='none';">
                    <div class="more-photos">
                        <span>+3</span>
                    </div>
                </div>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                    <div class="restaurant-rating">
                        <div class="stars">
                            ${generateStars(restaurant.rating)}
                        </div>
                        <span class="rating-text">${restaurant.rating}/5</span>
                    </div>
                </div>
                <p class="restaurant-cuisine">${formatCuisine(restaurant.cuisine)} • ${restaurant.price}</p>
                <p class="restaurant-location">
                    <i class="fas fa-map-marker-alt"></i> ${restaurant.location}
                </p>
                <p class="restaurant-description">${restaurant.description}</p>
                <div class="restaurant-features">
                    ${restaurant.features.map(feature => `
                        <span class="feature-tag">${feature}</span>
                    `).join('')}
                </div>
                <div class="restaurant-actions">
                    <a href="tel:${restaurant.phone}" class="action-btn">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address || restaurant.name + ' ' + restaurant.location)}" target="_blank" rel="noopener noreferrer" class="action-btn">
                        <i class="fas fa-directions"></i> Directions
                    </a>
                    <button class="action-btn">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Helper functions
function formatCuisine(cuisine) {
    const cuisineMap = {
        'american': 'American',
        'mexican': 'Mexican',
        'italian': 'Italian',
        'asian': 'Asian',
        'mediterranean': 'Mediterranean',
        'bakery': 'Bakery',
        'cafe': 'Cafe'
    };
    return cuisineMap[cuisine] || cuisine;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling with mailto fallback
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // Create email body
        const subject = encodeURIComponent('New Restaurant Recommendation - Austin Gluten Free');
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `\n` +
            `Message:\n${message}`
        );
        
        // Create mailto link
        const mailtoLink = `mailto:info@austinglutenfree.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        formStatus.textContent = '✅ Your email client should open now! If it doesn\'t, please email us directly at info@austinglutenfree.com';
        formStatus.style.display = 'block';
        formStatus.style.color = '#28a745';
        formStatus.style.fontWeight = '600';
        
        // Reset form
        this.reset();
        
        // Hide status message after 10 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 10000);
    });
}

// Add loading state for better UX
function showLoading() {
    restaurantGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to restaurant cards
function animateRestaurantCards() {
    const cards = document.querySelectorAll('.restaurant-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call animation function after rendering
const originalRenderRestaurants = renderRestaurants;
renderRestaurants = function(restaurantsToRender = filteredRestaurants) {
    originalRenderRestaurants(restaurantsToRender);
    setTimeout(animateRestaurantCards, 100);
};
