import React, { useReducer, useEffect, useState } from "react";
import DataGlobal from "./DataGlobal";
import DataReducers from "./reducers/Data.reducers";

const DataContext = props => {
    const [stateData, dispatch] = useReducer(DataReducers, {
        dataQuery: null,
    });
 

    return (
        <DataGlobal.Provider
            value={{
                stateData,
                dispatch
            }}
        >
            {props.children}
        </DataGlobal.Provider>
    )
};

export default DataContext;