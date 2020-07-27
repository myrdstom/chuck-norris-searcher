import React from "react";

const FilterFacts = props =>{
    const { onChange, searchParam, onKeyDown } = props;

    return (
        <div className="filter__account">
            <div className="grid__container">
                <div />
                <div className="filter__content">
                    <div id="myForm">
                        <div className="form-group">
                            <label htmlFor="search">
                                Chuck Norris facts
                            </label>
                            <input
                                type="text"
                                placeholder="Search for facts"
                                className="form-control profile__input"
                                name="search"
                                value={searchParam}
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                id="search"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    );

}

export default FilterFacts