import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        label: "Weight Lifted (kg)",
        data: data.map(item => item.weight),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ProgressChart;
