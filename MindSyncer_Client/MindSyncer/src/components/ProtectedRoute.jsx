import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const userStr = localStorage.getItem("user")
  let user = null

  try {
    user = JSON.parse(userStr)
  } catch (e) {
    console.error("Error parsing user JSON", e)
  }

  console.log("ProtectedRoute user:", user)

  if (!user) {
    return <Navigate to="/SignUp" replace />
  }

  return children
}
