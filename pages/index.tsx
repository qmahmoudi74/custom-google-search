import styles from "./styles/Home.module.scss";
import { useEffect, useState } from "react";
import Header from "components/Header";
import SearchResult from "components/SearchResult";
import { Context } from "components/Context";
import { search } from "helper/search";

export default function Home() {
  const { Provider } = Context;

  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    search(searchWord);
  }, [searchWord]);

  return (
    <Provider
      value={{ searchWord, setSearchWord, searchResult, setSearchResult }}
    >
      <div className={styles.container}>
        <Header />
        <SearchResult />
      </div>
    </Provider>
  );
}
