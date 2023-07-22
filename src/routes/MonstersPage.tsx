import { useEffect, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import MonsterCard from '../components/MonsterCard';
import Pagination from '../components/Pagination';
import useFetchMonsters from '../hooks/useFetchMonsters';

const ITEMS_PER_PAGE = 6;

const MonstersPage = () => {
    const { data, loading, error } = useFetchMonsters();
    const [currentPage, setCurrentPage] = useState(1);

    const { setPageName } = useAppContext();

    useEffect(() => {
        setPageName('Monsters');
    }, [setPageName]);

    if (loading) return 'Loading...';
    if (error) return 'Error: ' + error.message;

    let renderedMonsters: React.ReactNode[] | null = null;
    const totalCount = data?.length ? data.length : 0;

    if (data) {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const selectedData = data?.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );

        renderedMonsters = selectedData?.map((monster) => {
            return <MonsterCard key={monster.monsterId} monster={monster} />;
        });
    }

    return (
        <main className='max-w-5xl mx-auto pr-24 relative'>
            <section className='ff-dialog p-12'>
                <Pagination
                    onPageChange={setCurrentPage}
                    currentPage={currentPage}
                    totalCount={totalCount}
                    pageSize={ITEMS_PER_PAGE}
                />
                <div className='grid grid-cols-2 grid-rows-3 gap-10'>
                    {renderedMonsters}
                </div>
            </section>
        </main>
    );
};

export default MonstersPage;
