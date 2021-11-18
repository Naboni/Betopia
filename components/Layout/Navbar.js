import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { Button } from 'antd';

import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push("https://next-ts-fe.vercel.app/auth/signup")
    }
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <a className={styles.navlogo}>BETOPIA DIGITAL</a>
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <input className={styles.search__input} type="text" placeholder="Analyze any influencer..." />
                    <li className={styles.navitem}>
                        <Link href='/'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Why Betopia?</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Resources</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href=''>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='https://next-ts-fe.vercel.app/auth/signin'>
                            <a className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Login</a>
                        </Link>
                    </li>
                    <button className={styles.navbarButton} onClick={handleClick}>GET STARTED</button>
                </ul>
                <button className={isOpen === false ?
                    styles.hamburger : styles.hamburger + ' ' + styles.active}
                    onClick={openMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </div>
    )
}
