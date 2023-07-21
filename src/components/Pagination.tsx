import { GrNext, GrPrevious } from 'react-icons/gr';
import { usePagination } from '../hooks/usePagination';

type Props = {
    onPageChange: (newPage: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
};

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}: Props) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrev = () => {
        onPageChange(currentPage - 1);
    };

    const paginationItems: JSX.Element[] = [];
    let lastPageNumber = 0;

    for (const pageNumber of paginationRange) {
        if (pageNumber - lastPageNumber !== 1) {
            paginationItems.push(
                <li key={`dots${pageNumber}`}>
                    <span>&#8230;</span>
                </li>,
            );
        }
        paginationItems.push(
            <li key={pageNumber}>
                <button
                    onClick={() => onPageChange(pageNumber)}
                    className={currentPage === pageNumber ? 'text-2xl' : ''}
                >
                    {pageNumber}
                </button>
            </li>,
        );
        lastPageNumber = pageNumber;
    }

    return (
        <ul className='ff-dialog flex absolute -top-1 left-0 text-md px-4 space-x-2'>
            <li className='ml-auto text-lg'>
                <button
                    onClick={onPrev}
                    disabled={currentPage === 1}
                    className='bg-gray-200 rounded-sm p-1'
                >
                    <GrPrevious />
                </button>
            </li>
            {paginationItems}
            <li className='ml-auto text-lg'>
                <button
                    onClick={onNext}
                    disabled={
                        currentPage ===
                        paginationRange[paginationRange.length - 1]
                    }
                    className='bg-gray-200 rounded-sm p-1 mr-auto'
                >
                    <GrNext />
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
