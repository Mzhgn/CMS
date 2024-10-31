import React from "react";
import "./Home.css";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { xAxisData } from "../../Data";
import WidgetSM from "../../components/widgetSM/WidgetSM";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Monthly Sales" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSM />
        <WidgetLg />
      </div>
    </div>
  );
}
