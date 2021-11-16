import React from 'react';
import Image from 'next/image'

import image1 from '../public/images/Index_01.png';
import image2 from '../public/images/Index_02.png';
import image3 from '../public/images/Index_03.png';
import image4 from '../public/images/Index_04.png';
// import image5 from '../public/images/unlimited-features.jpg';
// import image6 from '../public/images/advanced-option.jpg';

import logo from '../public/ic_broken_image.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChartPie, faDesktop, faDatabase, faCheck, faChartBar, faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const items = [
    {
        key: '1',
        icon: <FontAwesomeIcon icon={faChartBar} color="#0d9fe6"></FontAwesomeIcon>,
        section: 'DISCOVERY HUB',
        title: 'Find the best influencers with Influencer Discovery, the largest in the market',
        content: 'Discover perfectly matched Instagram, YouTube and TikTok influencers across 12M+ profiles using a set of filters that will help to refine the list to high-quality profiles.',
        image: image1,
        color: "#0d9fe6"
    },
    {
        key: '2',
        icon: <FontAwesomeIcon icon={faDatabase} color="#ff6436"></FontAwesomeIcon>,
        section: 'REPORT HUB',
        title: 'Industry standard in advanced Instagram, YouTube, TikTok and Twitch analytical reports',
        content: 'Over 35 in-depth metrics to analyze Instagram, YouTube, TikTok & Twitch influencers. Audience location, age-gender split, authenticity & reachability, overall audience quality.',
        image: image2,
        color: "#ff6436"
    },
    {
        key: '3',
        icon: <FontAwesomeIcon icon={faDesktop} color="#8455d0"></FontAwesomeIcon>,
        section: 'CAMPAIGN MANAGEMENT',
        title: 'Manage and monitor your influencer marketing campaigns',
        content: 'Manage and automate your campaign at every stage from influencer lists to a final campaign report. Monitor your campaign effectiveness and make necessary adjustments.',
        image: image3,
        color: "#8455d0"
    },
    {
        key: '4',
        icon: <FontAwesomeIcon icon={faDatabase} color="#8455d0"></FontAwesomeIcon>,
        section: 'MARKET ANALYSIS',
        title: 'Get a snapshot of the influencer marketing landscape',
        content: 'Explore the competitive landscape and evaluate influencer marketing performance of your rivals. Compare multiple brands side by side and discover the top market players in a particular country and niche.',
        image: image4,
        color: "#8455d0"
    },
]

function AppFeature() {
    return (
        <div id="feature" className="featureBlock bgGray">
            <div className="container-fluid">

                <div className="featureTitle">
                    <h2>We deliver industry standard data & insights for success in Influencer marketing:</h2>
                </div>
                <Row gutter={[20, 20]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>11M+</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Total accounts in database</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>15k</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>New Influencers discovered daily</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>5M+</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Total report requests processed</p>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Card className="featureCard">
                            <div className="featureCardTitle">
                                <h2>95.5%</h2>
                            </div>
                            <div className="featureCardDetail">
                                <p>Of all known fraud activity detected</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="feature_hor_divider">
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                    <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="featureTitle">
                    <h2>Use HypeAuditor on every step of Influencer marketing workflow & analytics:</h2>
                </div>
                {items.map(item => {
                    return (
                        <div key={item.key} className="featureStep">
                            <Row gutter={[20, 20]} align="middle">
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>
                                    <Card className="analyticsCard">
                                        <div className="analyticsSection">
                                            <div> {item.icon}

                                            </div>
                                            <h4 style={{ color: `${item.color}` }}>{item.section}</h4>
                                        </div>
                                        <div className="analyticsTitle">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="analyticsDetail">
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="analyticsLink">
                                            <a href="">LEARN MORE ABOUT {item.section}</a>
                                            <FontAwesomeIcon icon={faArrowRight} className="linkIcon"></FontAwesomeIcon>
                                        </div>
                                    </Card>
                                </Col>
                                {/* <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 2 }}>
                                    <div className="feature_hor_divider">
                                        <div className="div_img" ><Image alt="brand, agency, platform" src={logo} /></div>
                                    </div>
                                </Col> */}
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11 }}>

                                    <div className="featureStepImage">
                                        <Image src={item.image} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default AppFeature;