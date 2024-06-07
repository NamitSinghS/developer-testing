import React, { useState } from 'react'
import Propertycard from './Propertycard';
import ReactPaginate from 'react-paginate';

const Paginatedlist = ({ data }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data?.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data?.length;
      setItemOffset(newOffset);
    };
 
  return (
    <>
      <div className="cards">
        {
            currentItems.map((item) => (
                 <div className="card">
                  <Propertycard 
                      title={item.name} 
                      bedrooms={item.bedroom} 
                      price={item.price} 
                      area={item.area}
                      description={item.description}
                  />
                  </div>
            ))
        }
     </div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item-none"
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        breakClassName="page-item-none"
    />
    </>
  )
}

export default Paginatedlist;