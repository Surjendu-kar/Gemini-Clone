import { FC, KeyboardEvent } from "react";
import { Box, styled } from "@mui/material";
import { assets } from "../../assets/assets";

const MainContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "900px",
  padding: "0px 20px",
  margin: "auto",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { padding: "0px 10px" },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  backgroundColor: "#f0f4f9",
  padding: "10px 20px",
  borderRadius: "50px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    padding: "5px 10px",
  },
}));
const InputField = styled("input")(({ theme }) => ({
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  padding: "8px",
  fontSize: "18px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flex: "none",
    // width: "150px",
    padding: "8px 0",
    fontSize: "15px",
  },
}));
const InputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { gap: theme.spacing(1) },
}));
const ImgIcon = styled("img")(({ theme }) => ({
  width: "24px",
  cursor: "pointer",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    width: "20px",
  },
}));

const BottomInfo = styled("p")(({ theme }) => ({
  fontSize: "13px",
  margin: "15px auto",
  textAlign: "center",
  fontWeight: 300,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    margin: "10px auto",
    fontSize: "10px",
  },
}));

type Props = Pick<ContextType, "input" | "setInput" | "onSent">;

const SearchBar: FC<Props> = ({ setInput, input, onSent }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input.length !== 0) {
      onSent("");
      setInput("");
    }
  };
  return (
    <MainContainer>
      <SearchBox>
        <InputField
          type="text"
          placeholder="Enter a prompt here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={handleKeyDown}
        />
        <InputBox>
          <ImgIcon src={assets.gallery_icon} alt="gallery-icon" />
          <ImgIcon src={assets.mic_icon} alt="mic-icon" />
          {input.length > 0 && (
            <ImgIcon
              src={assets.send_icon}
              alt="send-icon"
              onClick={() => {
                onSent("");
                setInput("");
              }}
            />
          )}
        </InputBox>
      </SearchBox>
      <BottomInfo>
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy and Gemini Apps
      </BottomInfo>
    </MainContainer>
  );
};

export default SearchBar;
