import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// (async () => {
//   let URL = await instance.get(
// // // "/movie/top_rated?api_key=25ac4dbfffbbdaefa9c5c5eb2e25feec"
//   );
//   console.log(URL.data.results);
// })();

export default instance;
