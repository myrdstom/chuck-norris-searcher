import React, { useEffect, useState } from 'react';
import FactsDetails from './factsDetails';
import FactsPagination from './factsPagination';
import { toast } from 'react-toastify';

const ViewFacts = ({ data }) => {
    const [facts, setFacts] = useState({
        factsData: '',
        factsLength: '',
        error: false,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [factsPerPage, setFactsPerPage] = useState(10);
    const [activeStyle, setActiveStyle] = useState({
        color: '#333',
        bgColor: '#eee',
    });

    useEffect(() => {
        if (data.total === 0) {
            setFacts({
                factsData: '',
                factsLength: '',
                error: true,
            });
            toast.error('No results found, please refine your search');
        } else if (data && data.result) {
            console.log(data, 'the data');
            setFacts({
                factsData: data.result,
                factsLength: data.result.length,
                error: false,
            });
        }
    }, [data]);

    const handleChange = (e) => setFactsPerPage(e.target.value);

    const indexOfLastFact = currentPage * factsPerPage;
    const indexOfFirstFact = indexOfLastFact - factsPerPage;
    const currentFacts = facts.factsData.slice(
        indexOfFirstFact,
        indexOfLastFact
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActiveStyle({
            color: '#fff',
            bgColor: '#1a1e22',
        });
    };

    const nextPage = (pageLast) => {
        if (currentPage !== pageLast) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const firstPage = (pageOne) => {
        if (currentPage !== 1) {
            setCurrentPage(pageOne);
        }
    };
    const lastPage = (pageLast) => {
        setCurrentPage(pageLast);
    };

    return (
        <div>
            {facts.factsData.length > 1 ? (
                <div>
                    <FactsDetails
                        facts={currentFacts}
                        onChange={handleChange}
                        factsPerPage={factsPerPage}
                    />

                    <FactsPagination
                        factsPerPage={factsPerPage}
                        totalFacts={facts.factsLength}
                        paginate={paginate}
                        activeStyle={activeStyle}
                        currentPage={currentPage}
                        nextPage={nextPage}
                        previousPage={prevPage}
                        firstPage={firstPage}
                        lastPage={lastPage}
                    />
                </div>
            ) : (
                <div className="pre-render"/>
            )}
        </div>
    );
};

export default ViewFacts;
