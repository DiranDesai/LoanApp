import { API_ENDPOINT, headers, token } from "../constants.js";

const applyLoan = async (loanData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/apply-loan`, {
      method: "POST",
      headers: {...headers, Authorization: `Bearer ${token}`},
      body: JSON.stringify(loanData),
    });
    if (!response.ok) {
      const text = await response.text();
      console.error("Server responded with non-JSON:", text);
      throw new Error("Server Error: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error applying for a loan:", error);
    throw error;
  }
};


export {applyLoan}