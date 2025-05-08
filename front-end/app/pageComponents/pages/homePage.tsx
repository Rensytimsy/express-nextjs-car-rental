import FilterComponent from "../filterComponent"
import VehicleListDisplay from "../vehicleDisplay"
import VehiclePreviewPage from "../vehiclePreview"

export default function HomePage(){
    return (
        <div className="flex flex-row gap-x-4 z-100">
            <div className="hidden lg:block p-2 w-1/4 overflow-y-auto overflow-x-hidden ">
                <FilterComponent />
            </div>
            <div className="max-h-[100vh] p-2 -ml-12 lg:-ml-0 w-screen lg:w-1/3 overflow-y-auto overflow-x-hidden">
                <VehicleListDisplay />
            </div>
            <div className="hidden lg:block p-2 w-3/6">
                <VehiclePreviewPage />
            </div>
        </div>
    )
}