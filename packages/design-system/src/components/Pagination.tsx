type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (!totalPages) return null;

  const generatePages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {pages.map((page, index) => (
        <button
          key={index}
          disabled={page === '...'}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`
            px-3 py-1 border rounded-md text-sm transition
            ${page === currentPage ? 'bg-orange-500 text-white border-orange-500' : ''}
            ${typeof page === 'number' && page !== currentPage ? 'text-gray-700 hover:bg-gray-100 border-gray-300' : ''}
            ${page === '...' ? 'cursor-default text-gray-400 border-transparent' : ''}
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
