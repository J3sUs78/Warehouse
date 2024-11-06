import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Settings from '../components/pages/Settings';
import Orders from '../components/pages/Orders';
import Products from '../components/pages/Products';
import Categories from '../components/pages/Categories';
import Departments from '../components/pages/Departments';
import Proccess from '../components/pages/Proccess';
import AdminRegister from '../components/pages/AdminRegister';
import { ErrorPage } from '../components/common/ErrorPage';
import Login from '../components/pages/Login';
import Reports from '../components/pages/Reports';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/process" element={<Proccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/adminregister" element={<AdminRegister />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default AppRoutes; // Asegúrate de que esta línea esté presente