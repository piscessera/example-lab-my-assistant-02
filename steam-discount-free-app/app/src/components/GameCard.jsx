
import './GameCard.css';

const GameCard = ({ game }) => {
    // Use steamAppId if available, otherwise just search URL or homepage
    const steamUrl = game.steamAppId
        ? `https://store.steampowered.com/app/${game.steamAppId}`
        : `https://store.steampowered.com/search/?term=${encodeURIComponent(game.title)}`;

    return (
        <div className="game-card">
            <div className="game-image-container">
                <img src={game.thumbnail} alt={game.title} className="game-image" />
                <span className="discount-badge">-100%</span>
            </div>

            <div className="game-content">
                <h3 className="game-title" title={game.title}>{game.title}</h3>

                <div className="game-meta">
                    {/* Rating logic simplified for now */}
                </div>

                <div className="price-container">
                    {/* Only show original price if it exists (not null) */}
                    {game.normalPrice && (
                        <span className="original-price">{game.normalPrice}</span>
                    )}
                    <span className="free-label">FREE</span>
                </div>

                <a
                    href={steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="claim-button"
                >
                    Claim on Steam
                </a>
            </div>
        </div>
    );
};

export default GameCard;
