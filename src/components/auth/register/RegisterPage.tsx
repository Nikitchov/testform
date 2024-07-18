import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Typography, Button, TextField } from "@mui/material"
import styles from '../login/LoginPage.module.scss'


function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



    return (
        <>
            <Typography variant="h3" padding={3} fontFamily='Inter' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" padding={3} fontFamily='Inter' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField className={styles.input} fullWidth={true} margin="normal" placeholder="Введите ваше имя" label="Имя" />
            <TextField className={styles.input} fullWidth={true} margin="normal" placeholder="Введите вашу фамилию" label="Фамилия" />
            <TextField className={styles.input} fullWidth={true} margin="normal" placeholder="Введите ваш логин" label="Логин" />
            <TextField className={styles.input} fullWidth={true} margin="normal" placeholder="Введите вашу почту" label="Почта" />
            <TextField className={styles.input} type='password' fullWidth={true} margin="normal" placeholder="Введите ваш пароль" label="Пароль" />
            <TextField className={styles.input} type='password' fullWidth={true} margin="normal" placeholder="Повторите ваш пароль" label="Повторите пароль" />
            <Button fullWidth={true} variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{ fontFamily: 'Inter', marginTop: 2 }}><span className="incitingText"><NavLink to='../login' className={styles.link}>Авторизация</NavLink></span></Typography >


        </>
    )
}

export default RegisterPage