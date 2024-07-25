import { Box, styled, Tooltip, Typography } from "@mui/material";
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
  width: "25px",
  display: "block",
  margin: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NewChat = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: "8px 10px",
  backgroundColor: "#e6eaf1",
  borderRadius: "50px",
  fontSize: "14px",
  color: "grey",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#fff",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const RecentChat = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  animation: "fadeIn 1.5s", //declared in index.css file

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

  "&:hover": {
    backgroundColor: "#e2e6eb",
  },

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const tooltipStyles = {
  fontSize: "0.9rem",
  background: "#f0f4f9",
  color: "#000",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
};

function TopItem({
  extended,
  setExtended,
  prevPrompts,
  onSent,
  setRecentPrompt,
  newChat,
}: TopItemProps) {
  const loadPrompt = async (prompt: string) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <MainContainer>
      <Tooltip
        title={!extended ? "Expand menu" : "Collapse menu"}
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
      >
        <MenuIcon
          src={assets.menu_icon}
          alt="menu icon"
          // onClick={() => setExtended((prev) => (prev === true ? false : true))}
          onClick={() => setExtended((prev) => !prev)} //same logic
        />
      </Tooltip>

      {/* Add New Chat*/}
      <Tooltip
        title="New chat"
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
      >
        <NewChat onClick={() => newChat()}>
          <ImgIcon src={assets.plus_icon} alt="plus icon" />
          {extended && <Typography> New Chat</Typography>}
        </NewChat>
      </Tooltip>

      {/* Show Previous Chats*/}
      {extended && (
        <RecentChat>
          <RecentTypo>Recent</RecentTypo>
          {prevPrompts.map((item, index) => {
            return (
              <RecentEntry onClick={() => loadPrompt(item)} key={index}>
                <ImgIcon src={assets.message_icon} alt="message icon" />
                <Typography>{item.slice(0, 18)}..</Typography>
              </RecentEntry>
            );
          })}
        </RecentChat>
      )}
    </MainContainer>
  );
}

export default TopItem;
