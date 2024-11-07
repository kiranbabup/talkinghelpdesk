import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
// import welcomeImg from "../Data/images/welcomeimg-removebg.png";
import { Grievances, HeaderComponentHeadText, MainPageHeadText } from "../Data/Content";
// import imagehere from "../Data/images/imagehere.png";
import RequestPage from "./RequestPage";
import othimg from "../Data/images/SVGImgs/OtherProblems.svg";
import VideoCall from "./VideoCall";
import StartPage from "./StartPage";
// import apLogo from "../Data/images/apLogo.png";
import apLogo from "../Data/images/Andhrapradesh-Logo.svg";
import cbnsmall from "../Data/images/cbnsmall.jpg";
import modismall from "../Data/images/modiLogo.jpg";
import pksmall from "../Data/images/pkshort.jfif";
import prHeadLogo from "../Data/images/panchayathi_logo.png";

const homePageCSS = {
    background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"
}

const Home = () => {
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [enterPage, setEnterPage] = useState(true);
    const [isvideoCall, setisvideoCall] = useState(false);
    const [gotoFormPage, setGotoFormPage] = useState(false);
    const [selectedGrievance, setSelectedGrievance] = useState({ grievanceImg: "", grievanceName: "" });
    const [innerAudio, setInnerAudio] = useState(false);
    const audioRef = useRef(null);
    const audioRef2 = useRef(null);

    const onEnterHome = () => {
        setEnterPage(false);
        setAudioPlayed(true);
    }

    useEffect(() => {
        if (audioPlayed) {
            audioRef.current = new Audio(welcomeAudio);
            audioRef.current.play();
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [audioPlayed]);

    const handleGrievanceClick = (grievanceImg, grievanceName) => {
        setisvideoCall(false);
        setInnerAudio(false);
        setGotoFormPage(false);
        console.log(grievanceName);
        setSelectedGrievance({ grievanceImg, grievanceName });
        setEnterPage(false);
        setGotoFormPage(true);
        if (innerAudio === false) {
            setInnerAudio(true);
        }
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (innerAudio) {
            audioRef2.current = new Audio(welcomeAudio);
            audioRef2.current.play();
        }
        return () => {
            if (audioRef2.current) {
                audioRef2.current.pause();
                audioRef2.current.currentTime = 0;
            }
        };
    }, [innerAudio]);

    const onPrevClick = () => {
        setisvideoCall(false);
        setEnterPage(false);
        setGotoFormPage(false);
        setInnerAudio(false);
        if (audioRef2.current) {
            audioRef2.current.pause();
            audioRef2.current.currentTime = 0;
        }
        setAudioPlayed(true);
    }

    const handleVideoCallClick = () => {
        setEnterPage(false);
        setisvideoCall(true);
        setInnerAudio(true);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }
    return (
        <div  >
            {
                enterPage ?
                    <Box style={homePageCSS}>
                        <StartPage onEnterHome={onEnterHome} />
                    </Box>
                    :
                    <Box sx={{ background: "#0f172a", height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box sx={{
                            width: "100%",
                            height: "5rem",
                            backgroundColor: "#edf2fa",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "5px 0px",
                        }}>
                            <Box
                                sx={{
                                    pl: 2,
                                    display: "flex", alignItems: "center"
                                }}>
                                <Box component="img" src={apLogo} alt="imagehere" sx={{ width: "4.2rem", height: "4.5rem", objectFit: "cover", }} />
                                {/* <Typography variant="h5">పంచాయత్ రాజ్<br />మంత్రిత్వ శాఖ</Typography> */}
                            </Box>
                            <Box component="img" src={prHeadLogo} alt="prHeadLogo" sx={{
                                // width: "4.2rem", 
                                height: "100px",
                                objectFit: "cover", ml: "130px"
                            }} />
                            {/* <Typography variant="h3" >{HeaderComponentHeadText}</Typography> */}
                            <Box
                                sx={{
                                    pl: 2,
                                    display: "flex", alignItems: "center"
                                }}>
                                <Box component="img" src={cbnsmall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={modismall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={pksmall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                            </Box>
                        </Box>

                        <Box p={1} />
                        {!isvideoCall ?
                            <>
                                {
                                    !gotoFormPage ?
                                        (<Box sx={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "calc(100vh - 90px)", }}>
                                            <Typography variant="h4" sx={{
                                                // backgroundColor: "#9c27b0",
                                                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", 
                                                textAlign: "center", color: "#edf2fa",
                                                background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(251,162,0,0.6559873949579832) 100%)",
                                                fontWeight: "bold", padding: "10px 200px", borderRadius: "50px", mt: "1.5rem"
                                            }}>
                                                {MainPageHeadText}
                                            </Typography>

                                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap: "2rem" }}>
                                                {
                                                    Grievances.map((grievance, index) => {
                                                        // Get the grievance name and image dynamically
                                                        const grievanceName = Object.values(grievance)[0];
                                                        const grievanceImg = Object.values(grievance)[1];
                                                        // const EnglishName = Object.values(grievance)[2];

                                                        return (
                                                            <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "250px", gap: "1rem" }}>
                                                                <Box sx={{
                                                                    p: 1, width: "120px", height: "120px",
                                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                                    borderRadius: "0.5rem",
                                                                    backgroundColor: "white",
                                                                    cursor: "pointer"
                                                                }} onClick={() => handleGrievanceClick(grievanceImg, grievanceName)} >
                                                                    <Box component="img" src={grievanceImg} alt={grievanceName} sx={{ width: "75%", objectFit: "cover", }} />
                                                                </Box>
                                                                <Typography variant="h6" color="#edf2fa" fontWeight="bold">{grievanceName}</Typography>
                                                            </Box>
                                                        );
                                                    })
                                                }
                                            </Box>
                                            <Box sx={{ display: "flex", gap: "5rem", justifyContent: "center", mb: "2rem" }}>
                                                <Button variant="contained" sx={{ fontWeight: "bold" }} onClick={() => handleGrievanceClick(othimg, "ఇతర సమస్యలు")}>ఇతర సమస్యలు</Button>
                                                <Button variant="contained" sx={{ fontWeight: "bold" }} color="secondary" onClick={() => handleVideoCallClick()}>నిపుణుల కేంద్రంతో కనెక్ట్ అవ్వండి</Button>
                                            </Box>
                                        </Box>)
                                        :
                                        (
                                            <RequestPage grievanceImg={selectedGrievance.grievanceImg} grievanceName={selectedGrievance.grievanceName} onPrevClick={onPrevClick} handleGrievanceClick={handleGrievanceClick} />
                                        )
                                }
                            </> :
                            <VideoCall onPrevClick={onPrevClick} handleGrievanceClick={handleGrievanceClick} />
                        }

                    </Box>
            }
        </div>
    )
}
export default Home;