type PaginationProps = {
    currentPage: number;
    totalPages: number;
    maxVisible?: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, maxVisible = 7, onPageChange }: PaginationProps) => {
    const startIndex = 1;
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(startIndex, currentPage - half);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(startIndex, end - maxVisible + 1);
    }

    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div
            className="a-page-indicator a-page-indicator--numbered"
            data-start-index={startIndex}
            data-max-length={maxVisible}
            role="navigation"
            aria-label="page indicator numbered"
        >
            <button
                type="button"
                className="a-page-indicator__caret -left"
                aria-label="go to previous page"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            ></button>

            <div className="a-page-indicator__container">
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        className={`a-page-indicator__indicator${page === currentPage ? ' -selected' : ''}`}
                        data-index={page}
                        aria-label={`slide ${page}`}
                        onClick={() => handlePageChange(page)}
                    >
                        <span>{page}</span>
                    </button>
                ))}
            </div>

            <button
                type="button"
                className="a-page-indicator__caret -right"
                aria-label="go to next page"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            ></button>
        </div>
    );
};

export default Pagination;
