import { createBrowserRouter } from "react-router-dom";
import { About, Events, Home } from "./pages";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: []
    },
    {
        path: '/about',
        Component: About,
        children: []
    },
    {
        path: '/eventos',
        Component: Events,
        children: []
    }
])

export default router;