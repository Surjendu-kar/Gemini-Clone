import { Box, Typography } from "@mui/material";
import { assets } from "../../assets/assets";
import { styled } from "@mui/system";

const HeadContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "22px",
  padding: "20px",
  color: "#585858",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ImgIcon = styled("img")(({ theme }) => ({
  width: "40px",
  borderRadius: "50%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function Header() {
  return (
    <HeadContainer>
      <Typography>Gemini</Typography>
      <ImgIcon src={assets.user_icon} />
    </HeadContainer>
  );
}

export default Header;
