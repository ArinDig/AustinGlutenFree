#!/bin/bash

# Download remaining restaurant images
echo "Downloading restaurant images..."

# Restaurant 4 - True Food Kitchen
curl -o images/restaurants/4-1.jpg "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/4-2.jpg "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/4-3.jpg "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center"

# Restaurant 5 - Bouldin Creek Cafe
curl -o images/restaurants/5-1.jpg "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/5-2.jpg "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/5-3.jpg "https://images.unsplash.com/photo-1578985545062-69928b1c9587?w=400&h=300&fit=crop&crop=center"

# Restaurant 6 - Koriente
curl -o images/restaurants/6-1.jpg "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/6-2.jpg "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center"
curl -o images/restaurants/6-3.jpg "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center"

echo "✅ All restaurant images downloaded!"
