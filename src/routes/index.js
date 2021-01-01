import Login from "../pages/common/Login";
import Register from "../pages/common/Register";

export const mainRoutes = [
    {
        path: '/register',
        components: Register
    },
    {
        path: '/login',
        components: Login
    }
]