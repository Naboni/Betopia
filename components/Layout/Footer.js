import React from 'react';

import { BackTop, Row, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


function AppFooter() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <Row justify="start" className="footerLink" gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} >
                        <div className="footerHeader">

                            <div>
                                <h3> NEED MORE INFO? </h3>
                            </div>
                            <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", padding: "0 40px" }} size="large">REQUEST LIFE DEMO</Button>
                        </div>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                        <h3> PLATFORM </h3>
                        <ul>
                            <li>Influencer Analytics</li>
                            <li>Influencer Discovery</li>
                            <li>Campaign Management</li>
                            <li>Market Analysis</li>
                        </ul>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                        <h3> COMPANY </h3>
                        <ul>
                            <li>Technology</li>
                            <li>Press</li>
                            <li>Customers</li>
                            <li>Affiliate</li>
                            <li>Become a Partner</li>
                        </ul>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                        <h3> RESOURCES </h3>
                        <ul>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Free Tools</li>
                            <li>Customer Stories</li>
                            <li>HypeAuditor Academy</li>
                        </ul>
                    </Col>
                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
                        <h3> GET STARTED </h3>
                        <ul>
                            <li>Create account</li>
                            <li>Contact us</li>
                            <li>Request demo</li>
                            <li>Support</li>
                            <li>Migrate to HypeAuditor</li>
                        </ul>
                    </Col>
                </Row>
                <div className="footerLink2">
                    <ul>
                        <li> Terms </li>
                        <li> Privacy Policy </li>
                        <li> Reports Catalogue </li>
                        <li> Ranking Instagram </li>
                        <li> Ranking Youtube </li>
                        <li> Categories </li>
                    </ul>
                </div>
                <BackTop>
                    <div className="goTop"><FontAwesomeIcon icon={faArrowCircleUp} className="fas"></FontAwesomeIcon></div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;