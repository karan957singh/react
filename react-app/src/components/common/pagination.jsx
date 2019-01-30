import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'

const Pagination = (props)=>{

    const {itemsCount, pageSize, onPageChange, currentPage} = props;
    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount/pageSize);

    if(pagesCount===1) return null;

    let pages = _.range(1,pagesCount+1)
        return (
            <div style={{align:"center"}}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link">Previous</a></li>

                        {pages.map(page=>(
                            <li key={page} className={page===currentPage?'page-item active':'page-item'}><a className="page-link" onClick={()=>onPageChange(page)}>{page}</a></li>
                        ))}
                        <li className="page-item"><a className="page-link">Next</a></li>
                    </ul>
                </nav>
            </div>

        );
};

Pagination.propTypes = {
  itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
};

export default Pagination;