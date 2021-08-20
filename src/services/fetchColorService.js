import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = (setColors) => {
  axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then((res) => {
      console.log(res);
      setColors(res.data);
    })
    .catch((err) => console.log(err));
};

export default fetchColorService;