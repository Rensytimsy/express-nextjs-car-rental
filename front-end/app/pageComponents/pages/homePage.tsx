import FilterComponent from "../filterComponent"
import VehicleListDisplay from "../vehicleDisplay"
import VehiclePreviewPage from "../vehiclePreview"

export default function HomePage(){
    return (
        <div className="flex flex-row gap-x-4 z-100">
            <div className="p-2 w-1/4">
                <FilterComponent />
            </div>
            <div className="max-h-[100vh] p-1 w-1/3 overflow-y-auto">
                <VehicleListDisplay />
            </div>
            <div className="p-2 w-3/6">
                <VehiclePreviewPage />
            </div>
        </div>
    )
}