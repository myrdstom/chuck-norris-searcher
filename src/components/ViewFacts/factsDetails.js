import React from 'react';
import FactsItems from './FactsItems';
import './_facts.scss';

const FactsDetails = ({ facts, onChange, factsPerPage }) => {
    return (
        <div>
            <div className="facts">
                <div className="flex-container">
                    <h1 className="facts-title"> Current Facts</h1>
                    <h1 className="facts-title">
                        {' '}
                        <span>Items Per Page</span> &nbsp;&nbsp;
                        <select
                            value={factsPerPage}
                            onChange={onChange}
                            className="dropdown"
                        >
                            <option value="5" className="firstOption">
                                5
                            </option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </h1>
                </div>
                <div className="fact-cards">
                    {facts.map((fact) => (
                        <FactsItems key={fact.id} fact={fact} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FactsDetails;
