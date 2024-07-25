import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Main isDarkMode={isDarkMode}/>
    </>
  );
}

export default App;
