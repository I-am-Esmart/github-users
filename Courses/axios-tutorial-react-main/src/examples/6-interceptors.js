import { useEffect } from "react";
import authFetch from "../axios/Interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-products");
    } catch (error) {}
    // console.log("axios interceptors");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
