import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styles from './Home.module.scss';
// import { useAuth } from '../../contexts/authContext'

function Home() {
    // const { currentUser } = useAuth()
    return (
        <>
            {/* <div className="text-2xl font-bold pt-14">
                Привет {currentUser.displayName ? currentUser.displayName : currentUser.email}, ты вошел в систему.
            </div> */}
            <div className={styles.enter}>
                <Button variant="contained">
                    <Link to='../login' className={styles.link}>Добро пожаловать</Link></Button>
            </div>
        </>
    )
}

export default Home