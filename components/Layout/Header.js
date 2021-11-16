import React, { useState } from 'react';
import Image from 'next/image'
import { Anchor, Drawer, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBolt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import image1 from '../../public/logo.svg';
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
        <div className="header">
            <div className="logo">
                <Image alt="logo" src={image1} className="logoImg" />
            </div>
            <div className="mobileHidden">
                <input className="search__input" type="text" placeholder="Analyze any influencer..." />
                <Anchor targetOffset="65">
                    {/* <Link href="#hero" title="WHY HYPEAUDITOR?" /> */}
                    <Link href="" title="WHY HYPEAUDITOR?" />
                    <Link href="" title="PRICING" />
                    <Link href="" title="RESOURCES" />
                    <Link href="" title="ABOUT" />
                    <Link href="" title="LOG IN" className="loginLink" />
                </Anchor>
                <Button style={{ backgroundColor: "#ff6436", borderRadius: "25px", border: "1px solid #ff6436", color: "white", fontWeight: "600", padding: "0 50px", margin: "10px auto", height: "40px" }} >GET STARTED</Button>
            </div>
            <div className="mobileVisible">
                <Button onClick={showDrawer}>
                    <FontAwesomeIcon icon={faBars} className="fas"></FontAwesomeIcon>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <input className="search__input" type="text" placeholder="Search" />
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
        </div>
        // </div>
    );
}

export default AppHeader;