
import { useState, useEffect } from 'react';
import { fetchFreeGames } from './services/gameService';
import GameCard from './components/GameCard';

function App() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGames = async () => {
            try {
                const data = await fetchFreeGames();
                setGames(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadGames();
    }, []);

    return (
        <div className="app-container">
            <h1>Steam Free Games</h1>

            {loading && <div className="loading">Loading amazing deals...</div>}

            {error && (
                <div className="error">
                    <p>Oops! Something went wrong.</p>
                    <small>{error}</small>
                </div>
            )}

            {!loading && !error && games.length === 0 && (
                <div className="no-games">
                    No free games found right now. Check back later!
                </div>
            )}

            <div className="games-grid">
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>

            <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '2rem', color: 'var(--text-secondary)' }}>
                <small>Data provider: CheapShark. Not affiliated with Valve/Steam.</small>
            </footer>
        </div>
    );
}

export default App;
