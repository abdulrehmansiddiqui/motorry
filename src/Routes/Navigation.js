import Header from "../Screens/Header";
import Dashboard from "../Screens/Dashboard";
import Logout from "../Screens/Logout";



const Navigation = [
    { path: "/", component: Header },
    { path: "/Logout", component: Logout },
    { path: "/Dashboard", component: Dashboard },
    
];

export default Navigation;
