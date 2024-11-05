
function useCalCulateIndex(currentPage:any, pageSize:any, totalCount:number, itemIndex:number) {
    const lastIndex = totalCount - (currentPage -1) * pageSize;
    return lastIndex - itemIndex;
}

export default useCalCulateIndex;
