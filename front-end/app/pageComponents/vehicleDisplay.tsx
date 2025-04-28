import { vehiclesList } from "@/jsonDataTest/vehicle"
import { Fuel, Car, MapPin } from "lucide-react"


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



export default function VehicleListDisplay() {
    return (
        <div className="max-h-[100vh] z-100">
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
                                <Fuel size={18} className=""/>
                                {car.fuel}
                            </div>
                            <div className="flex flex-row gap-x-2 text-gray-700 border rounded-md p-1 bg-[var(--light-blue)] cursor-pointer">
                                <Car size={18}/>
                                {car.fuel}
                            </div>
                            <div className="flex flex-row gap-x-2 text-gray-700 border rounded-md p-1 bg-[var(--light-blue)] cursor-pointer">
                                <MapPin size={18}/>
                                <p>Nairobi</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}