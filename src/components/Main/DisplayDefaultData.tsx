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
  fontSize: "56px",
  color: "#c4c7c5",
  fontWeight: "500",
  padding: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MainHeading = styled("span")(({ theme }) => ({
  background: "linear-gradient(16deg,#4b90ff,#ff5546)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Title = styled(Typography)(({ theme }) => ({
  color: "#585858",
  fontSize: "17px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Cards = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
  gap: theme.spacing(1),
  padding: "20px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Card = styled(Box)(({ theme }) => ({
  height: "200px",
  padding: "15px",
  backgroundColor: "#f0f4f9",
  borderRadius: "10px",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#dfe4ea",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ImgIcon = styled("img")(({ theme }) => ({
  width: "35px",
  padding: "5px",
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "20px",
  bottom: "10px",
  right: "10px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DisplayDefaultData = () => {
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
        <Card>
          <Title>
            Suggest beautiful places to see on an upcoming road trip
          </Title>
          <ImgIcon src={assets.compass_icon}></ImgIcon>
        </Card>
        {/* card */}
        <Card>
          <Title>Briefly Summarized this concept: urban planning</Title>
          <ImgIcon src={assets.bulb_icon}></ImgIcon>
        </Card>
        {/* card */}
        <Card>
          <Title>Brainstorm team bonding activities for our work retreat</Title>
          <ImgIcon src={assets.message_icon}></ImgIcon>
        </Card>
        {/* card */}
        <Card>
          <Title>Improve the readability of the following code</Title>
          <ImgIcon src={assets.code_icon}></ImgIcon>
        </Card>
      </Cards>
    </MainContainer>
  );
};

export default DisplayDefaultData;
