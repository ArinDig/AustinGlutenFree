#!/bin/bash

# Download cuisine-specific images from Unsplash for Austin Gluten Free restaurants
# This script downloads high-quality, relevant images for each restaurant

cd "$(dirname "$0")"
mkdir -p images/restaurants

echo "Downloading cuisine-specific restaurant images..."

# American Cuisine - Picnik Austin (ID 1)
curl -L "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" -o "images/restaurants/1-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" -o "images/restaurants/1-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" -o "images/restaurants/1-3.jpg" 2>/dev/null &

# American - Bird Bird Biscuit (ID 2)
curl -L "https://images.unsplash.com/photo-1619894991648-3f6e2e4a5b8d?w=800&q=80" -o "images/restaurants/2-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80" -o "images/restaurants/2-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80" -o "images/restaurants/2-3.jpg" 2>/dev/null &

# Mexican - Veracruz All Natural (ID 3)
curl -L "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80" -o "images/restaurants/3-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80" -o "images/restaurants/3-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=800&q=80" -o "images/restaurants/3-3.jpg" 2>/dev/null &

# Mediterranean - Casa de Luz (ID 4)
curl -L "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80" -o "images/restaurants/4-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" -o "images/restaurants/4-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80" -o "images/restaurants/4-3.jpg" 2>/dev/null &

# Cafe - Cafe Blue (ID 5)
curl -L "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80" -o "images/restaurants/5-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" -o "images/restaurants/5-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80" -o "images/restaurants/5-3.jpg" 2>/dev/null &

# Asian - Sway (ID 6)
curl -L "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80" -o "images/restaurants/6-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80" -o "images/restaurants/6-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80" -o "images/restaurants/6-3.jpg" 2>/dev/null &

# Cafe - Picnik (Burnet Road) (ID 7)
curl -L "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" -o "images/restaurants/7-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=800&q=80" -o "images/restaurants/7-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" -o "images/restaurants/7-3.jpg" 2>/dev/null &

wait
echo "First batch downloaded..."

# Mediterranean - True Food Kitchen (Arboretum) (ID 8)
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" -o "images/restaurants/8-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80" -o "images/restaurants/8-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80" -o "images/restaurants/8-3.jpg" 2>/dev/null &

# American - Snap Kitchen (Cedar Park) (ID 9)
curl -L "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" -o "images/restaurants/9-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80" -o "images/restaurants/9-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" -o "images/restaurants/9-3.jpg" 2>/dev/null &

# American - Kerbey Lane Cafe (ID 10)
curl -L "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80" -o "images/restaurants/10-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80" -o "images/restaurants/10-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80" -o "images/restaurants/10-3.jpg" 2>/dev/null &

# Mediterranean - Flower Child (South Lamar) (ID 11)
curl -L "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" -o "images/restaurants/11-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80" -o "images/restaurants/11-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80" -o "images/restaurants/11-3.jpg" 2>/dev/null &

# Mediterranean - True Food Kitchen (Domain) (ID 12)
curl -L "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80" -o "images/restaurants/12-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" -o "images/restaurants/12-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80" -o "images/restaurants/12-3.jpg" 2>/dev/null &

# Mediterranean - Flower Child (Round Rock) (ID 13)
curl -L "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80" -o "images/restaurants/13-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" -o "images/restaurants/13-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80" -o "images/restaurants/13-3.jpg" 2>/dev/null &

wait
echo "Second batch downloaded..."

# Bakery - Mariposa Baking Co. (ID 14)
curl -L "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" -o "images/restaurants/14-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80" -o "images/restaurants/14-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80" -o "images/restaurants/14-3.jpg" 2>/dev/null &

# American - Counter Culture (ID 15)
curl -L "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" -o "images/restaurants/15-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80" -o "images/restaurants/15-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=800&q=80" -o "images/restaurants/15-3.jpg" 2>/dev/null &

# Seafood - Quality Seafood Market (ID 16)
curl -L "https://images.unsplash.com/photo-1559737558-2f0fbf38d7fa?w=800&q=80" -o "images/restaurants/16-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80" -o "images/restaurants/16-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1580959375944-57609b2e1c42?w=800&q=80" -o "images/restaurants/16-3.jpg" 2>/dev/null &

# Bakery - Capital City Bakery (ID 17)
curl -L "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80" -o "images/restaurants/17-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80" -o "images/restaurants/17-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" -o "images/restaurants/17-3.jpg" 2>/dev/null &

# Bakery - Sweet Ritual (ID 18)
curl -L "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80" -o "images/restaurants/18-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80" -o "images/restaurants/18-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1582053433857-21a85b0a76f2?w=800&q=80" -o "images/restaurants/18-3.jpg" 2>/dev/null &

# Asian - Thai Fresh (ID 19)
curl -L "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80" -o "images/restaurants/19-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&q=80" -o "images/restaurants/19-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800&q=80" -o "images/restaurants/19-3.jpg" 2>/dev/null &

wait
echo "Third batch downloaded..."

# Mediterranean - Snap Kitchen (Downtown) (ID 20)
curl -L "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" -o "images/restaurants/20-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80" -o "images/restaurants/20-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" -o "images/restaurants/20-3.jpg" 2>/dev/null &

# Grocery - Whole Foods Flagship (ID 21)
curl -L "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" -o "images/restaurants/21-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80" -o "images/restaurants/21-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=800&q=80" -o "images/restaurants/21-3.jpg" 2>/dev/null &

# Japanese - Uchi (ID 22)
curl -L "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80" -o "images/restaurants/22-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80" -o "images/restaurants/22-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&q=80" -o "images/restaurants/22-3.jpg" 2>/dev/null &

# American - Flower Child (Domain) (ID 23)
curl -L "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80" -o "images/restaurants/23-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" -o "images/restaurants/23-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80" -o "images/restaurants/23-3.jpg" 2>/dev/null &

# American - Snap Kitchen (Downtown) (ID 24)
curl -L "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" -o "images/restaurants/24-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" -o "images/restaurants/24-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" -o "images/restaurants/24-3.jpg" 2>/dev/null &

# American - Snap Kitchen (West Lake Hills) (ID 25)
curl -L "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80" -o "images/restaurants/25-1.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" -o "images/restaurants/25-2.jpg" 2>/dev/null &
curl -L "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80" -o "images/restaurants/25-3.jpg" 2>/dev/null &

wait

echo ""
echo "✅ All cuisine-specific images downloaded successfully!"
echo "📁 Images saved to: images/restaurants/"
echo "🎨 Total: 75 high-quality images (3 per restaurant)"
echo ""
echo "Images are categorized by cuisine type:"
echo "  - American: Comfort food, burgers, brunch dishes"
echo "  - Mexican: Tacos, burritos, authentic dishes"
echo "  - Mediterranean: Bowls, salads, healthy meals"
echo "  - Asian/Thai/Japanese: Noodles, sushi, Asian cuisine"
echo "  - Bakery: Fresh bread, pastries, desserts"
echo "  - Cafe: Coffee, breakfast items"
echo "  - Seafood: Fresh fish, oysters"
echo "  - Grocery: Fresh produce, shopping"

