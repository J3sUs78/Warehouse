// Client/src/components/pages/AdminRegister.jsx
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [error, setError] = useState('');
    const [cargando, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Crear el usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar el rol y el departamento en Firestore
            const db = getFirestore();
            await setDoc(doc(db, "users", user.uid), {
                email: email,
                role: role,
                department: department,
            });

            console.log("Usuario registrado:", user);
            setEmail('');
            setPassword('');
            setRole('');
            setDepartment('');
        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <div className="background">
                <form onSubmit={handleSubmit}>
                    <h3>Registro de nuevo usuario</h3>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="input-container">
                        <label>Correo electronico</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Clave</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Grupo</label>
                        <input
                            type="text"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Departamento</label>
                        <input
                            type="text"
                            required
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="regUser" disabled={cargando} >
                        {cargando ? <p className="regUser">Registrando...</p> : <p className="regUser">Registrar Usuario</p>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminRegister;
