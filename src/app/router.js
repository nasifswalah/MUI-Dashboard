import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Signin/Signin";
import ProductsPage from "./pages/Products/Products";
import OrdersPage from "./pages/Orders/Orders";
import SettingsPage from "./pages/Settings/Settings";

export function Router(){
    return(
    <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="products" element={<ProductsPage/>} />
        <Route path="orders" element={<OrdersPage/>} />
        <Route path="settings" element={<SettingsPage/>} />
    </Routes>
);
}