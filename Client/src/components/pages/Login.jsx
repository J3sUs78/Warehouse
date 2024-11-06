import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext'; // Asegúrate de que esta importación sea correcta
import '../../Login.css';
const Login = () => {
    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className="background">

            <form onSubmit={handleSubmit}>
                <h3>Iniciar Sesión</h3>

                <label for="username">Usuario</label>
                <input
                    type="text"
                    placeholder="Email o Teléfono"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label for="password">Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    id="password"
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