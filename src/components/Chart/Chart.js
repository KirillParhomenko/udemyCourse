import ChartBar from "./ChartBar.js";

import "./Chart.css";

const Chart = (props) => {
  let dataArray = props.chartData.map((data) => data.value);

  let maxValue = Math.max(...dataArray);

  return (
    <div className="chart">
      {props.chartData.map((data) =>
        <ChartBar
          key={data.title}
          value={data.value}
          title={data.title}
          maxValue={maxValue}
        />
        )}
    </div>
  );
};

export default Chart;
