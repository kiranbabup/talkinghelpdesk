import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
import welcomeImg from "../Data/images/welcomeimg-removebg.png";

const homePageCSS = {
    background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"
}

const HelpHome = () => {
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [aadhaarNumberError, setAadhaarNumberError] = useState("");
    const [color, setColor] = useState("black");
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [enterPage, setEnterPage] = useState(true);
    const navigate = useNavigate();

    const onEnterHome = () => {
        setEnterPage(false);
        setAudioPlayed(true);
    }

    useEffect(() => {
        if (audioPlayed) {
            const audio = new Audio(welcomeAudio);
            audio.play();
        }
    }, [audioPlayed]);
    
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
        <div  >
            {
                enterPage ?
                    <Box style={homePageCSS} onClick={() => onEnterHome()}>
                        <Box sx={{ width: { xs: "300px", md: "500px" }, display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography color="white" textAlign="center">Click AnyWhere to Proceed...</Typography>
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
                    <Box style={homePageCSS}>
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
                    </Box>
            }
        </div>
    )
}
export default HelpHome;