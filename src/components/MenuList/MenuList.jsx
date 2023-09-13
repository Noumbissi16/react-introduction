import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constants";
export function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClicked}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
}
