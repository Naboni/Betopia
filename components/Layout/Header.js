import React, { useState } from 'react';
import Image from 'next/image'
import { Anchor, Drawer, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBolt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import image1 from '../../public/logo.svg';
import styles from '@/styles/Header.module.css'
const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        // <div className="container-fluid">
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* <Image alt="logo" src={image1} className="logoImg" /> */}
                <h1 style={{ margin: 0, color: "#ff6436", fontWeight: "bold", fontSize: "24px" }}>Betopia Digital </h1>
            </div>
            <div className={styles.mobileHidden}>
                <input className={styles.search__input} type="text" placeholder="Analyze any influencer..." />
                <div className={styles.linksHeader}>
                    <ul className={styles.linksHolder}>
                        <li><a className={styles.link_s} href="WHY BETOPIA?">WHY BETOPIA?</a></li>
                        <li><a className={styles.link_s} href="WHY BETOPIA?">WHY BETOPIA?</a></li>
                        <li><a className={styles.link_s} href="RESOURCES">RESOURCES</a></li>
                        <li><a className={styles.link_s} href="ABOUT">ABOUT</a></li>
                    </ul>
                </div>
                {/* <Anchor targetOffset="65">
                    <Link href="#about" title="WHY BETOPIA?" />
                    <Link href="" title="PRICING" />
                    <Link href="" title="RESOURCES" />
                    <Link href="" title="ABOUT" />
                    <Link href="https://next-ts-fe.vercel.app/auth/signin" title="LOG IN" className="loginLink" />
                </Anchor> */}
                <Button style={{ backgroundColor: "#ff6436", borderRadius: "25px", border: "1px solid #ff6436", color: "white", fontWeight: "600", padding: "0 50px", margin: "10px auto", height: "40px" }} >GET STARTED</Button>
            </div>
            <div className={styles.mobileVisible}>
                <Button onClick={showDrawer}>
                    <FontAwesomeIcon icon={faBars} className="fas"></FontAwesomeIcon>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <input className={styles.search__input} type="text" placeholder="Search" />
                    <div style={{ padding: "5px 0" }}></div>
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                    </Anchor>
                </Drawer>
            </div>
        </div >
        // </div>
    );
}

export default AppHeader;