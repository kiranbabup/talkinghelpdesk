import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
import welcomeImg from "../Data/images/welcomeimg-removebg.png";
import { Grievances, HeaderComponentHeadText, MainPageHeadText } from "../Data/Content";
import imagehere from "../Data/images/imagehere.png";
import RequestPage from "./RequestPage";
import othimg from "../Data/images/SVGImgs/Irrigation.svg";
import VideoCall from "./VideoCall";

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
        setSelectedGrievance({ grievanceImg, grievanceName });
        setEnterPage(false);
        setGotoFormPage(true);
        setInnerAudio(true);
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
                    <Box style={homePageCSS} onClick={() => onEnterHome()}>
                        <Box sx={{
                            width: "40vw",
                            // width: { xs: "300px", md: "500px" },
                            display: "flex", flexDirection: "column", alignItems: "center"
                        }} >
                            <Typography color="white" textAlign="center" variant="h5">ఫిర్యాదును ఎంచుకోవడానికి ఎక్కడైనా తాకండి...</Typography>
                            <Box component="img"
                                sx={{
                                    width: "100%",
                                    height: { xs: "40vh", md: "60vh" },
                                }}
                                alt="wellcome"
                                src={welcomeImg}
                            />
                        </Box>
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
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", }} />
                            </Box>
                            <Typography variant="h3"
                            // sx={{ color: "#edf2fa" }}
                            >{HeaderComponentHeadText}</Typography>
                            <Box
                                sx={{
                                    pl: 2,
                                    display: "flex", alignItems: "center"
                                }}>
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                                <Box component="img" src={imagehere} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                            </Box>
                        </Box>

                        <Box p={1} />
                        {!isvideoCall ?
                            <>
                                {
                                    !gotoFormPage ?
                                        <Box sx={{ width: "80%" }}>
                                            <Typography variant="h4" sx={{
                                                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", 
                                                textAlign: "center", color: "#edf2fa"
                                            }}>
                                                {MainPageHeadText}
                                            </Typography>
                                            <Box p={1} />

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
                                            <Box sx={{ display: "flex", gap: "5rem", justifyContent: "center", mt: "2rem" }}>
                                                <Button variant="contained" onClick={() => handleGrievanceClick(othimg, "ఇతర సమస్యలు")}>ఇతర సమస్యలు</Button>
                                                <Button variant="contained" color="secondary" onClick={() => handleVideoCallClick()}>నిపుణుల కేంద్రంతో కనెక్ట్ అవ్వండి</Button>
                                            </Box>
                                        </Box>
                                        :
                                        (
                                            <RequestPage grievanceImg={selectedGrievance.grievanceImg} grievanceName={selectedGrievance.grievanceName} onPrevClick={onPrevClick} />
                                        )
                                }
                            </> :
                                <VideoCall />
                        }

                    </Box>
            }
        </div>
    )
}
export default Home;