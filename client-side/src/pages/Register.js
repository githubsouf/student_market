import React, { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        role: "buyer",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            navigate("/login"); // Redirect after successful registration
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Créer un Compte</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} />
                <input type="text" name="firstname" placeholder="Prénom" onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Nom" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} />
                <select name="role" onChange={handleChange}>
                    <option value="buyer">Acheteur</option>
                    <option value="seller">Vendeur</option>
                </select>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}
