import React from 'react';
import { Link } from 'react-router-dom';
import './_pagination.scss';

/**
 * Pagination component
 */

const FactsPagination = ({
    factsPerPage,
    totalFacts,
    paginate,
    currentPage,
    nextPage,
    previousPage,
    firstPage,
    lastPage,
}) => {
    /**
     * The functions and variables used to calculate the pagination items to be displayed
     */

    const pageNumbers = [];
    let nextArray = [];
    let previousArray = [];
    for (let i = 1; i <= Math.ceil(totalFacts / factsPerPage); i++) {
        pageNumbers.push(i);
    }
    const pageOne = pageNumbers[0];
    const pageLast = pageNumbers[pageNumbers.length - 1];
    const trimPages = () => {
        nextArray.push(...pageNumbers.slice(currentPage, currentPage + 2));
        if (currentPage > 1) {
            previousArray.push(
                ...pageNumbers.slice(currentPage - 2, currentPage)
            );
        } else {
            previousArray.push(1);
        }
    };
    trimPages();
    const finalArray = previousArray.concat(nextArray);

    return (
        <nav>
            <ul className="wrapper">
                <li>
                    <Link onClick={() => firstPage(pageOne)} to="#">
                        {' '}
                        <i className="fa fa-angle-double-left" />{' '}
                    </Link>
                </li>
                <li>
                    <Link onClick={() => previousPage()} to="#">
                        <i className="fa fa-angle-left" />{' '}
                    </Link>
                </li>
                {finalArray.map((number) => (
                    <li key={number} className="page-item">
                        {currentPage === number ? (
                            <Link
                                onClick={() => paginate(number)}
                                to="/"
                                className="page-link active"
                            >
                                {number}
                            </Link>
                        ) : (
                            <Link
                                onClick={() => paginate(number)}
                                to="/"
                                className="page-link"
                            >
                                {number}
                            </Link>
                        )}
                    </li>
                ))}
                <li>
                    <Link onClick={() => nextPage(pageLast)} to="#">
                        <i className="fa fa-angle-right" />{' '}
                    </Link>
                </li>
                <li>
                    <Link onClick={() => lastPage(pageLast)} to="#">
                        {' '}
                        <i className="fa fa-angle-double-right" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default FactsPagination;
