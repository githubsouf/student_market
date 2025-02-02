import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useAuthGuard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, []);
};