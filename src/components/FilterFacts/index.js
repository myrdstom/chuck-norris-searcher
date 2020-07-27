import React, { useState } from 'react';
import axios from 'axios';
import FilterFacts from './FilterFacts';
import ViewFacts from '../ViewFacts';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../config/config';
import {toast} from "react-toastify";

const FilterFactsView = () => {
    const [searchParam, setSearchParam] = useState('');
    const [data, setData] = useState('');
    const handleChange = (e) => setSearchParam(e.target.value);

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            if (searchParam === '') {
                toast.success('please search for a fact');
            } else {
                axios
                    .get(baseUrl(searchParam))
                    .then((res) => {
                        setData(res.data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        }
    };
    return (
        <div>
            <FilterFacts
                searchParam={searchParam}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <ViewFacts data={data} />
        </div>
    );
};

export default FilterFactsView;
