import { Box, Button } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import ReplayIcon from '@mui/icons-material/Replay';
import { useSpeechSynthesis } from "./createContextCodes/SpeechSynthesisContext";
import { useEffect } from "react";

const SpeakDirectly = ({ comprehensionText, raviIndiaVoice }) => {
  const { isSpeaking, speak, stop, } = useSpeechSynthesis();
  
  const toSpeak = ()=>{
    speak(comprehensionText, raviIndiaVoice);
  }

  useEffect(()=>{
    toSpeak();
  },[])

  useEffect(()=>{
    toSpeak();
  },[comprehensionText,])
  return (
    <Box>
    </Box>
  )
}
export default SpeakDirectly;