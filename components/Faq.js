import React from 'react';

import { Collapse, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Image from 'next/image'

import image1 from '../public/images/Index_01.png';

function AppFaq() {
    return (
        <div id="faq" className="joinBlock">
            <div className="container-fluid">
                <div className="joinTitle">
                    <h2>Join 750,000+ influencers and businesses
                        using HypeAuditor today:
                    </h2>
                    {/* <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p> */}
                </div>
                <div>
                    <Row gutter={[20, 20]}>

                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                            <Row>

                                <Card className="joinCardAction">
                                    <div className="joinCardTitle">
                                        <h2>See HypeAuditor in Action</h2>
                                    </div>
                                    <div className="joinCardDetail">
                                        <p>Get familiar with the HypeAuditor Influencer Marketing Platform by exploring it with our sales manager.</p>
                                    </div>
                                    <div className="joinCardButton">
                                        {/* <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "50%" }} size="large">REQUEST DEMO</Button> */}
                                        <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "200px", margin: "10px auto" }} size="large">
                                            REQUEST DEMO
                                        </Button>

                                    </div>
                                </Card>

                            </Row>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
                            <Card className="joinCardAccount">
                                <div className="joinCardTitle">
                                    <h2>Create free account</h2>
                                </div>
                                <div className="joinCardDetail">
                                    <p>Track own account progress, search & check influencers or just become acquainted with our product. 100% free.</p>
                                </div>
                                <div className="joinCardButton">
                                    <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "200px", margin: "10px auto" }} size="large">GET STARTED</Button>

                                    {/* <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "50%" }} size="large">GET STARTED</Button> */}
                                </div>
                            </Card>
                        </Col>


                    </Row>
                </div>

            </div>
        </div>
    );
}

export default AppFaq;