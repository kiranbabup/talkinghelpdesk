import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
import welcomeImg from "../Data/images/welcomeimg-removebg.png";
import { Grievances, HeaderComponentHeadText, MainPageHeadText } from "../Data/Content";
import imagehere from "../Data/images/imagehere.png";
import RequestPage from "./RequestPage";

const homePageCSS = {
    background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"
}

const Home = () => {
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [enterPage, setEnterPage] = useState(true);
    const [gotoFormPage, setGotoFormPage] = useState(false);
    const [selectedGrievance, setSelectedGrievance] = useState({ grievanceImg: "", grievanceName: "" });
    const [innerAudio, setInnerAudio] = useState(false);

    // Ref to keep track of the audio instance
    const audioRef = useRef(null);

    const onEnterHome = () => {
        setEnterPage(false);
        setAudioPlayed(true);
    }

    useEffect(() => {
        if (audioPlayed) {
            // Create and play the audio instance
            audioRef.current = new Audio(welcomeAudio);
            audioRef.current.play();
        }

        // Cleanup function to stop the audio when the component unmounts or audioPlayed changes
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [audioPlayed]);

    const handleGrievanceClick = (grievanceImg, grievanceName) => {
        setSelectedGrievance({ grievanceImg, grievanceName });
        setGotoFormPage(true);
        setEnterPage(false);
        setInnerAudio(true);

        // Stop the welcome audio if it's playing
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (innerAudio) {
            // Play the audio for the inner page
            const innerAudioInstance = new Audio(welcomeAudio);
            innerAudioInstance.play();

            // Cleanup function to stop the inner audio when innerAudio changes
            return () => {
                innerAudioInstance.pause();
                innerAudioInstance.currentTime = 0;
            };
        }
    }, [innerAudio]);

    return (
        <div>
            {
                enterPage ?
                    <Box style={homePageCSS} onClick={onEnterHome}>
                        <Box sx={{ width: { xs: "300px", md: "500px" }, display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography color="white" textAlign="center">కొనసాగించడానికి ఎక్కడైనా తాకండి...</Typography>
                            <Box component="img"
                                sx={{
                                    width: "100%",
                                    height: { xs: "40vh", md: "60vh" },
                                }}
                                alt="welcome"
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
                            <Box sx={{
                                pl: 2,
                                display: "flex", alignItems: "center"
                            }}>
                                <Box component="img" src={imagehere} alt="icon" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                               
