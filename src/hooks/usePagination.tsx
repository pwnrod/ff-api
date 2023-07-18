import { useMemo } from "react";

interface Props {
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    currentPage: number;
}

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
}: Props): number[] | undefined => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        // + 5 because page count is determined as
        // siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        // if num of pages is less than our page number elements
        // we don't need any siblings or dots
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            return range(1, leftItemCount);
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            return range(totalPageCount - rightItemCount + 1, totalPageCount);
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            return range(leftSiblingIndex, rightSiblingIndex);
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
};
