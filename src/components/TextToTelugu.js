import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

const TextToTelugu = ({ content }) => {
    const [translatedText, setTranslatedText] = useState("");

    useEffect(() => {
        const translateText = async () => {
            try {
                const response = await axios.post(
                    "https://libretranslate.com/translate",
                    {
                        q: content, // Make sure content is a string
                        source: "en",
                        target: "te", // Telugu language code
                        format: "text"
                    }
                );
                setTranslatedText(response.data.translatedText);
            } catch (error) {
                console.error("Translation error:", error);
            }
        };

        translateText();
    }, [content]);

    return <Box>{translatedText || "Translating..."}</Box>; // Display "Translating..." while loading
};

export default TextToTelugu;