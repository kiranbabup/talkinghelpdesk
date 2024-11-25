import { Box, } from "@mui/material";
import apLogo from "../../mainData/images/headerImages/Andhrapradesh-Logo.svg";
import prtelHeadLogo from "../../mainData/images/headerImages/panchayathi_telugu_logo.png";
import cbnsmall from "../../mainData/images/headerImages/cbnsmall.jpg";
import modismall from "../../mainData/images/headerImages/modiLogo.jpg";
import pksmall from "../../mainData/images/headerImages/Pawan-Kalyan-half.jpg";

const HeaderComponent = () => {
    return (
        <Box sx={{
            width: "100%",
            height: "5rem",
            backgroundColor: "#edf2fa",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 0px",
        }}>
            <Box
                sx={{
                    pl: 2,
                    display: "flex", alignItems: "center"
                }}>
                <Box component="img" src={apLogo} alt="imagehere" sx={{ width: "4.2rem", height: "4.5rem", objectFit: "cover", }} />
                {/* <Typography variant="h5">పంచాయత్ రాజ్<br />మంత్రిత్వ శాఖ</Typography> */}
            </Box>
            <Box component="img" src={prtelHeadLogo} alt="prHeadLogo" sx={{
                // width: "4.2rem", 
                height: "100px",
                objectFit: "cover", ml: "130px"
            }} />
            {/* <Typography variant="h3" >{HeaderComponentHeadText}</Typography> */}
            <Box
                sx={{
                    pl: 2,
                    display: "flex", alignItems: "center"
                }}>
                <Box component="img" src={cbnsmall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                <Box component="img" src={modismall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
                <Box component="img" src={pksmall} alt="imagehere" sx={{ width: "3.5rem", height: "3.5rem", objectFit: "cover", borderRadius: "50%", mr: 1 }} />
            </Box>
        </Box>
    )
}
export default HeaderComponent;