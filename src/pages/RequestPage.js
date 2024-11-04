import React, { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { AudioRecorder } from 'react-audio-voice-recorder';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AadhaarPage from "./AadhaarPage";

const RequestPage = ({ grievanceImg, grievanceName, onPrevClick }) => {
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
                <AadhaarPage />
                :
                (
                    <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", mt: "2rem" }} >
                        <Box sx={{
                            width: "48%", display: "flex", justifyContent: "center", alignItems: "center",
                        }}>
                            <Box component="img" src={grievanceImg} alt={grievanceName} sx={{ width: "70%", objectFit: "cover", }} />
                        </Box>

                        <Box sx={{
                            width: "48%",
                            display: "flex", flexDirection: "column", gap: "1rem",
                            // alignItems: "center",
                            color: "white"
                        }}>
                            <Typography variant="h4" textAlign="center" sx={{ mb: "1rem" }}> {grievanceName}</Typography>
                            {
                                isQuestions && (
                                    <Box >
                                        <Typography variant="h6">మీరు వ్రాయడం ద్వారా మీ సమస్యను నమోదు చేస్తారా?</Typography>
                                        <Box p={1} />
                                        <Button variant="contained" fullWidth onClick={() => onWriteClick()}>వ్రాస్తాను</Button>
                                        <Box p={1} />
                                        <Typography variant="h6" textAlign="center" color="yellow">లేదా</Typography>
                                        <Box p={1} />
                                        <Typography variant="h6" >మీరు ఆడియో రికార్డ్ చేస్తారా?</Typography>
                                        <Box p={1} />
                                        <Button variant="contained" fullWidth onClick={() => ontalkClick()}>మాట్లాడతాను</Button>
                                        <Box p={1} />
                                        <Button variant="contained" color="secondary" onClick={() => onPrevClick()}><KeyboardBackspaceIcon /></Button>
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
                )
            }
        </>
    )
}
export default RequestPage;