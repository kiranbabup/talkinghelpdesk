import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServicesDB = () => {
    const [adrNo, setAdrNo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedAadhaarNumber = localStorage.getItem("ttt");
        if (storedAadhaarNumber) {
            setAdrNo(storedAadhaarNumber);
        } else {
            navigate("/help-home");
        }
    }, [])

    return (
        <div style={{ background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Box sx={{ width: { xs: "300px", md: "500px" }, backgroundColor: "#020817", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px" }}>
                <Box p={1} />
                <Typography>
                    {adrNo}
                </Typography>
            </Box>
        </div>
    )
}
export default ServicesDB;