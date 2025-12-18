
// Use local proxy to avoid CORS
const BASE_URL = '/api/steam';

export const fetchFreeGames = async () => {
    try {
        // Basic Scraping Approach via Proxy
        // We fetch the HTML page directly as the user requested to "scrape" it.
        const response = await fetch(`${BASE_URL}/search/?maxprice=free&supportedlang=english&specials=1&ndl=1`);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const rows = doc.querySelectorAll('a.search_result_row');

        return Array.from(rows).map(row => {
            const title = row.querySelector('.title')?.textContent;
            const img = row.querySelector('.search_capsule img')?.getAttribute('src');
            // Image src might be lazy-loaded in 'srcset' or 'src'. Steam uses src usually.

            const appid = row.getAttribute('data-ds-appid');

            const originalPriceEl = row.querySelector('.discount_original_price');
            const originalPrice = originalPriceEl ? originalPriceEl.textContent.trim() : null;

            const discountEl = row.querySelector('.discount_pct');
            const discount = discountEl ? discountEl.textContent.replace('-', '').replace('%', '').trim() : "100";

            return {
                id: appid || Math.random().toString(),
                title: title || "Unknown",
                thumbnail: img || "",
                steamAppId: appid,
                normalPrice: originalPrice,
                salePrice: "Free",
                savings: parseInt(discount) || 100,
                steamRating: "N/A",
                dealRating: "10.0"
            };
        });

    } catch (error) {
        console.error('Failed to scrape Steam:', error);
        return [];
    }
};
