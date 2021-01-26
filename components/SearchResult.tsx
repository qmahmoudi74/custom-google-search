import { useContext } from "react";
import { Context } from "./Context";
import ResultCard from "./ResultCard";
import styles from "./styles/SearchResult.module.scss";

interface Item {
  title: string;
  link: string;
  snippet: string;
}

export default function SearchResult() {
  const { searchResult } = useContext(Context);

  return (
    <main className={styles.main}>
      {searchResult?.items?.map((item: Item) => (
        <ResultCard {...item} key={item.link} />
      ))}
    </main>
  );
}
