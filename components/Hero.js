import React from 'react';
import Image from 'next/image'

function AppHero() {
    return (
        <div id="hero" className="heroBlock">
            <div key="1" className="container-fluid">
                <div className="content">
                    <h3>Analytical platform & influencer marketing giving you better reach.</h3>
                    <p>Creating exposure for brands & agencies everywhere and anywhere <u> to make you visible</u>.</p>
                    <div className="btnHolder">
                        <div className="btnContainer"><button className="heroButton1" size="large">GET STARTED</button></div>
                        <div className="btnContainer"><button className="heroButton2" size="large"> CHECK INFLUENCER</button></div>
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