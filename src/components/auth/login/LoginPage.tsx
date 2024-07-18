import React, { Fragment, useState } from "react"
import { TextField, Button, Typography, Popover } from "@mui/material"
import styles from './LoginPage.module.scss';
import { Navigate, NavLink } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isValid, setIsValid] = useState(false);
    const checkPassword = () => {
        // Проверка длины пароля
        if (password.length < 6) {
            setIsValid(false);
            return;
        }

        // Проверка наличия хотя бы одной заглавной буквы
        const hasUpper = password.split('').some(char => char.toUpperCase() === char);
        setIsValid(hasUpper);
    };


    const [data, setData] = useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <>

            <p className={styles.header}>Войдите в свой профиль</p>

            {isValid ? <span></span> : <span className={styles.p}>Пароль не соответствует правилу</span>}

            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    ),
                }}
                className={styles.input} type="email" fullWidth={true} margin="normal" variant="outlined" placeholder="Электронная почта" onChange={(e) => setData(e.target.value)} />
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon />
                        </InputAdornment>
                    ),
                }}

                className={styles.input} type={show ? "text" : "password"} fullWidth={true} margin="normal" variant="outlined" placeholder="Пароль" onChange={(e) => { setData(e.target.value); setPassword(e.target.value) }} />
            <div className={styles.icon} onClick={handleClick}>{show ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}</div>
            <Typography variant="body1" sx={{ fontFamily: 'Inter', mt: 1 }}><span className="incitingText">Забыли пароль?</span></Typography>
            <Button className={styles.button} type="submit" fullWidth={true} variant="contained" sx={{ mt: 4 }} disabled={!data} onClick={checkPassword}>Войти</Button >
            <Typography variant="body1" sx={{ fontFamily: 'Inter', mt: 1 }} className={styles.register}><span className="incitingText"><NavLink to='../register' className={styles.link}>Зарегистрироваться</NavLink> </span></Typography>
        </>

    )
}

export default LoginPage