import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import welcomeAudio from "../Data/audios/grievance-welcome.mpeg";
import RegisterPage from "./RegisterPage";
import StartPage from "../pages/StartPage";

const homePageCSS = {
    background: "#0f172a", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"
}

const HomePage = () => {
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [enterPage, setEnterPage] = useState(true);
    const [language, setlanguage] = useState("తెలుగు");
    // const [innerAudio, setInnerAudio] = useState(false);
    const audioRef = useRef(null);
    // const audioRef2 = useRef(null);

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

    // useEffect(() => {
    //     if (innerAudio) {
    //         audioRef2.current = new Audio(welcomeAudio);
    //         audioRef2.current.play();
    //     }
    //     return () => {
    //         if (audioRef2.current) {
    //             audioRef2.current.pause();
    //             audioRef2.current.currentTime = 0;
    //         }
    //     };
    // }, [innerAudio]);
    const changeLanguage = ()=>{
        if(language === "తెలుగు"){
            setlanguage("English");
        }else{
            setlanguage("తెలుగు");
        }
    }
    return (
        <div  >
            <Button variant="contained" sx={{
                width:"5rem",
                position:"absolute",
                top:"7rem", right:"5rem",
                zIndex:"5"
            }} onClick={()=>changeLanguage()}>{language}</Button>
            {
                enterPage ?
                    <Box style={homePageCSS}>
                        <StartPage onEnterHome={onEnterHome} />
                    </Box>
                    :
                    <Box>
                        <RegisterPage />
                    </Box>
            }
        </div>
    )
}
export default HomePage;