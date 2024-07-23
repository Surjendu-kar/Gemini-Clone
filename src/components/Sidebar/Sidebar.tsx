import { Box, styled } from "@mui/material";
import TopItem from "./TopItem";
import BottomItem from "./BottomItem";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState<boolean>(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f0f4f9",
    padding: "1.5rem 1rem",
    // padding: "2rem 1.5rem 1.5rem 1rem",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
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
      />
      <BottomItem extended={extended} />
    </MainContainer>
  );
}

export default Sidebar;
