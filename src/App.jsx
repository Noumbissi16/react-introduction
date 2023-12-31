import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClicked = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClicked={onMenuListItemClicked}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
