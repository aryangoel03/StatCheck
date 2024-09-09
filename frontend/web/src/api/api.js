// const BASE_URL = "http://192.168.1.187:3000/api";  // Home URL
const BASE_URL = "http://localhost:3000/api";    // Localhost URL
const USER_URL = `${BASE_URL}/users`;
const DATE_URL = `${BASE_URL}/dates`;
const HABIT_URL = `${BASE_URL}/habits`;


export const register = async (userInfo) => {
    const response = await fetch(`${USER_URL}/register`, {
        method: "POST",
        headers: {
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
            'Content-type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
    }
    const { token, username } = await response.json();

    if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
    } else {
        throw new Error("Token not received");
    }

    return { token, username };
};

export const addDate = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${DATE_URL}/addDate`, {
    method: "POST",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Could not add date");
    }
    return await response.json();
}

export const getDate = async (date) => {
    const token = localStorage.getItem('token');
    const dateString = date.toISOString();
    const response = await fetch(`${DATE_URL}/getDate?date=${encodeURIComponent(dateString)}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Could not retrieve date");
    }
    return await response.json();
}

export const addHabit = async (habitInfo) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HABIT_URL}/addHabit`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(habitInfo)
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Adding habit failed");
    }
    return await response.json();
}

export const completeHabit = async (habitId, completed) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HABIT_URL}/completeHabit`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ habitId, completed })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Completing habit failed");
    }
    return await response.json(); 
}

export const deleteHabit = async (habitId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HABIT_URL}/deleteHabit`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ habitId })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Deleting habit failed");
    }
    return await response.json();
}