import React from "react";
import Card from "../../components/Card/Card";
import { Bar } from "react-chartjs-2";
import { Chart, ArcElement, PieController, Tooltip, Legend,CategoryScale, LinearScale, BarElement } from "chart.js";
import { CLASS_WISE_FEES_MOCK } from "../../../DATA_MOCKS/classWiseFeesMock";

const transformData = (data: typeof CLASS_WISE_FEES_MOCK) => {
  return {
    labels: data.map((item) => item.class),
    datasets: [{
      label: 'Fees Paid',
      data: data.map((item) => item.feesPaid),
      backgroundColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Fees Pending',
      data: data.map((item) => item.feesPending),
      backgroundColor: 'rgb(54, 162, 235)'
    }]
  }
}

const Home: React.FC = () => {
  Chart.register(ArcElement, PieController, Tooltip, Legend,CategoryScale, LinearScale, BarElement);
  const containerStyles = "w-full flex flex-wrap justify-center mt-10";
  return (
    <div className={containerStyles}>
      <Card>
        <h1>Fees</h1>
        <Bar data={transformData(CLASS_WISE_FEES_MOCK)}  options={ {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }}/>
      </Card>
      <Card>
        <p>Attendance</p>
      </Card>
      <Card>
        <button>Inventory</button>
      </Card>
    </div>
  );
};

export default Home;
