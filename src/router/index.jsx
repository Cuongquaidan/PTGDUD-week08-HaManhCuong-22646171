import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import DashboardAdmin from "../pages/DashboardAdmin";


const router = createBrowserRouter([
    {
       element: <AdminLayout></AdminLayout>,
       children:[
        {
            path: "/admin/dashboard",
            element: <DashboardAdmin></DashboardAdmin>
        }
       ]
    }
])

export default router;