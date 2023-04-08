import React from 'react'
import './SearchResultsList-result.css'
import { SearchResult } from './SearchResult-result'

export const SearchResultsList = ({results}) => {
    return (
        // list ของข้อมูลที่มีคำที่เกี่ยวกับการค้นหา
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    );
};