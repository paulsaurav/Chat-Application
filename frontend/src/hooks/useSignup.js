import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = React.useState(false)

  const {setAuthUser} = useAuthContext()

  const signup = async ({fullName, username, email, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, username, email, password, confirmPassword, gender})
    if(!success) return

    try {
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fullName, username, email, password, confirmPassword, gender})
        })
        if (!res.ok) {
            const errorMessage = await res.text();
            throw new Error(errorMessage || 'Failed to sign up');
        }
        toast.success('Signup successful');
        const data = await res.json()
        localStorage.setItem('chat-user', JSON.stringify(data))

        setAuthUser(data)


    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

  return {loading, signup}
}

export default useSignup

function handleInputErrors({fullName, username, email, password, confirmPassword, gender}) {
  if(!fullName || !username || !email || !password || !confirmPassword || !gender) {
    toast.error('All fields are required')
    return false
  }

  if(password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }

  if(password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }
  return true
}
