import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import BungalowIcon from '@mui/icons-material/Bungalow';
import aadhaarpic from "../Data/images/aadhaar.webp";

const AadhaarPage = ({ onPrevClick }) => {
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [aadhaarNumberError, setAadhaarNumberError] = useState("");
    const [color, setColor] = useState("black");

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
            // localStorage.setItem("ttt", aadhaarNumber);
            console.log("Aadhaar number saved:", aadhaarNumber);
            alert("ఫిర్యాదు విజయవంతంగా పంపబడింది");
            window.location.reload();
        } else {
            setAadhaarNumberError("ఆధార్ నంబర్ ఖచ్చితంగా 12 అంకెలు ఉండాలి.");
            // setAadhaarNumberError("Aadhaar number must be exactly 12 digits.");
        }
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", gap: "2rem" }}>
            <Box sx={{ display: "flex", justifyContent: "end", width: "90%", }}>
                <Button variant="contained" color="secondary" onClick={() => onPrevClick()}><BungalowIcon fontSize="large" /></Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                <Box sx={{
                    width: "500px", backgroundColor: "#020817", color: "white",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px",
                    padding: "2rem 0px"
                }}>
                    <Box component="img" src={aadhaarpic} alt="imagehere" sx={{ width: "80%", objectFit: "cover",}} />

                </Box>
                <Box sx={{
                    width: "500px", backgroundColor: "#020817", color: "white",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px",
                    padding: "7rem 0px"
                }}>
                    {/* <Box p={2} /> */}
                    <form onSubmit={handleSubmit} >
                        <label>మీ ఆధార్ నంబర్‌ని టైప్ చేయండి</label>
                        <Box p={1} />
                        <TextField
                            variant="outlined"
                            fullWidth
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
                            <Typography color="error" sx={{ fontSize: "10px", mt: "6px" }}>{aadhaarNumberError}</Typography>
                        ) : (<Box p={1.3} />)}

                        <Box p={0.6} />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </form>
                    {/* <Box p={2} /> */}
                </Box>
            </Box>
        </Box>
    )
}
export default AadhaarPage;