import { Navigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export function ProtectedRoute({ children }) {
    const { user } = useUser();

    // Si no hay usuario autenticado, redirige al login
    if (!user?.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Si hay usuario, muestra el contenido protegido
    return children;
}