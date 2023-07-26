import { useState } from 'react';
import GameCard from '../components/cards/GameCard';
import Pagination from '../components/Pagination';
import useFetchGames from '../hooks/useFetchGames';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';

const ITEMS_PER_PAGE = 6;

const GamesPage = () => {
    const { data, loading, error } = useFetchGames();
    const [currentPage, setCurrentPage] = useState(1);
    const animatedStyles = useAnimatedPadding();

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
            <animated.main
                style={animatedStyles}
                className='max-w-5xl mx-auto relative'
            >
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
            </animated.main>
        </>
    );
};

export default GamesPage;
