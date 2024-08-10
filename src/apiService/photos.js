import axios from "axios";

const API_KEY = "hT03SIqd8NDksToUf8tBUWWowzMT8DH0NM7dIkKDnas";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);

  return data.results;
};
export default getPhotos;
