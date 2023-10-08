import { useState } from 'react';

const useHandlePagination = (initialPage = 1, initialItemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const paginate = (array, page_number, items_per_page) => {
    return array.slice((page_number - 1) * items_per_page, page_number * items_per_page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return {
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    paginate,
    handlePreviousPage,
    handleNextPage,
  };
};

export default useHandlePagination;