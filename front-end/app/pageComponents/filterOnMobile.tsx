"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Circle, Calendar, Clock } from "lucide-react";
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


export default function FilterOnMobileComponent() {
    const [selectedRentType, setSelectedRentType] = useState("Select Rent Type");
    const rentTypes = ["Daily", "Weekly", "Monthly", "Long-Term", "Hourly"];
    const [priceRange, setPriceRange] = useState<[number, number]>([3500, 30000]);
    const [choosenCar, setChoosenCar] = useState<string>("");

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
    return (
        <div>
            <div className="relative">
                <div className="p-2">
                    <div className="flex justify-between mt-2 mb-4">
                        <p className="text-black dark:text-black font-semibold ml-4">Filter By</p>
                        <p className="text-blue-700 cursor-pointer hover:underline">Reset filter</p>
                    </div>
                    <div className="border  rounded-2xl bg-gray-50">
                        <div className="relative left-[10%]">
                            {/* <SearchIcon className="dark:text-black"/> */}
                            <input
                                type="text"
                                placeholder="search here"
                                className="p-2 outline-none w-[80%] bg-gray-50 dark:text-black dark:border-none"
                                onChange={(e) => setChoosenCar(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 dark:border-none dark:p-2 dark:rounded-2xl border-t border-b dark:bg-darkOrange">
                    <div className="p-4 darkLbg-darkOrange lg:w-[100%]">
                        <p className="text-sm font-medium text-gray-700 mb-2 dark:text-white dark:font-semibold dark:ml-2">Rent Type</p>
                        <div className="relative flex flex-row gap-x-4 sm:flex-row lg:flex-row gap-1 sm:mr-[30px] md:mr-[20%] lg:-mr-[15%]">
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
                  <Button onClick={() => console.log({ brand, model, year })}>
                    Apply Filters
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
    )
}