import { Box, styled, Typography } from "@mui/material";
import { assets } from "../../assets/assets";

const MainContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const ImgIcon = styled("img")(({ theme }) => ({
  width: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
function BottomItem() {
  return (
    <MainContainer>
      <Box display={"flex"}>
        <ImgIcon src={assets.question_icon} alt="question icon" />
        <Typography>Help</Typography>
      </Box>
      <Box display={"flex"}>
        <ImgIcon src={assets.history_icon} alt="history icon" />
        <Typography>Activity</Typography>
      </Box>
      <Box display={"flex"}>
        <ImgIcon src={assets.setting_icon} alt="setting icon" />
        <Typography>Settings</Typography>
      </Box>
    </MainContainer>
  );
}

export default BottomItem;
