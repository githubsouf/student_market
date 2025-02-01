const API_URL = "http://localhost:8080/api/auth"; // Backend API URL

interface RegisterData {
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    role: string;
}

export const login = async (username: string, password: string): Promise<string> => {
    const response = await fetch(`${API_URL}/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Invalid username or password");

    const token = await response.text();
    localStorage.setItem("token", token);
    localStorage.setItem("username", username); // Store username for UI display
    return token;
};

// Function to register a user (JSON body)
export const register = async (userData: RegisterData): Promise<string> => {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    return await response.text(); // Return success message
};

export const logout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
};
