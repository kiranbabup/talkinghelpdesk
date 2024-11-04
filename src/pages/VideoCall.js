import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from "@mui/material";

const VideoCall = () => {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);
    return (
        <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", mt: "2rem" }} >
            <Box sx={{
                width: "48%", display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <Typography variant="h1" sx={{width:"300px", height:"300px", backgroundColor:"white", borderRadius:"50%",display: "flex", justifyContent: "center", alignItems: "center",}}>{timeLeft}</Typography>
            </Box>

            <Box sx={{
                width: "48%",
                display: "flex", flexDirection: "column", gap: "1rem",
                alignItems: "center",
                color: "white",

            }}>

                <Box variant="h1" sx={{width:"300px", height:"300px", backgroundColor:"white", display: "flex", justifyContent: "center", alignItems: "center", border:"5px solid gray"}}>
                <CircularProgress />
                </Box>
            </Box>
        </Box>
    )
}
export default VideoCall;