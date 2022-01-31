import { DashboardContainer } from "../DashboardContainer";
import { Sidebar } from "../sidebar/Sidebar";

export function Main({children}) {
    return (
        <div
            className="flex flex-row h-screen w-screen">
            
            <Sidebar />
            <div className="flex flex-col flex-1">
                {children}
            </div>

        </div>
    )
}