import { Box, styled, Tooltip, Typography } from "@mui/material";
import { assets } from "../../assets/assets";

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

function BottomItem({ extended }: BottomItemProps) {
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
      >
        <ActivityContainer>
          <ImgIcon src={assets.history_icon} alt="history icon" />
          {extended && <Text>Activity</Text>}
        </ActivityContainer>
      </Tooltip>
      <Tooltip
        title="Settings (coming soon)"
        placement="right"
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
      >
        <SettingContainer>
          <ImgIcon src={assets.setting_icon} alt="setting icon" />

          {extended && <Text>Settings</Text>}
        </SettingContainer>
      </Tooltip>
    </MainContainer>
  );
}

export default BottomItem;
