import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;  //the return below is not rendered.
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {pages.map(page => <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                    <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
                </li>
                )}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
