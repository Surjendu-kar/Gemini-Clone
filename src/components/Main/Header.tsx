import { Box, Link, Tooltip, Typography } from "@mui/material";
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
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
  },
}));

const ImgIcon = styled("img")(({ theme }) => ({
  width: "40px",
  borderRadius: "50%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "30px",
  },
}));

function Header() {
  return (
    <HeadContainer>
      <Typography>Gemini</Typography>
      <Link href="https://github.com/Surjendu-kar" target="_blank">
        <Tooltip title="github link" arrow>
          <ImgIcon src={assets.user_icon} />
        </Tooltip>
      </Link>
    </HeadContainer>
  );
}

export default Header;
