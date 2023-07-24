import { useEffect, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { animated } from '@react-spring/web';
import useAnimatedPadding from '../hooks/useAnimatedPadding';

const ITEMS_PER_PAGE = 6;

const CharactersPage = () => {
    const { data, loading, error } = useFetchCharacters();
    const [currentPage, setCurrentPage] = useState(1);
    const { setPageName } = useAppContext();
    const animatedStyles = useAnimatedPadding();

    useEffect(() => {
        setPageName('Characters');
    }, [setPageName]);

    if (loading) return 'Loading...';
    if (error) return 'Error: ' + error.message;

    let renderedCharacters: React.ReactNode[] | null = null;
    const totalCount = data?.length ? data.length : 0;

    if (data) {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedData = data?.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );

        renderedCharacters = selectedData?.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
        });
    }

    return (
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
                    {renderedCharacters}
                </div>
            </section>
        </animated.main>
    );
};

export default CharactersPage;
