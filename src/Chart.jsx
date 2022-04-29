import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const Chart = (  ) => {

  const options = {
    series: [
    {
      name:'北海道',
      data:[100,200,300,400,500]
    }
    ],
    title: {
      text: "総人口推移",
    },
    xAxis: {
      title: {
        text: "年度",
      },
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;