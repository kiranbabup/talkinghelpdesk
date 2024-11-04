import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const TranslateorText = ({ content }) => {
    const [resultText, setResultText] = useState("");
    const [detectedLanguageKey, setDetectedLanguageKey] = useState("en");
    const [selectedLanguageKey] = useState("te"); // Target Telugu language

    useEffect(() => {
        if (content) {
            detectLanguageAndTranslate(content);
        }
    }, [content]);

    const detectLanguageAndTranslate = (text) => {
        axios.post(`https://libretranslate.de/detect`, { q: text })
            .then((response) => {
                const sourceLang = response.data[0].language;
                translateText(text, sourceLang);
            })
            .catch((error) => {
                console.error("Error detecting language:", error);
            });
    };

    const translateText = (text, sourceLang) => {
        let data = {
            q: text,
            source: sourceLang,
            target: selectedLanguageKey
        };

        axios.post(`https://libretranslate.de/translate`, data)
            .then((response) => {
                setResultText(response.data.translatedText);
            })
            .catch((error) => {
                console.error("Translation error:", error);
                setResultText("Translation failed.");
            });
    };

    return (
        <Box padding={2} bgcolor="#f0f0f0" borderRadius={2} width="100%">
            <Typography variant="h6" marginTop={2}>
                {resultText || "Translating..."}
            </Typography>
        </Box>
    );
};

export default TranslateorText;