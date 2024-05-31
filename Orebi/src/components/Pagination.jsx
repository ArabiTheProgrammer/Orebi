import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import ProductItem7 from './layer/products/ProductItems7';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];

function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <ProductItem7/>
            </div>
          ))}
      </>
    );
  }


const Pagination = ({ itemsPerPage }) => {

        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
      
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
    };
      

  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-[50px]">
      <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between items-end mt-[50px]">
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousClassName="hidden"
        nextClassName="hidden"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex gap-x-[15px]"
        pageClassName="page-item text-[#767676] w-9 h-9 border border-[#F0F0F0]"
        pageLinkClassName="page-link w-full h-full flex justify-center items-center text-sm"
        activeClassName="active text-white bg-[#262626]"
      />

      <p>Products from {itemOffset+1} to {endOffset > items.length ?items.length:endOffset } of {items.length}</p>
      </div>
    </>
  )
}

export default Pagination