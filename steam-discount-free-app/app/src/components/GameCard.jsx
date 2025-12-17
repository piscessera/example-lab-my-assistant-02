
import './GameCard.css';

const GameCard = ({ game }) => {
    const steamUrl = `https://store.steampowered.com/app/${game.steamAppId}`;

    return (
        <div className="game-card">
            <div className="game-image-container">
                <img src={game.thumbnail} alt={game.title} className="game-image" />
                <span className="discount-badge">-{game.savings}%</span>
            </div>

            <div className="game-content">
                <h3 className="game-title" title={game.title}>{game.title}</h3>

                <div className="game-meta">
                    {game.steamRating && (
                        <span className={`rating ${game.steamRating.toLowerCase()}`}>
                            {game.steamRating}
                        </span>
                    )}
                </div>

                <div className="price-container">
                    <span className="original-price">${game.normalPrice}</span>
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
