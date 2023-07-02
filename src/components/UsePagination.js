import { useMemo } from "react"

export const UsePagination = ({totalCount, pageSize, siblingCount = 1, currentPage}) => {

    
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const renge = (start, end) => {
            let length = end - start + 1
            
        }


    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange
}