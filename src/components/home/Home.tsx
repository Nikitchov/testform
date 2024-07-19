import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styles from './Home.module.scss';

function Home() {
    return (
        <>
            <div className={styles.enter}>
                <Button variant="contained">
                    <Link to='../login' className={styles.link}>Добро пожаловать</Link></Button>
            </div>
        </>
    )
}

export default Home