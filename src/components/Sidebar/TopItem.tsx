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

const MenuIcon = styled(ImgIcon)(({ theme }) => ({
  display: "block",
  marginLeft: "10px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NewChat = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: "10px 15px",
  backgroundColor: "#e6eaf1",
  borderRadius: "50px",
  fontSize: "14px",
  color: "grey",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const RecentChat = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const RecentTypo = styled(Typography)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const RecentEntry = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: "10px",
  paddingRight: "40px",
  borderRadius: "50px",
  color: "#282828",
  cursor: "pointer",
  
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function TopItem() {
  return (
    <MainContainer>
      <MenuIcon src={assets.menu_icon} alt="menu icon"></MenuIcon>

      {/* Add New Chat*/}
      <NewChat>
        <ImgIcon src={assets.plus_icon} alt="plus icon"></ImgIcon>
        <Typography> New Chat</Typography>
      </NewChat>

      {/* Show Previous Chats*/}
      <RecentChat>
        <RecentTypo>Recent</RecentTypo>

        <RecentEntry>
          <ImgIcon src={assets.message_icon} alt="message icon" />
          <Typography>what is. ..</Typography>
        </RecentEntry>
      </RecentChat>
    </MainContainer>
  );
}

export default TopItem;
