#!/usr/bin/env python3
"""
Image Downloader for austinglutenfree.com
This script helps download images from your website for the directory project.
"""

import requests
import os
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import time

def download_image(url, filename, folder="images"):
    """Download an image from URL and save it locally"""
    try:
        # Create folder if it doesn't exist
        os.makedirs(folder, exist_ok=True)
        
        # Get the image
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Save the image
        filepath = os.path.join(folder, filename)
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✅ Downloaded: {filename}")
        return True
        
    except Exception as e:
        print(f"❌ Failed to download {filename}: {e}")
        return False

def get_images_from_website(url):
    """Extract image URLs from a website"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        images = []
        
        # Find all img tags
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                # Convert relative URLs to absolute
                full_url = urljoin(url, src)
                images.append(full_url)
        
        return images
        
    except Exception as e:
        print(f"❌ Error fetching website: {e}")
        return []

def main():
    """Main function to download images from austinglutenfree.com"""
    website_url = "https://austinglutenfree.com"
    
    print("🔍 Scanning austinglutenfree.com for images...")
    image_urls = get_images_from_website(website_url)
    
    if not image_urls:
        print("❌ No images found or error accessing website")
        return
    
    print(f"📸 Found {len(image_urls)} images")
    
    # Download images
    downloaded_count = 0
    for i, url in enumerate(image_urls):
        # Extract filename from URL
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        
        # If no filename, create one
        if not filename or '.' not in filename:
            filename = f"image_{i+1}.jpg"
        
        # Download the image
        if download_image(url, filename):
            downloaded_count += 1
        
        # Be respectful - add small delay
        time.sleep(0.5)
    
    print(f"\n🎉 Download complete! {downloaded_count}/{len(image_urls)} images downloaded")
    print("📁 Images saved to the 'images' folder")

if __name__ == "__main__":
    print("🍽️ Austin Gluten Free Image Downloader")
    print("=" * 50)
    main()
