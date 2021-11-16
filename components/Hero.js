import React from 'react';
import { Button, Row, Col } from 'antd';

import { Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image'

function AppHero() {
    return (
        <div id="hero" className="heroBlock">
            <div key="1" className="container-fluid">
                <div className="content">
                    <h3>Industry Standard Analytical Platform for transparent & fraud-free influencer marketing </h3>
                    <p>Gives brands & agencies more ways to make <u> budgets work harder</u>.</p>
                    <div className="btnHolder">
                        <div className="btnContainer"><Button className="heroButton1" size="large">GET STARTED FREE</Button></div>
                        <div className="btnContainer"><Button className="heroButton2" size="large"> CHECK INFLUENCER</Button></div>
                    </div>
                    <div className="socialMedias">
                        <Image
                            alt="social-medias"
                            src="https://hypeauditor.com/s/auditor-landing/dist/assets/img/index-exp.png?1631696650.4146"
                            width={100}
                            height={45}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppHero;