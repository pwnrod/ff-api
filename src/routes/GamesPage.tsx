import { useEffect, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import GameCard from '../components/GameCard';
import Pagination from '../components/Pagination';
import useFetchGames from '../hooks/useFetchGames';

const ITEMS_PER_PAGE = 6;

const GamesPage = () => {
    const { data, loading, error } = useFetchGames();
    const [currentPage, setCurrentPage] = useState(1);

    const { setPageName } = useAppContext();

    useEffect(() => {
        setPageName('Games');
    }, [setPageName]);

    if (loading) return 'Loading...';
    if (error) return 'Error: ' + error.message;

    let renderedGames: React.ReactNode[] | null = null;
    const totalCount = data?.length ? data.length : 0;

    if (data) {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedData = data?.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );

        renderedGames = selectedData?.map((game) => {
            return <GameCard key={game.gameId} game={game} />;
        });
    }

    return (
        <>
            <main className='max-w-5xl mx-auto pr-24 relative'>
                <section className='ff-dialog p-12'>
                    <Pagination
                        onPageChange={setCurrentPage}
                        currentPage={currentPage}
                        totalCount={totalCount}
                        pageSize={ITEMS_PER_PAGE}
                    />
                    <div className='grid grid-cols-2 grid-rows-3 gap-10'>
                        {renderedGames}
                    </div>
                </section>
            </main>
        </>
    );
};

export default GamesPage;
