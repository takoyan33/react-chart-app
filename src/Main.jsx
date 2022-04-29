import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";
import CheckField from "./CheckField";

const Main = () => {
  const [prefectures, setPrefectures] = useState("");

  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        setPrefectures(results.data);
      })
      .catch((error) => {});
  }, []);

  

  return (
    <div>
      <h2>都道府県</h2>
      {/* {prefectures} */}
      <CheckField />
      <h2>人口推移グラフ</h2>
      <Chart />
    </div>
  );
};

export default Main;
