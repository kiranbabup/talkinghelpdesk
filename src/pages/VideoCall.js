import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Button, } from "@mui/material";
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Grievances } from '../Data/Content';

const VideoCall = ({ onPrevClick, handleGrievanceClick }) => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Connecting";
    const headText1 = "కొంత సమయం లో నిపుణుడు కనెక్ట్ అవుతారు";
    const headText2 = "క్షమించండి, తర్వాత మళ్లీ ప్రయత్నించండి";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                index = 0; // Reset to loop continuously
            }
        }, 300); // Adjust speed of appearance here
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const progress = (timeLeft / 60) * 100; // Calculate the progress percentage
    const progressColor = timeLeft > 40 ? "green" : timeLeft > 20 ? "yellow" : "red"; // Blue when above 30 seconds, red when 30 seconds or below

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "space-between", height: "calc(100vh - 90px)" }}>
            <Box sx={{ display: "flex", justifyContent: "end", width: "90%", }}>
                <Button variant="contained" color="secondary" onClick={() => onPrevClick()}><BungalowIcon fontSize="large" /></Button>
            </Box>
            
            <Typography variant='h5' sx={{
                background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(251,162,0,0.6559873949579832) 100%)",
                fontWeight: "bold", padding: "10px 80px", borderRadius: "50px", color: "white"
            }} >{timeLeft === 0 ? headText2 : headText1}</Typography>

            <Box sx={{ width: "70%", display: "flex", justifyContent: "space-between", mt: "1rem" }} >
                <Box sx={{
                    width: "48%", display: "flex", justifyContent: "center", alignItems: "center",
                    position: "relative"
                }}>
                    <CircularProgress
                        variant="determinate"
                        value={progress}
                        size={300}
                        thickness={4}
                        sx={{
                            position: "absolute",
                            color: progressColor,
                            transform: 'rotate(180deg)',
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            width: "250px",
                            height: "250px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1,
                        }}
                    >
                        {timeLeft}
                    </Typography>
                </Box>

                <Box sx={{
                    width: "48%",
                    display: "flex",
                    justifyContent:"center",
                    alignItems: "center",
                    color: "white",
                }}>
                    <Box sx={{
                        width: "230px",
                        height: "280px",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "8px solid gray",
                    }}>
                        {
                            timeLeft === 0 ? (
                                <Typography sx={{ color: "red", textAlign: "center", fontWeight: "bold" }}>క్షమించండి, <br /> తర్వాత మళ్లీ ప్రయత్నించండి...</Typography>
                                // <Typography sx={{ color: "red", textAlign: "center", fontWeight: "bold" }}>Sorry, <br /> Try Again Later...</Typography>
                            ) : (
                                <>
                                    <CircularProgress />
                                    <Box p={1} />
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography sx={{ color: progressColor, fontWeight: 'bold' }}>
                                            {displayedText}
                                        </Typography>
                                        <Box p={0.5} />
                                        <Box sx={{ display: 'flex', gap: "0.5rem" }}>
                                            {[...Array(3)].map((_, i) => (
                                                <Typography
                                                    key={i}
                                                    sx={{
                                                        color: progressColor,
                                                        fontWeight: 'bold',
                                                        animation: `jump 0.6s ease infinite ${i * 0.2}s`,
                                                        '@keyframes jump': {
                                                            '0%, 100%': { transform: 'translateY(0)' },
                                                            '50%': { transform: 'translateY(-8px)' },
                                                        },
                                                    }}
                                                >
                                                    .
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </>
                            )}
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", width: "90%", pb: "10px" }}>
                {
                    Grievances.map((grievance, index) => {
                        const grievanceName = Object.values(grievance)[0];
                        const grievanceImg = Object.values(grievance)[1];
                        return (
                            <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "200px", gap: "0.5rem" }}>
                                <Box sx={{
                                    p: 1, width: "80px", height: "80px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "white",
                                    cursor: "pointer"
                                }} onClick={() => handleGrievanceClick(grievanceImg, grievanceName)} >
                                    <Box component="img" src={grievanceImg} alt={grievanceName} sx={{ width: "75%", objectFit: "cover", }} />
                                </Box>
                                <Typography color="#edf2fa" fontWeight="bold" textAlign="center">{grievanceName}</Typography>
                            </Box>
                        );
                    })
                }
            </Box>
        </Box>
    )
}

export default VideoCall;