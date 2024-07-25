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

const tooltipStyles = {
  fontSize: "0.9rem",
  background: "#f0f4f9",
  color: "#000",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
};

function Header() {
  return (
    <HeadContainer>
      <Tooltip
        title="Google Gemini"
        placement="right"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
        arrow
      >
        <Link
          href="https://gemini.google.com/"
          target="_blank"
          sx={{ textDecoration: "none", color: "#585858" }}
        >
          <Typography>Gemini</Typography>
        </Link>
      </Tooltip>
      <Link href="https://github.com/Surjendu-kar" target="_blank">
        <Tooltip
          title="github link"
          arrow
          placement="bottom-end"
          componentsProps={{
            tooltip: {
              sx: tooltipStyles,
            },
          }}
        >
          <ImgIcon src={assets.user_icon} />
        </Tooltip>
      </Link>
    </HeadContainer>
  );
}

export default Header;
