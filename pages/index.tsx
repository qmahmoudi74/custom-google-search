import styles from "./styles/Home.module.scss";
import { useEffect, useState } from "react";
import Header from "components/Header";
import SearchResult from "components/SearchResult";
import { Context } from "components/Context";
import { search } from "helper/search";

export default function Home({host}) {
  const { Provider } = Context;

  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState();

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    clearTimeout(timer);
    setTimer(
      setTimeout(
        () =>
          searchWord &&
          search(searchWord).then(({ data }) => setSearchResult(data)),
        1000
      )
    );
  }, [searchWord]);

  return (
    <Provider
      value={{ searchWord, setSearchWord, searchResult, setSearchResult }}
    >
      <div className={styles.container}>
        <div>{host}</div>
        <Header />
        <SearchResult />
      </div>
    </Provider>
  );
}

export const getServerSideProps = async ({req}) => {
  return {props: {host: req.headers.host}
}
