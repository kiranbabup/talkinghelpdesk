import { Box, Button, Typography } from "@mui/material"
// import apLogo from "../Data/images/Andhrapradesh-Logo.svg";
import apLogo from "../Data/images/apLogo.png";
import kutami from "../Data/images/kutami.png";
import cbnfull from "../Data/images/cbn.jfif";
import modifull from "../Data/images/pm-modi-full.webp";
import pkfull from "../Data/images/pk.jpg";
import prTextimg from "../Data/images/prlogo-2.png";
// import { HeaderComponentHeadText } from "../Data/Content";

const StartPage = ({ onEnterHome }) => {
    return (
        <Box sx={{
            width: "40vw",
            display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Box component="img"
                sx={{
                    width: "100px",
                    height: "110px",
                }}
                alt="wellcome"
                src={apLogo}
            />
            <Box p={1} />
            {/* <Typography variant="h6" sx={{
                textAlign: "center", color: "#edf2fa",
                background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(251,162,0,0.6559873949579832) 100%)",
                fontWeight: "bold", padding: "10px 30px", borderRadius: "50px"
            }}>{HeaderComponentHeadText}</Typography> */}
            <Box component="img"
                sx={{
                    // width: "250px",
                    height: "60px",
                }}
                alt="wellcome"
                src={prTextimg}
            />
            <Box component="img"
                sx={{
                    width: "250px",
                    height: "150px",
                }}
                alt="wellcome"
                src={kutami}
            />

            <Box sx={{
                display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center"
            }}>
                <Box component="img" src={cbnfull} alt="imagehere" sx={{ width: "8rem", height: "10rem", objectFit: "cover", }} />
                <Box component="img" src={modifull} alt="imagehere" sx={{ width: "8rem", height: "10rem", objectFit: "cover", }} />
                <Box component="img" src={pkfull} alt="imagehere" sx={{ width: "8rem", height: "10rem", objectFit: "cover", }} />
            </Box>
            <Box p={2} />
            <Box sx={{alignSelf:"center", width:"70%"}}>
                <Button variant="contained" fullWidth onClick={() => onEnterHome()}>Enter</Button>
                {/* కొనసాగించండి */}
            </Box>
        </Box>
    )
}
export default StartPage;