import Chart from "./Chart.js";

const ChartData = (props) => {
  let chartData = [
    { title: "Jan", value: 0 },
    { title: "Feb", value: 0 },
    { title: "Mar", value: 0 },
    { title: "Apr", value: 0 },
    { title: "May", value: 0 },
    { title: "Jun", value: 0 },
    { title: "Jul", value: 0 },
    { title: "Aug", value: 0 },
    { title: "Sep", value: 0 },
    { title: "Oct", value: 0 },
    { title: "Nov", value: 0 },
    { title: "Dec", value: 0 },
  ];

  props.expenseData.map((expense) => {
    chartData[expense.date.getMonth()].value += expense.amount;
  });

  return (
    <div>
      <Chart chartData={chartData} />
    </div>
  );
};

export default ChartData;
