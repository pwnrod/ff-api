import { useState, useEffect } from 'react';
import { GameData } from '../interfaces/GameInterface';

const useFetchGames = () => {
    const [data, setData] = useState<GameData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<TypeError | null>(null);

    useEffect(() => {
        fetch('https://www.moogleapi.com/api/v1/games')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .then((data: GameData[]) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof TypeError) {
                    setError(error);
                    setLoading(false);
                }
            });
    }, []);

    return { data, loading, error };
};

export default useFetchGames;
