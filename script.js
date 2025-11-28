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
        phone: "(512) 477-7878",
        website: "picnikrestaurants.com",
        icon: "fas fa-hamburger",
        images: [
            "images/restaurants/Picnik_Barton-1.png",
            "images/restaurants/Picnik_Barton-2.png",
            "images/restaurants/Picnik_Barton-3.png"
        ],
        featuredImage: "images/restaurants/Picnik_Barton-1.png"
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
        phone: "(512) 524-2999",
        website: "picnikrestaurants.com",
        icon: "fas fa-hamburger",
        images: [
            "images/restaurants/Picnik_Burnet-1.png",
            "images/restaurants/Picnik_Burnet-2.png",
            "images/restaurants/Picnik_Burnet-3.png"
        ],
        featuredImage: "images/restaurants/Picnik_Burnet-1.png"
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
        phone: "(512) 476-2535",
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
        icon: "fas fa-leaf",
        images: [
            "images/restaurants/TrueFood-1.png",
            "images/restaurants/TrueFood-2.png",
            "images/restaurants/TrueFood-3.png"
        ],
        featuredImage: "images/restaurants/TrueFood-1.png"
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
        icon: "fas fa-coffee",
        images: [
            "images/restaurants/Bouldin-1.png",
            "images/restaurants/Bouldin-2.png",
            "images/restaurants/Bouldin-3.png"
        ],
        featuredImage: "images/restaurants/Bouldin-1.png"
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
        address: "621 E 7th St, Austin, TX 78701",
        phone: "(512) 275-0852",
        website: "koriente.com",
        icon: "fas fa-bowl-food",
        images: [
            "images/restaurants/Koriente-1.png",
            "images/restaurants/Koriente-2.png",
            "images/restaurants/Koriente-3.png",
            "images/restaurants/Koriente-4.png"
        ],
        featuredImage: "images/restaurants/Koriente-1.png"
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
        icon: "fas fa-mug-hot",
        images: [
            "images/restaurants/7-1.jpg",
            "images/restaurants/7-2.jpg",
            "images/restaurants/7-3.jpg"
        ],
        featuredImage: "images/restaurants/7-1.jpg"
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
        icon: "fas fa-seedling",
        images: [
            "images/restaurants/8-1.jpg",
            "images/restaurants/8-2.jpg",
            "images/restaurants/8-3.jpg"
        ],
        featuredImage: "images/restaurants/8-1.jpg"
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
        icon: "fas fa-shopping-bag",
        images: [
            "images/restaurants/Snap_Kit-1.png",
            "images/restaurants/Snap_Kit-2.png",
            "images/restaurants/Snap_Kit-3.png"
        ],
        featuredImage: "images/restaurants/Snap_Kit-1.png"
    },
    {
        id: 10,
        name: "Red Ash",
        cuisine: "italian",
        neighborhood: "downtown",
        price: "$$$",
        rating: 4.6,
        description: "Wood-fired Italian restaurant featuring handmade pastas, pristine seafood, and locally sourced prime meats. Offers gluten-free options and can accommodate dietary restrictions.",
        features: ["Wood-Fired", "Italian Cuisine", "Gluten-Free Options"],
        location: "Downtown",
        address: "303 Colorado Street, Austin, TX 78701",
        phone: "(512) 379-2906",
        website: "redashgrill.com",
        icon: "fas fa-fire",
        images: [
            "images/restaurants/RedAsh-1.png",
            "images/restaurants/RedAsh-2.png",
            "images/restaurants/RedAsh-3.png"
        ],
        featuredImage: "images/restaurants/RedAsh-1.png"
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
        phone: "(512) 520-4200",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa",
        images: [
            "images/restaurants/11-1.jpg",
            "images/restaurants/11-2.jpg",
            "images/restaurants/11-3.jpg"
        ],
        featuredImage: "images/restaurants/11-1.jpg"
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
        phone: "(512) 828-9988",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa",
        images: [
            "images/restaurants/21-1.jpg",
            "images/restaurants/21-2.jpg",
            "images/restaurants/21-3.jpg"
        ],
        featuredImage: "images/restaurants/21-1.jpg"
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
        phone: "(512) 358-8972",
        website: "iamaflowerchild.com",
        icon: "fas fa-spa",
        images: [
            "images/restaurants/22-1.jpg",
            "images/restaurants/22-2.jpg",
            "images/restaurants/22-3.jpg"
        ],
        featuredImage: "images/restaurants/22-1.jpg"
    },
    {
        id: 38,
        name: "Bougie's Donuts & Coffee",
        cuisine: "bakery",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.6,
        description: "Gluten-free donut shop and coffee house in Sunset Valley. Specializes in artisanal gluten-free donuts and premium coffee.",
        features: ["100% GF", "Donuts", "Coffee", "Celiac Safe"],
        location: "Sunset Valley (South Austin)",
        address: "5400 Brodie Ln, Suite 930, Sunset Valley, TX 78745",
        phone: "(512) 382-1617",
        website: "bougiesdonuts.com",
        icon: "fas fa-donut",
        images: [
            "images/restaurants/38-1.jpg",
            "images/restaurants/38-2.jpg",
            "images/restaurants/38-3.jpg"
        ],
        featuredImage: "images/restaurants/38-1.jpg"
    },
    {
        id: 39,
        name: "Nômadé Cocina",
        cuisine: "mexican",
        neighborhood: "south-austin",
        price: "$$$",
        rating: 4.7,
        description: "100% gluten-free restaurant featuring Yucatán-inspired cuisine with Lebanese, Portuguese, and African influences. Award-winning raw bar with ceviches, crudos, and wood-fired specialties.",
        features: ["100% GF", "Raw Bar", "Cocktails", "Celiac Safe"],
        location: "South Austin (South 1st)",
        address: "1506 South 1st Street, Austin, TX 78704",
        phone: "(512) 520-5440",
        website: "nomadecocina.com",
        icon: "fas fa-fish",
        images: [
            "images/restaurants/39-1.jpg",
            "images/restaurants/39-2.jpg",
            "images/restaurants/39-3.jpg"
        ],
        featuredImage: "images/restaurants/39-1.jpg"
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
        icon: "fas fa-egg",
        images: [
            "images/restaurants/BirdBird-1.png",
            "images/restaurants/BirdBird-2.png",
            "images/restaurants/BirdBird-3.png"
        ],
        featuredImage: "images/restaurants/BirdBird-1.png"
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
        icon: "fas fa-fish",
        images: [
            "images/restaurants/SaltTraders-1.png",
            "images/restaurants/SaltTraders-2.png",
            "images/restaurants/SaltTraders-3.png"
        ],
        featuredImage: "images/restaurants/SaltTraders-1.png"
    },
    {
        id: 30,
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
        icon: "fas fa-birthday-cake",
        images: [
            "images/restaurants/Bom-1.png",
            "images/restaurants/Bom-2.png",
            "images/restaurants/Bom-3.png"
        ],
        featuredImage: "images/restaurants/Bom-1.png"
    },
    {
        id: 31,
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
        icon: "fas fa-music",
        images: [
            "images/restaurants/23-1.jpg",
            "images/restaurants/23-2.jpg",
            "images/restaurants/23-3.jpg"
        ],
        featuredImage: "images/restaurants/23-1.jpg"
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
        icon: "fas fa-bowl-food",
        images: [
            "images/restaurants/24-1.jpg",
            "images/restaurants/24-2.jpg",
            "images/restaurants/24-3.jpg"
        ],
        featuredImage: "images/restaurants/24-1.jpg"
    },
    {
        id: 32,
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
        icon: "fas fa-leaf",
        images: [
            "images/restaurants/TrueFood-1.png",
            "images/restaurants/TrueFood-2.png",
            "images/restaurants/TrueFood-3.png"
        ],
        featuredImage: "images/restaurants/TrueFood-1.png"
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
        icon: "fas fa-shopping-cart",
        images: [
            "images/restaurants/25-1.jpg",
            "images/restaurants/25-2.jpg",
            "images/restaurants/25-3.jpg"
        ],
        featuredImage: "images/restaurants/25-1.jpg"
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
        icon: "fas fa-fish",
        images: [
            "images/restaurants/Uchi-1.png",
            "images/restaurants/Uchi-2.png",
            "images/restaurants/Uchi-3.png"
        ],
        featuredImage: "images/restaurants/Uchi-1.png"
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
        icon: "fas fa-utensils",
        images: [
            "images/restaurants/Odd_Duck.jpg",
            "images/restaurants/23-2.jpg",
            "images/restaurants/23-3.jpg"
        ],
        featuredImage: "images/restaurants/Odd_Duck.jpg"
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
        icon: "fas fa-shopping-bag",
        images: [
            "images/restaurants/Snap_Kit-1.png",
            "images/restaurants/Snap_Kit-2.png",
            "images/restaurants/Snap_Kit-3.png"
        ],
        featuredImage: "images/restaurants/Snap_Kit-1.png"
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
        icon: "fas fa-shopping-bag",
        images: [
            "images/restaurants/Snap_Kit-1.png",
            "images/restaurants/Snap_Kit-2.png",
            "images/restaurants/Snap_Kit-3.png"
        ],
        featuredImage: "images/restaurants/Snap_Kit-1.png"
    },
    {
        id: 33,
        name: "Hopdoddy Burger Bar - South Congress",
        cuisine: "american",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.6,
        description: "Popular burger joint with gluten-free buns and lettuce wrap options. Dedicated gluten-free fryer for fries. Menu includes Classic, Magic Shroom, and El Diablo burgers.",
        features: ["Gluten-Free Buns", "GF Fries", "Craft Burgers"],
        location: "South Austin (South Congress)",
        address: "1400 S Congress Ave Suite A190, Austin, TX 78704",
        phone: "(512) 243-7505",
        website: "hopdoddy.com",
        icon: "fas fa-hamburger",
        images: [
            "images/restaurants/HopDoddy-1.png",
            "images/restaurants/HopDoddy-2.png",
            "images/restaurants/HopDoddy-3.png",
            "images/restaurants/HopDoddy-4.png"
        ],
        featuredImage: "images/restaurants/HopDoddy-1.png"
    },
    {
        id: 34,
        name: "Il Brutto",
        cuisine: "italian",
        neighborhood: "east-austin",
        price: "$$$",
        rating: 4.4,
        description: "Italian restaurant known for handmade gluten-free pasta. Offers a dedicated gluten-free menu with various pasta dishes and Italian specialties.",
        features: ["Handmade GF Pasta", "Italian Cuisine", "Dedicated GF Menu"],
        location: "East Austin",
        address: "1601 E 6th St, Austin, TX 78702",
        phone: "(512) 916-4808",
        website: "ilbruttoaustin.com",
        icon: "fas fa-utensils",
        images: [
            "images/restaurants/il_brutto-1.png",
            "images/restaurants/il_brutto-2.png",
            "images/restaurants/il_brutto-3.png"
        ],
        featuredImage: "images/restaurants/il_brutto-1.png"
    },
    {
        id: 35,
        name: "Intero",
        cuisine: "italian",
        neighborhood: "east-austin",
        price: "$$$",
        rating: 4.7,
        description: "Italian restaurant with gluten-free pasta options. Focuses on whole animal butchery and seasonal ingredients. Staff accommodates dietary restrictions.",
        features: ["GF Pasta", "Seasonal Menu", "Italian Cuisine"],
        location: "East Austin",
        address: "2612 E Cesar Chavez St Suite 105, Austin, TX 78702",
        phone: "(512) 501-4561",
        website: "interorestaurant.com",
        icon: "fas fa-utensils",
        images: [
            "images/restaurants/Intero-1.png",
            "images/restaurants/Intero-2.png",
            "images/restaurants/Intero-3.png",
            "images/restaurants/Intero-4.png"
        ],
        featuredImage: "images/restaurants/Intero-1.png"
    },
    {
        id: 36,
        name: "Postino - South Lamar",
        cuisine: "cafe",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.7,
        description: "Wine café offering gluten-free bread for bruschetta and sandwiches. Known for wine selection and casual dining atmosphere.",
        features: ["Gluten-Free Bread", "Wine Bar", "Bruschetta"],
        location: "South Austin (South Lamar)",
        address: "1301 S Lamar Blvd Suite 102, Austin, TX 78704",
        phone: "(512) 457-9500",
        website: "postinowinecafe.com",
        icon: "fas fa-wine-glass-alt",
        images: [
            "images/restaurants/Postino-1.png",
            "images/restaurants/Postino-2.png",
            "images/restaurants/Postino-3.png"
        ],
        featuredImage: "images/restaurants/Postino-1.png"
    },
    {
        id: 37,
        name: "Lil'Doddy Burger Lab",
        cuisine: "american",
        neighborhood: "south-austin",
        price: "$$",
        rating: 4.5,
        description: "Hopdoddy's fast-casual concept offering gluten-free burgers with GF buns. Counter service with drive-thru option. Features burgers, fries, salads, and shakes.",
        features: ["Gluten-Free Buns", "Fast Casual", "Drive-Thru"],
        location: "South Austin (West Oak Hill)",
        address: "4625 West William Cannon Drive, Suite 3, Austin, TX 78749",
        phone: "(512) 535-0300",
        website: "hopdoddy.com",
        icon: "fas fa-hamburger",
        images: [
            "images/restaurants/HopDoddy-1.png",
            "images/restaurants/HopDoddy-2.png",
            "images/restaurants/HopDoddy-3.png",
            "images/restaurants/HopDoddy-4.png"
        ],
        featuredImage: "images/restaurants/HopDoddy-1.png"
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
    if (restaurantGrid && restaurantCount) {
        renderRestaurants();
        setupEventListeners();
    }
    setupMobileMenu();
});

// Event Listeners
function setupEventListeners() {
    if (!searchInput || !searchBtn || !cuisineFilter || !neighborhoodFilter || !priceFilter || !clearFiltersBtn) {
        return;
    }

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    cuisineFilter.addEventListener('change', handleFilter);
    neighborhoodFilter.addEventListener('change', handleFilter);
    priceFilter.addEventListener('change', handleFilter);
    clearFiltersBtn.addEventListener('click', clearFilters);
}

// Mobile Menu
function setupMobileMenu() {
    if (!hamburger || !navMenu) {
        return;
    }

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
    if (!searchInput || !cuisineFilter || !neighborhoodFilter || !priceFilter) {
        return;
    }

    searchInput.value = '';
    cuisineFilter.value = '';
    neighborhoodFilter.value = '';
    priceFilter.value = '';
    filteredRestaurants = [...restaurants];
    renderRestaurants();
}

// Render restaurants
function renderRestaurants(restaurantsToRender = filteredRestaurants) {
    if (!restaurantGrid || !restaurantCount) {
        return;
    }

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
        <div class="restaurant-card" data-id="${restaurant.id}">
            <div class="restaurant-image-gallery">
                <div class="main-image">
                    <img src="${restaurant.images && restaurant.images[0] ? restaurant.images[0] : 'images/restaurants/' + restaurant.id + '-1.jpg'}" alt="${restaurant.name}" class="restaurant-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="restaurant-icon-fallback" style="display: none;">
                        <i class="${restaurant.icon}"></i>
                    </div>
                </div>
                <div class="thumbnail-images">
                    <img src="${restaurant.images && restaurant.images[1] ? restaurant.images[1] : 'images/restaurants/' + restaurant.id + '-2.jpg'}" alt="${restaurant.name} interior" class="thumbnail" onerror="this.style.display='none';">
                    <img src="${restaurant.images && restaurant.images[2] ? restaurant.images[2] : 'images/restaurants/' + restaurant.id + '-3.jpg'}" alt="${restaurant.name} food" class="thumbnail" onerror="this.style.display='none';">
                    <div class="more-photos">
                        <span>+${restaurant.images ? restaurant.images.length : 3}</span>
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
                    <a href="restaurants/${restaurant.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '').replace(/'/g, '')}.html" class="action-btn action-btn-primary">
                        <i class="fas fa-info-circle"></i> View Details
                    </a>
                    <a href="tel:${restaurant.phone}" class="action-btn">
                        <i class="fas fa-phone"></i> Call
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address || restaurant.name + ' ' + restaurant.location)}" target="_blank" rel="noopener noreferrer" class="action-btn">
                        <i class="fas fa-directions"></i> Directions
                    </a>
                    ${restaurant.website ? `
                    <a href="https://${restaurant.website}" target="_blank" rel="noopener noreferrer" class="action-btn">
                        <i class="fas fa-globe"></i> Website
                    </a>
                    ` : ''}
                    <button class="action-btn share-btn" 
                            data-name="${restaurant.name}"
                            data-cuisine="${formatCuisine(restaurant.cuisine)}"
                            data-location="${restaurant.location}"
                            data-address="${restaurant.address || ''}"
                            data-website="${restaurant.website || ''}">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Ezoic Dynamic Content: Refresh ads after content changes
    // Per Ezoic documentation: https://docs.ezoic.com/docs/ezoicads/dynamic-content/
    // When content changes dynamically, call showAds() to refresh ad placeholders
    if (typeof ezstandalone !== 'undefined' && ezstandalone.showAds) {
        ezstandalone.cmd.push(function () {
            // Refresh all ad placeholders after dynamic content update
            ezstandalone.showAds();
        });
    }
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

// Share button functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.share-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.share-btn');
        const name = btn.dataset.name;
        const cuisine = btn.dataset.cuisine;
        const location = btn.dataset.location;
        const address = btn.dataset.address;
        const website = btn.dataset.website;
        
        const shareText = `Check out ${name} - ${cuisine} restaurant in ${location}! 🍽️\n\nFind it on Austin Gluten Free: https://austinglutenfree.com`;
        const shareUrl = 'https://austinglutenfree.com';
        
        // Check if Web Share API is supported (works on mobile for SMS, etc.)
        if (navigator.share) {
            navigator.share({
                title: `${name} - Gluten-Free in Austin`,
                text: shareText,
                url: shareUrl
            })
            .then(() => {
                console.log('Shared successfully');
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    // If share fails, fall back to copy
                    fallbackShare(shareText);
                }
            });
        } else {
            // Fallback for desktop: Show share modal with options
            showShareModal(name, cuisine, location, shareText, shareUrl);
        }
    }
});

// Fallback share - copy to clipboard
function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('✅ Restaurant info copied to clipboard! You can now paste it to share.');
            })
            .catch(() => {
                alert('Share text:\n\n' + text);
            });
    } else {
        alert('Share text:\n\n' + text);
    }
}

// Show share modal for desktop with multiple options
function showShareModal(name, cuisine, location, text, url) {
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(`${name} - Gluten-Free in Austin`);
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 400px; width: 100%;">
            <h3 style="margin: 0 0 1.5rem 0; color: #2d5016; font-size: 1.5rem;">Share ${name}</h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" 
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #1877f2; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
                    <i class="fab fa-facebook" style="font-size: 1.25rem;"></i> Share on Facebook
                </a>
                <a href="https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}" target="_blank"
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #1da1f2; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
                    <i class="fab fa-twitter" style="font-size: 1.25rem;"></i> Share on Twitter
                </a>
                <a href="mailto:?subject=${encodedTitle}&body=${encodedText}" 
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #4a7c59; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
                    <i class="fas fa-envelope" style="font-size: 1.25rem;"></i> Share via Email
                </a>
                <a href="sms:?&body=${encodedText}" 
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #25d366; color: white; text-decoration: none; border-radius: 8px; font-weight: 500;">
                    <i class="fas fa-sms" style="font-size: 1.25rem;"></i> Share via Text/SMS
                </a>
                <button onclick="navigator.clipboard.writeText('${text.replace(/'/g, "\\'")}').then(() => { alert('✅ Copied to clipboard!'); this.closest('[style*=fixed]').remove(); })" 
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #6c757d; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; font-size: 1rem;">
                    <i class="fas fa-copy" style="font-size: 1.25rem;"></i> Copy to Clipboard
                </button>
            </div>
            <button onclick="this.closest('[style*=fixed]').remove()" 
                    style="margin-top: 1.5rem; width: 100%; padding: 0.75rem; background: #e9ecef; color: #495057; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">
                Close
            </button>
        </div>
    `;
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

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

// Photo Gallery Lightbox
let currentGalleryImages = [];
let currentGalleryIndex = 0;
let currentRestaurantName = '';

// Create lightbox element
const lightbox = document.createElement('div');
lightbox.className = 'gallery-lightbox';
lightbox.innerHTML = `
    <div class="lightbox-header">
        <div class="lightbox-title"></div>
        <button class="lightbox-close" aria-label="Close gallery">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="lightbox-content">
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
            <i class="fas fa-chevron-left"></i>
        </button>
        <img src="" alt="" class="lightbox-image">
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
            <i class="fas fa-chevron-right"></i>
        </button>
        <div class="lightbox-counter"></div>
        <div class="lightbox-thumbnails"></div>
    </div>
`;
document.body.appendChild(lightbox);

// Lightbox elements
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');
const lightboxCounter = lightbox.querySelector('.lightbox-counter');
const lightboxThumbnails = lightbox.querySelector('.lightbox-thumbnails');

// Open lightbox
function openLightbox(images, index, restaurantName) {
    currentGalleryImages = images;
    currentGalleryIndex = index;
    currentRestaurantName = restaurantName;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateLightbox();
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox content
function updateLightbox() {
    const currentImage = currentGalleryImages[currentGalleryIndex];
    
    lightboxImage.src = currentImage;
    lightboxImage.alt = `${currentRestaurantName} - Photo ${currentGalleryIndex + 1}`;
    lightboxTitle.textContent = currentRestaurantName;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
    
    // Update navigation buttons
    lightboxPrev.disabled = currentGalleryIndex === 0;
    lightboxNext.disabled = currentGalleryIndex === currentGalleryImages.length - 1;
    
    // Update thumbnails
    lightboxThumbnails.innerHTML = currentGalleryImages.map((img, idx) => `
        <img src="${img}" 
             alt="Thumbnail ${idx + 1}" 
             class="lightbox-thumbnail ${idx === currentGalleryIndex ? 'active' : ''}"
             data-index="${idx}">
    `).join('');
}

// Navigate to previous image
function showPrevImage() {
    if (currentGalleryIndex > 0) {
        currentGalleryIndex--;
        updateLightbox();
    }
}

// Navigate to next image
function showNextImage() {
    if (currentGalleryIndex < currentGalleryImages.length - 1) {
        currentGalleryIndex++;
        updateLightbox();
    }
}

// Event listeners for lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Thumbnail clicks
lightboxThumbnails.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-thumbnail')) {
        currentGalleryIndex = parseInt(e.target.dataset.index);
        updateLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// Add click handlers to restaurant images
document.addEventListener('click', (e) => {
    // Check if clicked element is a restaurant image or thumbnail
    const imageGallery = e.target.closest('.restaurant-image-gallery');
    if (!imageGallery) return;
    
    const restaurantCard = e.target.closest('.restaurant-card');
    if (!restaurantCard) return;
    
    // Get restaurant data
    const restaurantId = parseInt(restaurantCard.dataset.id || restaurantCard.querySelector('[data-id]')?.dataset.id);
    const restaurant = restaurants.find(r => r.id === restaurantId);
    
    if (!restaurant || !restaurant.images) return;
    
    // Determine which image was clicked
    let clickedIndex = 0;
    
    if (e.target.classList.contains('restaurant-photo')) {
        clickedIndex = 0; // Main image
    } else if (e.target.classList.contains('thumbnail')) {
        // Find which thumbnail was clicked
        const thumbnails = imageGallery.querySelectorAll('.thumbnail');
        clickedIndex = Array.from(thumbnails).indexOf(e.target) + 1;
    } else if (e.target.closest('.more-photos')) {
        clickedIndex = 0; // Start from first image
    }
    
    openLightbox(restaurant.images, clickedIndex, restaurant.name);
});
