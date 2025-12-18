# Visual Evidence

This folder contains screenshots verifying the development progress of the Steam Free Games Viewer.

## 1. Initial State (CheapShark API)
`1-no_free_games.png`
- Proved that cheapshark API returned empty list for current query.

## 2. Steam Proxy Implementation
`2-steam_games_listed.png`
- Successfully fetched data from Steam Search.
- Issues: Broken images/links due to bad ID parsing.

## 3. Price Display Issues
`3-price_paid_error.png`
- Shows "$Paid" placeholder.

## 4. UI Polish (Clean Free)
`4-price_free_clean.png`
- Removed "$Paid", shows "FREE".
- Issues: Original price missing.

## 5. Final Success (Scraping)
`5-scraper_price_success.png`
- **SUCCESS**: Shows "FREE" AND Original Price (e.g. `฿200.00`) scraped from HTML.
