import { Box } from "@mui/material";
import Header from "./Header";
import { styled } from "@mui/system";
import DisplayDefaultData from "./DisplayDefaultData";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { Context } from "../../context/Context";
import DisplayData from "./DisplayData";

const MainContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: "100vh",
  paddingBottom: "15vh",
  position: "relative",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Main = () => {
  const context = useContext(Context);

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = context;
  return (
    <MainContainer>
      <Header />
      {!showResult ? (
        <DisplayDefaultData />
      ) : (
        <DisplayData
          recentPrompt={recentPrompt}
          resultData={resultData}
          loading={loading}
        />
      )}
      <SearchBar setInput={setInput} input={input} onSent={onSent} />
    </MainContainer>
  );
};

export default Main;
