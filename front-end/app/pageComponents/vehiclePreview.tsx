import { vehiclesList } from "@/jsonDataTest/vehicle"

let randomCar = vehiclesList[1];

export default function VehiclePreviewPage() {
    return (
        <div className="p-4 font-stylish">
            <div>
                {/* Selected vehicle images display */}
                <div>
                    <img src={randomCar.images[0]} alt="vehicle image" />
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-semibold text-center">{randomCar.model}</p>
                    <div>
                        <p>Price: {randomCar.hirePrice}</p>
                        <p>color: {randomCar.color}</p>
                        <p>Milage: {randomCar.milage} Km</p>
                        <p>
                            Brand: {randomCar.brand}
                        </p>
                        <p>Year: {randomCar.year}</p>
                    </div>
                </div>
                <div className="flex flex-col align-center justify-center">
                    <button className="flex flex-row gap-x-6 font-lg border p-4 rounded-sm  bg-[var(--slate-blue)] cursor-pointer hover:bg-[var(--teal)] justify-center">
                        <div className="text-lg text-white font-lora border-r">
                            <p className="mr-4">{randomCar.model}</p>
                        </div>
                        <div className="text-lg text-white font-lora border-r">
                            <p className="mr-4">
                                Location: Nairobi
                            </p>
                        </div>
                        <div className="text-lg text-white font-lora">
                            <p>
                                Proceed to hire
                            </p>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}