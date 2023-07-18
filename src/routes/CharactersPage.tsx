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
    const totalCount = data?.length ? data.length : 0;

    if (data) {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedData = data?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

        renderedCharacters = selectedData?.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
        });
    }

    return (
        <>
            <div className="flex justify-between px-4">
                <h1 className="text-3xl">Characters</h1>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    totalCount={totalCount}
                    pageSize={ITEMS_PER_PAGE}
                />
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 my-4">
                {renderedCharacters}
            </div>
            <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalCount={totalCount}
                pageSize={ITEMS_PER_PAGE}
            />
        </>
    );
};

export default CharactersPage;
