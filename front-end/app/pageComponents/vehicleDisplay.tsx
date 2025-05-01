"use client"

import { vehiclesList } from "@/jsonDataTest/vehicle"
import { Fuel, Car, MapPin, Funnel, Filter } from "lucide-react"
import FilterOnMobileComponent from "./filterOnMobile";
import { Drawer, DrawerTrigger, DrawerContent, DrawerDescription, DrawerHeader } from "@/components/ui/drawer";
// import { useFilterData } from "../pageContextData/filterContext";
import { useState } from "react";
import { useFilterData } from "../pageContextData/filterContext";
import { FilterData } from "../pageContextData/filterContext";

export interface vehicle {
    model: string,
    brand: string,
    year: number,
    fuel: string,
    milage: number,
    color: string,
    hirePrice: number,
    images: string[]
}


//filter data in product function
const vehiclesListData = ({allVehicles} : {allVehicles: vehicle[]}) => {
    //Get the search data that is passed on the filter component
    const {searchData} = useFilterData();

    const filteredVehicleList = applyFilters(allVehicles, searchData);
    const displayVehicles = allAvailableVehicles(searchData) ? allVehicles : filteredVehicleList;
    return displayVehicles;

}


const applyFilters = (allVehicles: vehicle[], searchData: FilterData) => {
    if (allAvailableVehicles(searchData)) return allVehicles;

    return {};
}

function allAvailableVehicles(filters: FilterData): boolean {
    return (
        !filters.vehicleType 
    );
}


export default function VehicleListDisplay() {
    // const {filter} = useFilterData();
    // console.log(filter?.newData?.vehicleType);

    //vehicle filter method 
    // const [newVehicle, setNewVehicle] = useState<vehicle[] | null>(null);
    // const filterVehicleData = () => {
    //     let filteredData = vehiclesList.filter((car) => (car.model === "toyota"));
    //     console.log(filteredData);
    // }
    // filterVehicleData();


    return (
        <div className="w-screen lg:w-auto lg:max-w-screen lg:max-h-[100vh] z-50">
            <div className="lg:hidden absolute -top-10 flex items-center justify-center w-screen">
                <Drawer>
                    <DrawerTrigger asChild>
                        <button className="border p-2 w-[30%] flex flex-row gap-x-5 rounded-md bg-[var(--teal)]">
                            <p className="text-xl">Filter</p>
                            <Funnel size={22} className="mt-1" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>Select search filters</DrawerHeader>
                        <FilterOnMobileComponent />
                    </DrawerContent>
                </Drawer>
            </div>
            {vehiclesList.map((car, idx) => (
                <div key={idx} className="p-6">
                    <div>
                        <img src={car.images[0]} alt="vehicle image" />
                    </div>
                    <div>
                        <p className="text-center m-2 text-xl">{car.model}</p>
                        {/* <p></p> */}
                        <div className="flex felx-row justify-around">
                            <p className="text-green-500">Available</p>
                            <p>Price-per-day: {car.hirePrice}</p>
                        </div>
                        <div className="flex flex-row justify-around text-md mb-5">
                            <p>color: {car.color}</p>
                            <p>Milage: {car.milage} KM</p>
                        </div>
                        <div className="flex flex-row gap-x-2 justify-center">
                            <div className="flex flex-row gap-x-2 text-gray-700 border rounded-md p-1 bg-[var(--light-blue)] cursor-pointer">
                                <Fuel size={18} className="" />
                                {car.fuel}
                            </div>
                            <div className="flex flex-row gap-x-2 text-gray-700 border rounded-md p-1 bg-[var(--light-blue)] cursor-pointer">
                                <Car size={18} />
                                {car.fuel}
                            </div>
                            <div className="flex flex-row gap-x-2 text-gray-700 border rounded-md p-1 bg-[var(--light-blue)] cursor-pointer">
                                <MapPin size={18} />
                                <p>Nairobi</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}