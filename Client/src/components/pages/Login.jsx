import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext'; // Asegúrate de que este contexto esté configurado

const Login = () => {
    const { login } = useUser(); // Función para manejar el inicio de sesión
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        login(username, password); // Asegúrate de que esta función esté implementada en tu contexto
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;