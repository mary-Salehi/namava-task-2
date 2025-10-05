import axios from "axios"
export const API_BASE = "https://www.namava.ir/api"

const apiService = async ({ endpoint, params }) => {
  const response = await axios.get(`${API_BASE}${endpoint}`, {
    params,
  })

  return response
}

export default apiService