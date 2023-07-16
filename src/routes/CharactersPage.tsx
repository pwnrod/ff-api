import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import { CharacterData } from "../interfaces/CharacterInterface";

const ITEMS_PER_PAGE = 24;

const CharactersPage: React.FC = () => {
    const [data, setData] = useState<CharacterData[] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
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
                    setLoading(false);
                }
            });
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error: " + error.message;

    let renderedCharacters: React.ReactNode[] | null = null;
    let totalPages = 0;

    if (data) {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedData = data?.slice(startIndex, startIndex + ITEMS_PER_PAGE);
        totalPages = Math.ceil(data?.length / ITEMS_PER_PAGE);

        renderedCharacters = selectedData?.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
        });
    }

    return (
        <>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
                {renderedCharacters}
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </>
    );
};

export default CharactersPage;
