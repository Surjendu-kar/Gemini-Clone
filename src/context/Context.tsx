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
    }, 50 * index);
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

    // Convert main heading
    result = result.replace(/^## (.+)$/gm, "<h2>$1</h2>");

    // Check if numbered list items are present
    const hasNumberedList = /\d+\.\s+/.test(result);

    if (!hasNumberedList) {
      // Add line breaks before bold text ending with colon or question mark
      result = result.replace(/\n(\*\*.+?[:?]\*\*)/g, "<br/><br/><h3>$1</h3>");
    }

    // Convert bold text
    result = result.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");

    // Convert hyphens to bullet points and add line breaks
    result = result.replace(/^\s*-\s+/gm, "<br/>• ");

    if (hasNumberedList) {
      // Add line breaks for numbered list items and ensure proper spacing
      result = result.replace(/(\d+)\.\s+/g, "<br/><br/>$1. ");
    }

    // Add line breaks for bullet points (if any)
    result = result.replace(/•\s+/g, "<br/>• ");

    // Replace all asterisks with line breaks
    result = result.split("*").join("<br/>");

    // Ensure consistent spacing after colons in list items
    result = result.replace(/:\s+/g, ": ");

    const newResponseArr = result.split(" ");
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
