import "./ChartBar.css";

const ChartBar = (props) => {
  let heightOfBar = Math.round(props.value / props.maxValue * 100);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: heightOfBar + "%" }}
        ></div>
      </div>
      <label className="chart-bar__label">{props.title}</label>
    </div>
  );
};

export default ChartBar;
