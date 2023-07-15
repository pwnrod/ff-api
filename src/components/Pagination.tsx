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
    const pageDisplay = (
        <div className="text-lg">
            <span>Page: </span>
            <span> {currentPage} </span>
            <span>of </span>
            <span> {totalPages} </span>
        </div>
    );

    return (
        <div className="flex justify-between px-4 my-4">
            <button
                className="bg-gray-300 px-4 py-1 rounded-sm"
                onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous Page
            </button>
            {currentPage && pageDisplay}
            {totalPages && (
                <button
                    className="bg-gray-300 px-4 py-1 rounded-sm"
                    onClick={() => setCurrentPage((old) => Math.min(old + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            )}
        </div>
    );
};

export default Pagination;
