#!/bin/bash
# Update ads.txt from Ezoic's managed service (Method 3 - Automated Updates)
# Per Ezoic documentation: https://docs.ezoic.com/docs/ezoicads/adstxt/
# This script fetches the complete ads.txt from Ezoic's managed service
# which includes both Google AdSense and Ezoic entries

DOMAIN="austinglutenfree.com"
EZOIC_URL="https://srv.adstxtmanager.com/19390/${DOMAIN}"

echo "Fetching ads.txt from Ezoic managed service..."
echo "URL: ${EZOIC_URL}"
echo ""

# Fetch from Ezoic managed URL (includes all authorized sellers)
curl -L "${EZOIC_URL}" > ads.txt.new

# Check if we got valid content (more than just whitespace)
if [ -s ads.txt.new ] && [ $(wc -c < ads.txt.new) -gt 10 ]; then
    mv ads.txt.new ads.txt
    echo "✅ ads.txt updated successfully from Ezoic managed service!"
    echo ""
    echo "Current ads.txt content:"
    echo "---"
    cat ads.txt
    echo "---"
    echo ""
    echo "Note: This file includes all authorized ad sellers (AdSense + Ezoic)"
else
    rm -f ads.txt.new
    echo "⚠️  Ezoic managed URL returned minimal/no content"
    echo "This usually means site verification is pending in Ezoic dashboard"
    echo ""
    echo "Current ads.txt (with manual Google AdSense entry):"
    echo "---"
    cat ads.txt
    echo "---"
    echo ""
    echo "Once Ezoic verifies your site, run this script again to get the complete ads.txt"
fi

