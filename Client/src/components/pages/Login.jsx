import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext'; // Asegúrate de que esta importación sea correcta

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
            <div className="shape"></div>
            <div className="shape"></div>
            <form onSubmit={handleSubmit}>
                <h3>Iniciar Sesión</h3>

                <label htmlFor="username">Usuario</label>
                <input
                    type="text"
                    placeholder="Email o Teléfono"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Iniciar Sesión</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
                </div>
            </form>
        </div>
    );
};

export default Login;