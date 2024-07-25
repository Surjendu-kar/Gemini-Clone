import { Box, styled, Switch, Tooltip, Typography } from "@mui/material";
import { assets } from "../../assets/assets";
import { useState } from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import LinkIcon from "@mui/icons-material/Link";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
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

const HelpContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: "10px",
  paddingRight: "10px",
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

const ActivityContainer = styled(HelpContainer)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const SettingContainer = styled(HelpContainer)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Text = styled(Typography)(() => ({
  margin: 0,
}));

const tooltipStyles = {
  fontSize: "0.9rem",
  background: "#f0f4f9",
  color: "#000",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
};

const PopupContainer = styled(Box)<{ extended: boolean }>(({ extended }) => ({
  position: "absolute",
  left: extended ? "155px" : "80px",
  bottom: "20px",
  width: "300px",
  backgroundColor: "#f0f4f9",
  borderRadius: "10px",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1000,
}));

const PopupBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

function BottomItem({ extended }: BottomItemProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MainContainer>
      <Tooltip
        title="Help (coming soon)"
        placement="right"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
        disableHoverListener={isSettingsOpen}
      >
        <HelpContainer>
          <ImgIcon src={assets.question_icon} alt="question icon" />
          {extended && <Text>Help</Text>}
        </HelpContainer>
      </Tooltip>

      <Tooltip
        title="Gemini Apps activity (coming soon)"
        placement="right"
        componentsProps={{
          tooltip: { sx: tooltipStyles },
        }}
        disableHoverListener={isSettingsOpen}
      >
        <ActivityContainer>
          <ImgIcon src={assets.history_icon} alt="history icon" />
          {extended && <Text>Activity</Text>}
        </ActivityContainer>
      </Tooltip>

      <Tooltip
        title="Settings"
        placement="right"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
      >
        <SettingContainer onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <ImgIcon src={assets.setting_icon} alt="setting icon" />
          {extended && <Text>Settings</Text>}
        </SettingContainer>
      </Tooltip>

      {isSettingsOpen && (
        <PopupContainer extended={extended}>
          <PopupBox>
            <ExtensionIcon />
            <Typography>Extensions</Typography>
          </PopupBox>

          <PopupBox>
            <LinkIcon />
            <Typography>Your public links</Typography>
          </PopupBox>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <PopupBox>
              <NightlightRoundIcon />
              <Typography>Dark theme</Typography>
            </PopupBox>
            <Switch
              checked={isDarkMode}
              onChange={(event) => setIsDarkMode(event.target.checked)}
            />
          </Box>
        </PopupContainer>
      )}
    </MainContainer>
  );
}

export default BottomItem;
