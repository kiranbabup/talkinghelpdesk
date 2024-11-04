import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "../components/createContextCodes/SpeechSynthesisContext";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HelpHome = () => {
    const [comprehensionText, setcomprehensionText] = useState("Hello, I am Ravi. I am here to help you with your queries. How can I help you today?");
    const [raviIndiaVoice, setRaviIndiaVoice] = useState(null);
    const [loaded, setLoaded] = useState(false); // Track when the page and voice are loaded
    const { isSpeaking, speak, stop } = useSpeechSynthesis();
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [aadhaarNumberError, setAadhaarNumberError] = useState("");
    const [color, setColor] = useState("black");
    const navigate = useNavigate();

    // Load the voice for Microsoft Ravi - English (India)
    useEffect(() => {
        const synthesis = window.speechSynthesis;
        const voices = synthesis.getVoices();
        const findingVoice = voices.find((voice) => voice.name === "Microsoft Ravi - English (India)" && voice.lang === "en-IN");
        setRaviIndiaVoice(findingVoice);
    }, []);

    // Track when voice is loaded and component is mounted
    useEffect(() => {
        if (raviIndiaVoice) {
            setLoaded(true);
        }
    }, [raviIndiaVoice]);

    // Trigger the speech synthesis after the component is fully loaded
    useEffect(() => {
        if (loaded && raviIndiaVoice && !isSpeaking) {
            speak(comprehensionText, raviIndiaVoice);
        }
    }, [loaded, raviIndiaVoice, isSpeaking, speak, comprehensionText]);

    const onTypingChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setAadhaarNumberError("");
        if (value.length <= 12) {
            setAadhaarNumber(value);
        }
        if (value.length === 12) {
            setColor("green");
        } else {
            setColor("black");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        if (aadhaarNumber.length === 12) {
            localStorage.setItem("ttt", aadhaarNumber);
            console.log("Aadhaar number saved:", aadhaarNumber);
            navigate("/services");
        } else {
            setAadhaarNumberError("Aadhaar number must be exactly 12 digits.");
        }
    };

    return (
        <div style={{ background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: { xs: "300px", md: "500px" }, backgroundColor: "#020817", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px" }}>
                <Box p={1} />
                <Typography sx={{ fontSize: { md: "30px", xs: "20px" }, fontWeight: "bold" }}>
                    Welcome to Help Desk
                </Typography>
                <Box p={1} />
                <form onSubmit={handleSubmit}>
                    <label>Enter your Aadhaar Number</label>
                    <Box p={0.5} />
                    <TextField
                        variant="outlined"
                        required
                        value={aadhaarNumber}
                        inputProps={{
                            maxLength: 12,
                            inputMode: "numeric"
                        }}
                        onChange={onTypingChange}
                        onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "." || e.key === "e" || e.key === "+") {
                                e.preventDefault();
                            }
                        }}
                        sx={{
                            '& .MuiInputBase-root': {
                                backgroundColor: '#f4eded',
                                color: color,
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                        }}
                    />

                    {aadhaarNumberError ? (
                        <Typography color="error" sx={{ fontSize: "10px" }}>
                            {aadhaarNumberError}
                        </Typography>
                    ) : (
                        <Box p={1.1} />
                    )}

                    <Box p={0.5} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
                <Box p={1} />
            </Box>
        </div>
    );
};

export default HelpHome;

import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
import welcomeVideo from "../Data/videos/welcomeVideo.mp4";

const HelpHome = () => {
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [aadhaarNumberError, setAadhaarNumberError] = useState("");
    const [color, setColor] = useState("black");
    const [videoPlayed, setVideoPlayed] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setVideoPlayed(false);
        }, 1000);
    }, [])

    const onTypingChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setAadhaarNumberError("");
        if (value.length <= 12) {
            setAadhaarNumber(value);
        }
        if (value.length === 12) {
            setColor("green");
        } else {
            setColor("black");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (aadhaarNumber.length === 12) {
            localStorage.setItem("ttt", aadhaarNumber);
            console.log("Aadhaar number saved:", aadhaarNumber);
            navigate("/services");
        } else {
            setAadhaarNumberError("Aadhaar number must be exactly 12 digits.");
        }
    }

    return (
        <div style={{ background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }} >
            <Box sx={{ width: { xs: "300px", md: "500px" }, backgroundColor: "#020817", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px" }}>
                <Box p={1} />
                <Typography sx={{ fontSize: { md: "30px", xs: "20px" }, fontWeight: "bold", }}>
                    Welcome to Help Desk
                </Typography>
                <Box p={1} />
                <form onSubmit={handleSubmit} >
                    <label>Enter your Aadhaar Number</label>
                    <Box p={0.5} />
                    <TextField
                        variant="outlined"
                        required
                        value={aadhaarNumber}
                        inputProps={{
                            maxLength: 12,
                            inputMode: "numeric"
                        }}
                        onChange={(e) => { onTypingChange(e) }}
                        onKeyDown={(e) => {
                            if (e.key === "-" || e.key === "." || e.key === "e" || e.key === "+") {
                                e.preventDefault();
                            }
                        }}
                        sx={{
                            '& .MuiInputBase-root': {
                                backgroundColor: '#f4eded',
                                color: color,
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'blue',
                            },
                        }}
                    />

                    {aadhaarNumberError ? (
                        <Typography color="error" sx={{ fontSize: "10px" }}>{aadhaarNumberError}</Typography>
                    ) : (<Box p={1.1} />)}

                    <Box p={0.5} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
                <Box p={1} />
            </Box>

            <video
                autoPlay
                muted={videoPlayed}
                playsInline
                loop
                style={{
                    position: "absolute", top: 10, left: 10, width: "15%", height: "50%",
                    objectFit: "cover", zIndex: 0
                }}
            >
                <source src={welcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default HelpHome;
