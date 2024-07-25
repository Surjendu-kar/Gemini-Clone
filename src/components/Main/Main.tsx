import { Box } from "@mui/material";
import Header from "./Header";
import { styled } from "@mui/system";
import DisplayDefaultData from "./DisplayDefaultData";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { Context } from "../../context/Context";
import DisplayData from "./DisplayData";

const MainContainer = styled(Box)<{ isDarkMode: boolean }>(
  ({ theme, isDarkMode }) => ({
    flex: 1,
    minHeight: "100vh",
    paddingBottom: "15vh",
    position: "relative",
    backgroundColor: isDarkMode ? "#030303f5" : "#fff",
    color: isDarkMode ? "#ffffff" : "#000000",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

interface MainProps {
  isDarkMode: boolean;
}
const Main = ({ isDarkMode }: MainProps) => {
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
    <MainContainer isDarkMode={isDarkMode}>
      <Header />
      {!showResult ? (
        <DisplayDefaultData isDarkMode={isDarkMode} />
      ) : (
        <DisplayData
          recentPrompt={recentPrompt}
          resultData={resultData}
          loading={loading}
        />
      )}
      <SearchBar setInput={setInput} input={input} onSent={onSent} isDarkMode={isDarkMode} />
    </MainContainer>
  );
};

export default Main;
