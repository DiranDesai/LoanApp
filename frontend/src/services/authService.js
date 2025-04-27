const API_ENDPOINT = "http://localhost:5000/api/v1";
const headers = {
  "Content-Type": "application/json"
}
const token = localStorage.getItem("token")

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/register`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
        const text = await response.text();
        console.error('Server responded with non-JSON:', text);
        throw new Error('Server Error: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/login`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const text = await response.text();
        console.error('Server responded with non-JSON:', text);
        throw new Error('Server Error: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

const getCurrentUser = async(token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/currentUser`, {
      headers: {...headers, Authorization: `Bearer ${token}`},
    });

    if (!response.ok) {
        const text = await response.text();
        console.error('Server responded with non-JSON:', text);
        throw new Error('Server Error: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }

}

export { registerUser, loginUser, getCurrentUser };
