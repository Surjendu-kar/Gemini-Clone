import { createContext, useState } from "react";
import run from "../config/gemini";

interface ContextProviderProps {
  children: React.ReactNode;
}

// declare default context values
const defaultContext: ContextType = {
  input: "",
  loading: false,
  onSent: async () => {},
  prevPrompts: [],
  recentPrompt: "",
  resultData: "",
  setInput: () => {},
  setPrevPrompts: () => {},
  setRecentPrompt: () => {},
  showResult: false,
  newChat: () => {},
};

export const Context = createContext<ContextType>(defaultContext);

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [input, setInput] = useState<string>("");
  const [recentPrompt, setRecentPrompt] = useState<string>("");
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<string>("");

  const delayPara = (index: number, nextWord: string) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt: string) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let result;
    if (prompt !== "") {
      result = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      result = await run(input);
    }
    // setRecentPrompt(input);
    // setPrevPrompts((prev) => [...prev, input]);

    // const result = await run(input);
    const resultArr = result.split("**");
    let newResponse = "";

    for (let i = 0; i < resultArr.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += resultArr[i];
      } else {
        newResponse += "<b>" + resultArr[i] + "</b>";
      }
    }

    const newResponse2 = newResponse.split("*").join("</br>");
    const newResponseArr = newResponse2.split(" ");
    for (let i = 0; i < newResponseArr.length; i++) {
      delayPara(i, newResponseArr[i] + " ");
    }

    setLoading(false);
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
