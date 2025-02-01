import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.username, formData.password);
            navigate("/dashboard"); // Redirect after login
        } catch (err) {
            setError("Invalid credentials. Try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Se Connecter</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
                <button type="submit">Se Connecter</button>
            </form>
        </div>
    );
}
