//const API_ENDPOINT = "http://localhost:5000/api/v1";
const API_ENDPOINT = "https://loan-backend2.onrender.com/api/v1"
const headers = {
  "Content-Type": "application/json"
}
const token = localStorage.getItem("token")


export {API_ENDPOINT, headers, token}