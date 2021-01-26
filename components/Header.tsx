import styles from "./styles/Header.module.scss";
import { MdSearch } from "react-icons/md";
import { useContext, useEffect } from "react";
import { Context } from "./Context";

export default function Header() {
  const { searchWord, setSearchWord } = useContext(Context);

  useEffect(() => {}, [searchWord]);

  const searchBoxChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchWord(event.target.value);

  return (
    <header className={styles.header}>
      <div className={styles.title}>Google Custom Search</div>
      <div className={styles.searchBox}>
        <div className={styles.icon}>
          <MdSearch size={24} />
        </div>
        <input
          type="text"
          autoComplete="on"
          onChange={searchBoxChange}
          value={searchWord}
        />
      </div>
    </header>
  );
}
