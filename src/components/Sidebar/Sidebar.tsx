import { Box, styled } from "@mui/material";
import TopItem from "./TopItem";
import BottomItem from "./BottomItem";

function Sidebar() {
  const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f0f4f9",
    padding: "1.5rem 1.25rem",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <MainContainer>
      <TopItem />
      <BottomItem />
    </MainContainer>
  );
}

export default Sidebar;
