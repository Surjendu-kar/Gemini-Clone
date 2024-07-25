import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { assets } from "../../assets/assets";
const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "900px",
  margin: "auto",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Greet = styled(Box)(({ theme }) => ({
  margin: "50px 0",
  fontSize: "3.5rem",
  color: "#c4c7c5",
  fontWeight: "500",
  padding: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const MainHeading = styled("span")(({ theme }) => ({
  fontSize: "3.5rem",
  background: "linear-gradient(16deg,#4b90ff,#ff5546)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));
const Title = styled(Typography)<{ isDarkMode: boolean }>(
  ({ isDarkMode, theme }) => ({
    color: isDarkMode ? "#ffffff" : "#585858",

    fontSize: "17px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: { fontSize: "15px" },
  })
);

const Cards = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
  gap: theme.spacing(1),
  padding: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
    padding: "10px",
  },
}));
const Card = styled(Box)<{ isDarkMode: boolean }>(({ isDarkMode, theme }) => ({
  height: "200px",
  padding: "15px",
  backgroundColor: isDarkMode ? "#272727" : "#f0f4f9",
  borderRadius: "10px",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#dfe4ea",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    height: "150px",
  },
}));

const ImgIcon = styled("img")<{ isDarkMode: boolean }>(
  ({ isDarkMode, theme }) => ({
    width: "35px",
    padding: "5px",
    position: "absolute",
    backgroundColor: "white",
    filter: isDarkMode ? "invert(1)" : "none",

    borderRadius: "20px",
    bottom: "10px",
    right: "10px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

interface DisplayDefaultDataProps {
  isDarkMode: boolean;
}

const DisplayDefaultData = ({ isDarkMode }: DisplayDefaultDataProps) => {
  return (
    <MainContainer>
      {/* greet */}
      <Greet>
        <p>
          <MainHeading>Hello, Dev.</MainHeading>
        </p>
        <p>How can I help you today?</p>
      </Greet>
      {/* cards */}
      <Cards>
        {/* card */}
        <Card isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>
            Suggest beautiful places to see on an upcoming road trip
          </Title>
          <ImgIcon src={assets.compass_icon} isDarkMode={isDarkMode}></ImgIcon>
        </Card>
        {/* card */}
        <Card isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>
            Briefly Summarized this concept: urban planning
          </Title>
          <ImgIcon src={assets.bulb_icon} isDarkMode={isDarkMode}></ImgIcon>
        </Card>
        {/* card */}
        <Card isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>
            Brainstorm team bonding activities for our work retreat
          </Title>
          <ImgIcon src={assets.message_icon} isDarkMode={isDarkMode}></ImgIcon>
        </Card>
        {/* card */}
        <Card isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>
            Improve the readability of the following code
          </Title>
          <ImgIcon src={assets.code_icon} isDarkMode={isDarkMode}></ImgIcon>
        </Card>
      </Cards>
    </MainContainer>
  );
};

export default DisplayDefaultData;
