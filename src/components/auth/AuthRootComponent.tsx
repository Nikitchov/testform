import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import LoginPage from "./login/LoginPage"
import RegisterPage from "./register/RegisterPage"
import { Box } from "@mui/material"
import './style.scss'
import axios from 'axios';

const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [result, setResult] = useState(null)
    const location = useLocation()
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://test.com/api', {
                email: email,
                password: password
            });

            setResult(response.data);
        } catch (error) {
            console.error(error);
            setResult(null);
        }
    };

    return (
        <div className='root'>
            <form className='form' onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={535}
                    maxHeight={500}
                    margin='auto'
                    padding={5}
                >
                    {location.pathname === '/login' ? <LoginPage onEmailChange={handleEmailChange}
                        onPasswordChange={handlePasswordChange} /> : location.pathname === '/register' ? <RegisterPage /> : null}
                </Box>
            </form>
        </div >
    )

}

export default AuthRootComponent