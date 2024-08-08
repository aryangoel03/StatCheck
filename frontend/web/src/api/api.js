const BASE_URL = "http://192.168.1.187:3000/api";  // Home URL
//const BASE_URL = "http://10.89.240.74:3000/api";    // UQ URL
const USER_URL = `${BASE_URL}/users`;

export const register = async (userInfo) => {
    const response = await fetch(`${USER_URL}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
    }
    return await response.json();
};

export const login = async (loginDetails) => {
    const response = await fetch(`${USER_URL}/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
    }
    return await response.json();
};
