import axios from "axios";

export async function getData(url, setter, req = {}) {
  try {
    await axios.get(url, req).then((res) => {
      console.log(res.data);
      setter(res.data);
    });
  } catch (err) {
    // console.error(err);
    setter(false);
  }
}
