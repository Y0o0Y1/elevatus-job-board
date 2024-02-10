interface PaginationResult<T> {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    items: T[];
}

const paginate = <T>(array: T[], currentPage: number, itemsPerPage: number): PaginationResult<T> => ({
    currentPage,
    totalPages: Math.ceil(array.length / itemsPerPage),
    totalItems: array.length,
    items: array.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
});

export { paginate }
