
const BASE_URL = 'https://www.cheapshark.com/api/1.0';

export const fetchFreeGames = async () => {
    try {
        // upperPrice=0 implies free. storeID=1 is Steam.
        // CheapShark returns 100% off deals here usually.
        const response = await fetch(`${BASE_URL}/deals?storeID=1&upperPrice=0&pageSize=60`);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        // Filter to ensure savings are 100% just in case
        // and parse needed fields
        return data
            .filter(game => parseFloat(game.savings) >= 100)
            .map(game => ({
                id: game.dealID,
                title: game.title,
                thumbnail: game.thumb,
                steamAppId: game.steamAppID,
                normalPrice: game.normalPrice,
                salePrice: game.salePrice, // Should be 0.00
                savings: Math.round(parseFloat(game.savings)),
                steamRating: game.steamRatingText,
                dealRating: game.dealRating
            }));
    } catch (error) {
        console.error('Failed to fetch games:', error);
        throw error;
    }
};
