import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import DashboardAdmin from "../pages/DashboardAdmin";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";
import Analytics from "../pages/Analytics";
import Messages from "../pages/Messages";
import Integrations from "../pages/Integrations";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "dashboard",
                element: <DashboardAdmin></DashboardAdmin>,
            },
            {
                path: "projects",
                element: <Projects></Projects>,
            },
            {
                path: "teams",
                element: <Teams></Teams>,
            },
            {
                path: "analytics",
                element: <Analytics></Analytics>,
            },
            {
                path: "messages",
                element: <Messages></Messages>,
            },
            {
                path: "integrations",
                element: <Integrations></Integrations>,
            },
        ],
    },
]);

export default router;
