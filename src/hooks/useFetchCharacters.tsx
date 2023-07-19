import { useState, useEffect } from 'react';
import { CharacterData } from '../interfaces/CharacterInterface';

const useFetchCharacters = () => {
    const [data, setData] = useState<CharacterData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<TypeError | null>(null);

    useEffect(() => {
        fetch('https://www.moogleapi.com/api/v1/characters')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error: ' + response.statusText);
                }
            })
            .then((data: CharacterData[]) => {
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

export default useFetchCharacters;
