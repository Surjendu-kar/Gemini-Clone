import { Box, styled } from "@mui/material";
import TopItem from "./TopItem";
import BottomItem from "./BottomItem";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ isDarkMode, setIsDarkMode }: SidebarProps) {
  const [extended, setExtended] = useState<boolean>(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: isDarkMode ? "#1f1e1e" : "#f0f4f9",
    color: isDarkMode ? "#ffffff" : "#000000",
    padding: "1.5rem 1rem",
    width: extended ? "300px" : '',
    // padding: "2rem 1.5rem 1.5rem 1rem",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  return (
    <MainContainer>
      <TopItem
        newChat={newChat}
        extended={extended}
        setExtended={setExtended}
        prevPrompts={prevPrompts}
        onSent={onSent}
        setRecentPrompt={setRecentPrompt}
        isDarkMode={isDarkMode}
      />
      <BottomItem
        extended={extended}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </MainContainer>
  );
}

export default Sidebar;
