import { useContext } from "react";
import { Context } from "./Context";
import styles from "./styles/SearchResult.module.scss";

export default function SearchResult() {
  const { searchWord } = useContext(Context);

  return <main className={styles.main}>{searchWord}</main>;
}
