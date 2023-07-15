import { useEffect, useState } from "react";

interface Picture {
    id: string;
    url: string;
    primary: string;
    collectionId: string;
}

interface CharacterData {
    id: string;
    name: string;
    japaneseName: string | null;
    age: string;
    gender: string;
    race: string;
    job: string;
    height: string;
    weight: string;
    origin: string;
    description: string | null;
    pictures: Picture[];
}

const CharactersPage: React.FC = () => {
    const [data, setData] = useState<CharacterData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<TypeError | null>(null);

    useEffect(() => {
        fetch("https://www.moogleapi.com/api/v1/characters")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error: " + response.statusText);
                }
            })
            .then((data: CharacterData[]) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof TypeError) {
                    setError(error);
                }
                setLoading(false);
            });
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error: " + error.message;

    const renderedCharacters = data?.map((character) => {
        return (
            <div
                key={character.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <a href="#">
                    <img
                        className="rounded-t-lg"
                        src={character.pictures[0]?.url}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {character.name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {character.description}
                    </p>
                </div>
            </div>
        );
    });

    return <div className="grid gap-4 grid-cols-3">{renderedCharacters}</div>;
};

export default CharactersPage;
