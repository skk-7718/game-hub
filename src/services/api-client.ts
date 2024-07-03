import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "8413d3aea0ea4001ab2cea0ca62bd738",
  },
});
