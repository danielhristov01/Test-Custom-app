import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
interface PaginationNavProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showPreviousNext?: boolean
}
export function PaginationNav({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showPreviousNext = true
}: PaginationNavProps) {
  // Generate page numbers array [1, 2, 3, ...]
  const pageNumbers = React.useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }, [totalPages])
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
  const handlePageClick = (page: number) => {
    onPageChange(page)
  }
  return (
    <Pagination className={className}>
      <PaginationContent>
        {showPreviousNext && (
          <PaginationItem>
            <PaginationPrevious 
              onClick={handlePrevious}
              className={
                currentPage === 1 
                  ? 'pointer-events-none opacity-50' 
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        )}
        
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => handlePageClick(page)}
              isActive={currentPage === page}
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        {showPreviousNext && (
          <PaginationItem>
            <PaginationNext 
              onClick={handleNext}
              className={
                currentPage === totalPages 
                  ? 'pointer-events-none opacity-50' 
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}