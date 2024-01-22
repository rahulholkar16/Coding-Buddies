import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import mainImage from "../../assets/main1.png";
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";
import TeamCard from "../../components/TeamCard/TeamCard";
import Footer from "../../components/Footer/Footer";

const textobj = [
    {
        Heading: "What we do ?",
        Paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et"
    },
    {
        Heading: "Meet Talent in our Team",
        Paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus ett"
    },

]

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="main-Cointer">
                <div id="main-first-page">
                    <div className="green-color">
                        <div className="leftdiv">
                            <div id="leftdiv-main-text">
                                <p>Students Coding Club</p>
                            </div>
                            <div className="leftdiv-secoundry-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et
                                </p>
                            </div>
                            <button className="btn1">Click here</button>
                        </div>
                    </div>

                    
                    <div className="rightdiv">
                        <img src={mainImage} alt="Main" />
                    </div>
                </div>


                

                <div className="main-secound-page-cotainer">
                        <div id="main-secound-page">
                            <div className="main-secound-page-first-div">
                                <p className="main-secound-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="main-secound-page-secound-div">
                                <p className="main-secound-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="main-secound-page-third-div">
                                <p className="main-secound-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="green-color2">
                            <div className="third-container">
                                <Text Heading={textobj[0].Heading} Paragraph={textobj[0].Paragraph}/>
                            </div>
                    </div>
                

                <div className="fourth-container">
                    <Card />
                </div>

                <div className="third-container green-color2">
                    <Text Heading={textobj[1].Heading} Paragraph={textobj[1].Paragraph}/>
                </div>
                
                <div className="team-section">
                    <TeamCard />
                </div>


                <div className="fift-container">
                    <div className="fift-container-left-div">
                        <a href="#"><img src="https://i.ibb.co/87246s0/main2.png" alt="main2" border="0" /></a>
                    </div>
                    <div className="fift-container-right-div">
                            <div className="fift-container-right-div-txt">We are always looking for new exciting projects and collaborations. Feel Free to contact us!</div>
                            <div className="input">
                                <input type="text" className="input-1" placeholder="Your Name*"/>
                                <input type="text" className="input-2" placeholder="Your Email*"/>
                                <input type="text" className="input-3" placeholder="Your Message*"/>
                            </div>
                            <button className="btn2" role="button">Send Message</button>
                    </div>
                </div>
                <Footer />
            </div>
            
        </>
    );
};

export default Home;
