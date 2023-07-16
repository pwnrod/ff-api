import { GrNext, GrPrevious } from "react-icons/gr";

interface Props {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

const Pagination: React.FC<Props> = ({
    currentPage,
    setCurrentPage,
    totalPages,
}) => {
    const pageNumDisplay = (
        <div className="text-lg">
            <span>Page: </span>
            <span> {currentPage} </span>
            <span>of </span>
            <span> {totalPages} </span>
        </div>
    );

    const handleClick = (increment: number) => {
        setCurrentPage((old) =>
            increment > 0 ? Math.min(old + 1, totalPages) : Math.max(old - 1, 1)
        );
        scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex justify-between px-4 my-4">
            <button
                className="bg-gray-300 px-4 py-1 rounded-sm disabled:opacity-0"
                onClick={() => handleClick(-1)}
                disabled={currentPage === 1}
            >
                <GrPrevious />
            </button>
            {pageNumDisplay}
            <button
                className="bg-gray-300 px-4 py-1 rounded-sm disabled:hidden"
                onClick={() => handleClick(1)}
                disabled={currentPage === totalPages}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default Pagination;
