import axios from "axios";
export const search = async (searchWord: string) =>
  await axios.get("https://www.googleapis.com/customsearch/v1?", {
    params: {key: }
  });
