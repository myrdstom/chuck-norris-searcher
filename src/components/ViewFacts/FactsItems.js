import React from 'react';

const FactsItems = (props) => {
    const { icon_url,  value } = props.fact;
    return (
        <div>
            <div className="card-items">
                    <div className="spacing">
                        <div className="section1" />
                        <div className="section2">
                            <div className="fact-top">
                                <div className="fact-top-content">
                                    <div className="grid">
                                    <span className="fact-image">
                                        <img src={icon_url} alt="Chuck Norris"/>
                                    </span>
                                    <h3 className="repo-description">
                                        {value}
                                    </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section3" />
                    </div>
            </div>
        </div>
    );
};

export default FactsItems;
