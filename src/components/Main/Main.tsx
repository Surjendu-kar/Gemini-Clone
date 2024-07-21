import { Box } from "@mui/material";
import Header from "./Header";
import { styled } from "@mui/system";
import DisplayData from "./DisplayData";
import SearchBar from "./SearchBar";

const MainContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: "100vh",
  paddingBottom: "15vh",
  position: "relative",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function Main() {
  return (
    <MainContainer>
      <Header />
      <DisplayData />
      <SearchBar/>
    </MainContainer>
  );
}

export default Main;
