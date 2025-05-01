"use client"
// import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, Calendar, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose
} from "@/components/ui/drawer";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { vehicleSchema } from "@/lib/vehiclezod";
// import {z} from "zod";
// import axios from "axios";
// import CarDisplayComponent from "./carDispalay";

import { useFilterData } from "../pageContextData/filterContext";
import { FilterData } from "../pageContextData/filterContext";

interface VehicleDetails {
  model: string,
  year: string,
  brand: string
}

export default function FilterComponent() {
  const [selectedRentType, setSelectedRentType] = useState("Select Rent Type");
  const rentTypes = ["Daily", "Weekly", "Monthly", "Long-Term", "Hourly"];
  const [priceRange, setPriceRange] = useState<[number, number]>([3500, 30000]);
  const [choosenCar, setChoosenCar] = useState<VehicleDetails | null>(null);
  // console.log(priceRange);

  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const carBrands = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
  const carModels = ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible"];
  const years = Array.from({ length: 30 }, (_, i) => (2023 - i).toString());
  const [selectedTransmission, setSelectedTransmission] = useState(
    "Select Transmission"
  );
  const transmissionTypes = ["Automatic", "Manual", "Semi-Automatic"];

  const [fuelType, setFuelType] = useState<string>("");
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);

  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"];
  const handleFuelTypeChange = (type: string) => {
    setSelectedFuelTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const { searchData, resetFilter, updateFilter } = useFilterData();

  const searchDataFilter = (type: string) => {
    updateFilter({ vehicleType: type, rentType: "one day", price: priceRange[0].toString() });
  }


  const searchFilter = (model: string, year: string, brand: string) => {
    setChoosenCar({ model, year, brand });
    updateFilter({ vehicelDetails: { year, brand, model } });
  }

  // console.log(searchData);

  return (
    <div className="hidden lg:block flex flex-row w-full space-x-8">
      <div className="relative">
        <div className="p-2">
          <div className="flex justify-between mt-2 mb-4">
            <p className="text-black dark:text-black font-semibold ml-4">Filter By</p>
            <button className="text-blue-700 cursor-pointer hover:underline"
              onClick={() => resetFilter()}
            >Reset filter</button>
          </div>
          <div className="border  rounded-2xl bg-gray-50">
            <div className="relative left-[10%]">
              {/* <SearchIcon className="dark:text-black"/> */}
              <input
                type="text"
                placeholder="search here"
                className="p-2 outline-none w-[80%] bg-gray-50 dark:text-black dark:border-none"
                onChange={(e) => searchDataFilter(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 dark:border-none dark:p-2 dark:rounded-2xl border-t border-b dark:bg-darkOrange">
          <div className="p-4 darkLbg-darkOrange lg:w-[100%]">
            <p className="text-sm font-medium text-gray-700 mb-2 dark:text-white dark:font-semibold dark:ml-2">Rent Type</p>
            <div className="relative flex flex-col sm:flex-row lg:flex-row gap-1 sm:mr-[30px] md:mr-[20%] lg:-mr-[15%]">
              <Button
                variant={selectedRentType === "Any" ? "default" : "outline"}
                onClick={() => setSelectedRentType("Any")}
                className="flex-1 gap-1 lg:flex-0 max-w-[100px] text-[12px]"
              >
                <Circle className="h-4 w-4" />
                Any
              </Button>
              <Button
                variant={selectedRentType === "Per Day" ? "default" : "outline"}
                onClick={() => setSelectedRentType("Per Day")}
                className="flex-1 gap-1 lg:flex-0 max-w-[100px] text-[12px]"
              >
                <Calendar className="h-4 w-4" />
                Per Day
              </Button>
              <Button
                variant={selectedRentType === "Per Hour" ? "default" : "outline"}
                onClick={() => setSelectedRentType("Per Hour")}
                className="flex-1 gap-1 lg:flex-0 max-w-[100px] text-[12px]"
              >
                <Clock className="h-4 w-4" />
                Per Hour
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-4">
            <div className="p-4 rounded-lg shadow-sm dark:bg-darkOrange bg-white rounded-2xl">
              <Label className="text-sm font-medium text-gray-700 dark:text-white dark:font-semibold dark:ml-2">
                Price Range: Kes
              </Label>
              <div className="flex justify-between items-center mt-2 mb-4">
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-24 dark:font-semibold dark:border-white"
                />
                <span className="mx-2 text-gray-500 dark:text-white dark:font-semibold">to</span>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-24 dark:font-semibold dark:border-white"
                />
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={3000}
                max={30000}
                step={1}
                minStepsBetweenThumbs={1}
              />
            </div>
          </div>
          <div className="mt-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="dark:bg-darkOrange dark:border-none dark:font-semibold">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter vehicle type
                </Button>
              </DrawerTrigger>
              <DrawerContent className="dark:bg-darkOrange">
                <DrawerHeader>
                  <DrawerTitle>Filter Cars</DrawerTitle>
                </DrawerHeader>
                <div className="p-4 space-y-6">
                  {/* Car Brand Selector */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-white dark:font-semibold">
                      Car Brand
                    </Label>
                    <Select onValueChange={setBrand} value={brand}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent >
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand} >
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Car Model Selector */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-white dark:font-semibold">
                      Car Model
                    </Label>
                    <Select onValueChange={setModel} value={model}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        {carModels.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Year Selector */}
                  <div>
                    <Label className="text-sm font-medium text-gray-700 dark:text-white dark:font-semibold">
                      Year
                    </Label>
                    <Select onValueChange={setYear} value={year}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button onClick={() => searchFilter(brand, model, year)}>
                      Apply Filters
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div className="mt-4 flex space-between border-t dark:border-none dark:p-2 dark:rounded-2xl dark:bg-darkOrange">
          <p className="text-md mb-1 mt-5 dark:text-white">Transmission</p>
          <Card className="dark:bg-black w-[50%] mt-3 ml-8 border-none shadow-none">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-white text-black border-gray-300"
                >
                  {selectedTransmission}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-2 w-full bg-white text-black shadow-lg rounded-md">
                <div className="flex flex-col space-y-1">
                  {transmissionTypes.map((type) => (
                    <button
                      key={type}
                      className="text-left p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                      onClick={() => setSelectedTransmission(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </Card>
        </div>
        <div>
          <div className="p-4 rounded-2xl shadow-sm bg-white dark:bg-darkOrange mt-4">
            <Label className="text-sm font-medium text-gray-700 dark:text-white dark:font-semibold mb-5">
              Fuel Type
            </Label>
            <div className="mt-2 space-y-2">
              {fuelTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedFuelTypes.includes(type)}
                    onCheckedChange={() => handleFuelTypeChange(type)}
                  />
                  <Label htmlFor={type} className="text-sm font-normal">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-b">
          <Button
          className="w-full bg-black"
          >
              Find Vehicle
          </Button>
        </div>
      </div>
    </div>
  );
}