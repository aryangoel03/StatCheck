const BASE_URL = "localhost:3000/api"
const USER_URL = `${BASE_URL}/users`

export const registerUser = async (userInfo) => {
    const response = await fetch(`${USER_URL}/register`, {
        method: "POST",
        headers: {
            'Content-type': `application/json`
        },
        body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
    }
    return await response.json();
}

export const login = async (loginDetails) => {
    const response = await fetch(`${USER_URL}/login`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
    }
    return await response.json();
}