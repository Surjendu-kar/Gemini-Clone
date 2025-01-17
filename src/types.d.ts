interface NightMode {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TopItemProps {
  extended: boolean;
  setExtended: React.Dispatch<React.SetStateAction<boolean>>;
  prevPrompts: string[];
  onSent: (prompt: string) => Promise<void>;
  setRecentPrompt: React.Dispatch<React.SetStateAction<string>>;
  newChat: () => void;
  isDarkMode: boolean;
}

interface BottomItemProps extends NightMode {
  extended: boolean;
}

interface ContextType extends SearchBarProps {
  prevPrompts: string[];
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  onSent: (prompt: string) => Promise<void>;
  setRecentPrompt: React.Dispatch<React.SetStateAction<string>>;
  recentPrompt: string;
  showResult: boolean;
  loading: boolean;
  resultData: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  newChat: () => void;
}
