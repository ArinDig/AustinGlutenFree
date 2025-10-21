#!/usr/bin/env python3
"""
Create placeholder images for the Austin Gluten Free directory
"""

import os

def create_hero_background():
    """Create hero background image"""
    # Create a simple text file that represents an image placeholder
    with open('images/hero-background.jpg', 'w') as f:
        f.write('HERO_BACKGROUND_PLACEHOLDER')
    print("✅ Created hero-background.jpg placeholder")

def create_restaurant_images():
    """Create restaurant image placeholders"""
    restaurants = [
        (1, "Wild Wood Bakehouse", "Bakery"),
        (2, "Picnik", "American"),
        (3, "Casa de Luz", "Mexican"),
        (4, "True Food Kitchen", "Mediterranean"),
        (5, "Bouldin Creek Cafe", "Cafe"),
        (6, "Koriente", "Asian"),
        (7, "The Steeping Room", "Cafe"),
        (8, "Vinaigrette", "Mediterranean"),
        (9, "Snap Kitchen", "American"),
        (10, "The Beer Plant", "American"),
        (11, "Flower Child", "Mediterranean"),
        (12, "Sweet Ritual", "Bakery")
    ]
    
    for restaurant_id, name, cuisine in restaurants:
        for photo_num in range(1, 4):
            filename = f'images/restaurants/{restaurant_id}-{photo_num}.jpg'
            with open(filename, 'w') as f:
                f.write(f'{name} - Photo {photo_num} - {cuisine}')
            print(f"✅ Created {filename}")

if __name__ == "__main__":
    # Create directories
    os.makedirs('images/restaurants', exist_ok=True)
    os.makedirs('images/logos', exist_ok=True)
    
    # Create placeholder images
    create_hero_background()
    create_restaurant_images()
    
    print("\n🎉 All placeholder images created!")
    print("📝 Note: These are text placeholders. Replace with actual images for production.")
