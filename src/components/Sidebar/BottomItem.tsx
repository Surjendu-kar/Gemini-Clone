import { Box, styled, Typography } from "@mui/material";
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

function BottomItem({ extended }: BottomItemProps) {
  return (
    <MainContainer>
      <HelpContainer>
        <ImgIcon src={assets.question_icon} alt="question icon" />
        {extended && <Text>Help</Text>}
      </HelpContainer>

      <ActivityContainer>
        <ImgIcon src={assets.history_icon} alt="history icon" />
        {extended && <Text>Activity</Text>}
      </ActivityContainer>

      <SettingContainer>
        <ImgIcon src={assets.setting_icon} alt="setting icon" />
        {extended && <Text>Settings</Text>}
      </SettingContainer>
    </MainContainer>
  );
}

export default BottomItem;
