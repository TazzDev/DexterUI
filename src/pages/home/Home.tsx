import React from "react";
import Card from "../../components/Card/Card";
import { Chart, ArcElement, PieController, Tooltip, Legend,CategoryScale, LinearScale, BarElement } from "chart.js";
import { FeesView } from "../../components/FeesView";



const Home: React.FC = () => {
  Chart.register(ArcElement, PieController, Tooltip, Legend,CategoryScale, LinearScale, BarElement);
  const containerStyles = "w-full flex flex-wrap justify-center mt-10";
  return (
    <div className={containerStyles}>
      <FeesView />
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
