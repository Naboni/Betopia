import React from 'react';
// import classes from '@/styles/Home.module.css';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChartPie, faDesktop, faDatabase, faCheck } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Button } from 'antd';
import AnalyticalReport from './Analytical_Report';
const items = [
    {
        key: '1',
        icon: <FontAwesomeIcon icon={faChartPie}></FontAwesomeIcon>,
        title: 'Discover Influencers',
        content: 'Discover influencers with the audiences you need within a 10M+ database',
    },
    {
        key: '2',
        icon: <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>,
        title: 'Analyze Accounts',
        content: 'Over 35 in-depth metrics to analyse Instagram, YouTube, and TikTok influencers',
    },
    {
        key: '3',
        icon: <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>,
        title: 'Manage Campaigns',
        content: 'Manage and monitor your influencer marketing campaigns',
    },
]

function AppAbout() {
    return (
        <div id="about" className="aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>A full stack of solutions at every step of influencer marketing workflow:</h2>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div style={{ margin: "20px" }}>
                                        <div className="sectionHolder">
                                            <div className="card_text">
                                                {item.title}
                                            </div>
                                            <div className="icon">
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ margin: "20px" }}>
                                        <p>{item.content}</p>
                                    </div>
                                    <div style={{ margin: "20px" }} className="aboutList">
                                        <ul>
                                            <li><FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon> &nbsp; 11M+ database</li>
                                            <li><FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon> &nbsp; Demographic search</li>
                                            <li><FontAwesomeIcon icon={faCheck} style={{ color: "#46a16d" }}></FontAwesomeIcon> &nbsp; Audience Quality filters</li>
                                        </ul>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
                                        <Button style={{ backgroundColor: "#ff6436", borderRadius: "5px", border: "1px solid #ff6436", color: "white", fontWeight: "600", width: "60%", margin: "10px auto" }} size="large">GET STARTED</Button>
                                        <Button style={{ backgroundColor: "white", borderRadius: "5px", border: "1px solid white", color: "grey", fontWeight: "600", width: "60%", margin: "0 auto" }} size="large">LEARN MORE</Button>
                                    </div>


                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>

        </div>
    );
}

export default AppAbout;