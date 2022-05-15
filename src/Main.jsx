import React, { useEffect, useState } from "react";
import CheckField from "./CheckField";
import Chart from "./Chart";

import axios from "axios";

const Main = () => {
  const [prefectures, setPreFectures] = useState("");
  // const [prefPopulation, setPrefPopulation] = useState("");

  useEffect(() => {
    // 都道府県一覧を取得する
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
      })
      .then((results) => {
        // console.log(prefCode);
        setPreFectures(results.data);
        console.log(results.data);
      })
      .catch((error) => {});
  }, []);

  // チェックボックスをクリックした際の処理
  // const handleClickCheck = (prefName, prefCode, check) => {
  //   let c_prefPopulation = prefPopulation.slice();

  //   // チェックをつけた処理
  //   if (check) {
  //     if (
  //       c_prefPopulation.findIndex((value) => value.prefName === prefName) !==
  //       -1
  //     )
  //       return;

  //     axios
  //       .get(
  //         "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
  //           String(prefCode),
  //         {
  //           headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
  //         }
  //       )
  //       .then((results) => {
  //         c_prefPopulation.push({
  //           prefName: prefName,
  //           data: results.data.result.data[0].data,
  //         });
  //         setPrefPopulation(c_prefPopulation);
  //         console.log(prefPopulation);
  //       })
  //       .catch((error) => {
  //         return;
  //       });
  //   }
  //   // チェックを外した処理
  //   else {
  //     const deleteIndex = c_prefPopulation.findIndex(
  //       (value) => value.prefName === prefName
  //     );
  //     if (deleteIndex === -1) return;
  //     c_prefPopulation.splice(deleteIndex, 1);
  //     setPrefPopulation(c_prefPopulation);
  //   }
  // };

  return (
    <main>
      <h2>都道府県</h2>
      {/* {prefectures && (
        <CheckField
          prefectures={prefectures.result}
          onChange={handleClickCheck}
        />
      )} */}
      <h2>人口推移グラフ</h2>
      {/* <Chart populationdata={prefPopulation} /> */}
    </main>
  );
};

export default Main;
