import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { assets } from "../../assets/assets";
import { keyframes } from "@emotion/react";

const MainContainer = styled(Box)(({ theme }) => ({
  padding: "0px 5%",
  maxHeight: "70vh",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    // hide the scrollbar
    display: "none",
  },

  /* Here we Hide scrollbar for IE, Edge and Firefox */
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ResultTitle = styled(Box)(({ theme }) => ({
  margin: "40px 0",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ResultData = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ImgIcon = styled("img")(({ theme }) => ({
  width: "40px",
  borderRadius: "50%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Loader = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const shimmer = keyframes`
  0% {
    background-position: -800px 0px;
  }
  100% {
    background-position: 800px 0;
  }
`;

const HrDesign = styled("hr")(({ theme }) => ({
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#f6f7f8",
  background: "linear-gradient(to right,#9ed7ff,#ffffff,#9ed7ff)",
  backgroundSize: "800px 50px",
  height: "20px",
  animation: `${shimmer} 3s linear infinite`,

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 300,
  lineHeight: 1.8,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

type Props = Pick<ContextType, "recentPrompt" | "resultData" | "loading">;

function DisplayData({ recentPrompt, resultData, loading }: Props) {
  return (
    <MainContainer>
      <ResultTitle>
        <ImgIcon src={assets.user_icon} alt="" />
        <p>{recentPrompt}</p>
      </ResultTitle>
      <ResultData>
        <ImgIcon src={assets.gemini_icon} alt="" />
        {!loading ? (
          <Text dangerouslySetInnerHTML={{ __html: resultData }} />
        ) : (
          <Loader>
            <HrDesign />
            <HrDesign />
            <HrDesign />
          </Loader>
        )}
      </ResultData>
    </MainContainer>
  );
}

export default DisplayData;
