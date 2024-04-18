import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import  toast  from 'react-hot-toast';




const useLogin = () => {
  const [loading, setLoading] = useState(false)

  const {setAuthUser} = useAuthContext()

  const login = async (username, password) => {
    const success = handleInputErrors(username, password)
    if (!success) return
    setLoading(true)
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })

        const data = await res.json()

        if (res.ok) {
            // Successful login, set the authenticated user
            setAuthUser(data)
            localStorage.setItem("chat-user", JSON.stringify(data))
        } else {
            // Failed login, display error message
            throw new Error(data.error)
            
        }
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}


  return {
    login,
    loading
  }
}
export default useLogin


function handleInputErrors(username, password) {
    if(!username || !password ) {
      toast.error('All fields are required')
      return false
    }
  
      
    if(password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return false
    }
    return true
  }
  