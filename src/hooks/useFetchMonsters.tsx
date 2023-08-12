import { useState, useEffect } from 'react';
import { MonsterData } from '../interfaces/MonsterInterface';

let cachedResponse: MonsterData[] | null = null;

const useFetchMonsters = () => {
    const [data, setData] = useState<MonsterData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<TypeError | null>(null);

    useEffect(() => {
        if (cachedResponse) {
            setData(cachedResponse);
            setLoading(false);
        } else {
            fetch('https://www.moogleapi.com/api/v1/monsters')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error: ' + response.statusText);
                    }
                })
                .then((data: MonsterData[]) => {
                    setData(data);
                    setLoading(false);
                    cachedResponse = data;
                })
                .catch((error) => {
                    if (error instanceof TypeError) {
                        setError(error);
                        setLoading(false);
                    }
                });
        }
    }, []);

    return { data, loading, error };
};

export default useFetchMonsters;
