import axios from "axios";
import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
      )
      .then((response) => {
        setData(response.data[currency]);
        // console.log(response.data);
        console.log(response.data[currency]);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });

    //Try and catch syntax
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    //     );
    //     setData(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log("Error fetching data: ", error);
    //   }
    // };
  }, [currency]);

  console.log(data);
  return data;
};

export default useCurrencyInfo;
