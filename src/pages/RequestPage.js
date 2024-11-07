import React, { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { AudioRecorder } from 'react-audio-voice-recorder';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AadhaarPage from "./AadhaarPage";
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Grievances } from "../Data/Content";

const RequestPage = ({ grievanceImg, grievanceName, onPrevClick, handleGrievanceClick }) => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [isQuestions, setisQuestions] = useState(true);
    const [textMessage, setTextMessage] = useState(false);
    const [audioMessage, setAudioMessage] = useState(false);
    const [audioRecorded, setaudioRecorded] = useState(true);
    const [textAdded, settextAdded] = useState(true);
    const [textValue, setTextValue] = useState("");
    const [adarPage, setadarPage] = useState(false);

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        setAudioUrl(url); // Store the audio URL in state
        setaudioRecorded(false)
    };

    const handleDeleteAudio = () => {
        setAudioUrl(null); // Remove the audio by setting it back to null
    };

    const onWriteClick = () => {
        setisQuestions(false);
        setAudioMessage(false);
        setTextMessage(true);
    }

    const ontalkClick = () => {
        setisQuestions(false);
        setTextMessage(false);
        setAudioMessage(true);
    }

    const onBackClick = () => {
        setAudioMessage(false);
        setTextMessage(false);
        setisQuestions(true);
    }

    const onType = (e) => {
        setTextValue(e.target.value);
        if (e.target.value.length === 0) {
            settextAdded(true);
        } else {
            settextAdded(false);
        }
    }
    const onSubmit = () => {
        console.log("submit");
        setadarPage(true);
    }

    return (
        <>
            {adarPage ?
                <AadhaarPage onPrevClick={onPrevClick} />
                :
                (
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "space-between", height: "calc(100vh - 90px)" }}>
                        <Box sx={{ display: "flex", justifyContent: "end", width: "90%", }}>
                            <Button variant="contained" color="secondary" onClick={() => onPrevClick()}><BungalowIcon fontSize="large"/></Button>
                        </Box>
                        <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", mt: "1rem" }} >
                            <Box sx={{
                                width: "48%",
                                display: "flex", justifyContent: "center", alignItems: "center",
                            }}>
                                <Box sx={{
                                    width: "250px", height: "250px",
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                    backgroundColor: "white", borderRadius: "50%"
                                }}>

                                    <Box component="img" src={grievanceImg} alt={grievanceName} sx={{ width: "65%", objectFit: "cover", }} />
                                </Box>
                            </Box>

                            <Box sx={{
                                width: "48%",
                                display: "flex", flexDirection: "column", gap: "1rem",
                                // alignItems: "center",
                                color: "white"
                            }}>
                                <Typography variant="h4" textAlign="center" sx={{ mb: "10px", 
                                    // backgroundColor:"#9c27b0", 
                                    background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(251,162,0,0.6559873949579832) 100%)",
                                    fontWeight:"bold", padding:"10px 0px", borderRadius:"50px" }}> {grievanceName}</Typography>
                                {
                                    isQuestions && (
                                        <Box >
                                            <Typography variant="h6">మీరు వ్రాయడం ద్వారా మీ సమస్యను నమోదు చేస్తారా?</Typography>
                                            <Box p={1} />
                                            <Button variant="contained" fullWidth onClick={() => onWriteClick()}>వ్రాస్తాను</Button>
                                            <Box p={1} />
                                            <Typography variant="h6" textAlign="center" color="yellow">లేదా</Typography>
                                            <Box p={0.5} />
                                            <Typography variant="h6" >మీరు ఆడియో రికార్డ్ చేస్తారా?</Typography>
                                            <Box p={1} />
                                            <Button variant="contained" fullWidth onClick={() => ontalkClick()}>మాట్లాడతాను</Button>
                                            <Box p={1} />
                                            {/* <Box sx={{textAlign:"right"}}>
                                                <Button variant="contained" color="secondary" onClick={() => onPrevClick()}><KeyboardBackspaceIcon /></Button>
                                            </Box> */}
                                        </Box>
                                    )
                                }
                                {
                                    textMessage && (
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <label>మీ సమస్యను వ్రాయడం ద్వారా నమోదు చేయండి</label>
                                            <TextField
                                                id="outlined-multiline-static"
                                                placeholder="ఇక్కడ టైప్ చేయండి"
                                                multiline
                                                rows={4}
                                                sx={{
                                                    "& .MuiInputBase-root": {
                                                        backgroundColor: "white",
                                                        color: "black"
                                                    },
                                                    "& .MuiInputBase-input": {
                                                        color: "black"
                                                    }
                                                }}
                                                value={textValue}
                                                onChange={(e) => onType(e)}
                                            />
                                            <Box sx={{ display: "flex", gap: "1rem" }}>
                                                <Button variant="contained" color="secondary" fullWidth onClick={() => onBackClick()}><KeyboardBackspaceIcon /></Button>
                                                <Button variant="contained" fullWidth disabled={textAdded} sx={{
                                                    bgcolor: textAdded ? "gray" : "primary.main",
                                                    color: "white",
                                                    "&:hover": {
                                                        bgcolor: textAdded ? "gray" : "primary.dark",
                                                    },
                                                    "&.Mui-disabled": {
                                                        bgcolor: "gray",
                                                        color: "white",
                                                    },
                                                }} onClick={() => onSubmit()}>పంపించండి</Button>
                                            </Box>
                                        </Box>
                                    )
                                }
                                {
                                    audioMessage && (
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <label>మీ సమస్యను ఆడియో రికార్డ్ ఛైసి నమోదు చేయండి</label>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                                                <AudioRecorder
                                                    onRecordingComplete={addAudioElement}
                                                    audioTrackConstraints={{
                                                        noiseSuppression: true,
                                                        echoCancellation: true,
                                                    }}
                                                    onNotAllowedOrFound={(err) => console.table(err)}
                                                    downloadOnSavePress={false}
                                                    downloadFileExtension="webm"
                                                    mediaRecorderOptions={{
                                                        audioBitsPerSecond: 128000,
                                                    }}
                                                    showVisualizer={true}
                                                />

                                                {audioUrl && (
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                        <audio controls src={audioUrl} />
                                                        <IconButton color="error" sx={{
                                                            backgroundColor: "white",
                                                            "&:hover": {
                                                                backgroundColor: "white"
                                                            }
                                                        }} onClick={handleDeleteAudio}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                )}
                                            </Box>
                                            <Box sx={{ display: "flex", gap: "1rem" }}>
                                                <Button variant="contained" color="secondary" fullWidth onClick={() => onBackClick()}><KeyboardBackspaceIcon /></Button>
                                                <Button variant="contained" fullWidth disabled={audioRecorded} sx={{
                                                    bgcolor: audioRecorded ? "gray" : "primary.main",
                                                    color: "white",
                                                    "&:hover": {
                                                        bgcolor: audioRecorded ? "gray" : "primary.dark",
                                                    },
                                                    "&.Mui-disabled": {
                                                        bgcolor: "gray", // Ensures gray color is applied when disabled
                                                        color: "white",
                                                    },
                                                }} onClick={() => onSubmit()}>పంపించండి</Button>
                                            </Box>
                                        </Box>
                                    )
                                }
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", width: "90%", pb: "10px" }}>
                            {
                                Grievances.filter(grievance => Object.values(grievance)[1] !== grievanceImg).map((grievance, index) => {
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
        </>
    )
}
export default RequestPage;