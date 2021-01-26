import axios from "axios";
export const search = async (searchWord: string) =>
  await axios(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.key}&cx=${process.env.cx}&q=${searchWord}`
  );
