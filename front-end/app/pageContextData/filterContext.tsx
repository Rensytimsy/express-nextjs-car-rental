"use client"

import {createContext, useContext, useState, FC, ReactNode} from "react";

export interface FilterData {
    vehicleType: string,
    rentType: string,
    price: string,
    vehicelDetails: {
        model: string,
        year: string,
        brand: string
    },
    transmission: string
}

interface FilterDataContext {
    searchData: FilterData,
    updateFilter: (newData: Partial<FilterData>) => void;
    resetFilter: () => void;
}

export const filterDataCotext = createContext<FilterDataContext | null>(null);

//Default values when no filter data are passed to search for vehicles
const initialFilterData:FilterData = {
    vehicleType: "",
    rentType: "",
    price: "",
    vehicelDetails: {
        model: "",
        year: "",
        brand: ""
    },
    transmission: ""
}

//context provider inteface and  the expected data
interface FilterDataProvider {
    children: ReactNode
}

export const FilterDataContextProvider: FC<{children : ReactNode}> = ({children}) => {
    let [searchData, setSearchData] = useState<FilterData>(initialFilterData);

    //update filter function: this function makes our search filter is always updated overtime
    const updateFilter = (newData: Partial<FilterData>) => {
        setSearchData((prevData) => ({...prevData, ...newData}));
    }

    const resetFilter = () => {
        setSearchData(initialFilterData);
    }
    return (
        <filterDataCotext.Provider
        value={{
            searchData, updateFilter, resetFilter
        }}
        >
            {children}
        </filterDataCotext.Provider>
    )
}

//Below is a hook that makes it easier to use the context in our react components
export const useFilterData = () => {
    let filter = useContext(filterDataCotext);
    if(!filter){
        throw new Error("context must be used within a context provider")
    }
    return filter;
}