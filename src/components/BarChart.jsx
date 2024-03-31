import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
  Label,
  LabelList,
  PieChart,
  Cell,
  Pie,
} from "recharts";
import PiChart from "./PiChart";
const data = [];
const data2 = [];
const data3 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const colorForDonus = ["#0FA44A", "#283350", "#FFF854"];
for (let i = 0; i < 8; i++) {
  let newData = {
    name: `Page${i}`,
    days: Math.random() * 100,
    pv: 2400,
    amt: 2400,
  };
  let newData2 = {
    name: `Page${i}`,
    uv: Math.random() * 100,
    pv: Math.round(Math.random() * 200),
    sv: Math.round(Math.random() * 60),
    amt: 2400,
  };
  data.push(newData);
  data2.push(newData2);
}
const textStyle = {
  fontSize: "1px", // Adjust the font size as per your requirement
};
// const LineChartReturn = () => {
//   return (
//     <LineChart width={400} height={200} data={data}>
//       <Line type="monotone" dataKey="uv" stroke="#8884d8"></Line>
//       <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip></Tooltip>
//     </LineChart>
//   );
// };
const BarChartReturn = () => {
  return (
    <>
      <div className="flex flex-row w-full h-full ">
        <ResponsiveContainer width="100%" height="80%" className="text-xs">
          <BarChart width={130} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
            <Bar dataKey="days" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="80%" className="text-sm">
          {/* <BarChart layout="vertical" width={100} height={200} data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number"></XAxis>
          <YAxis dataKey="name" type="category" />
          <Tooltip />

          <Bar dataKey="pv" stackId="a" fill="#8884d8">
            <LabelList
              dataKey="pv"
              position="insideTop"
              fill="#FFFFFF"
              className="text-sm"
              angle=""
            />
          </Bar>
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart> */}
          <BarChart
            layout="vertical"
            width={50}
            height={100}
            data={data2}
            barSize={25}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide={true}></XAxis>
            <YAxis dataKey="name" hide={true} type="category" />
            <Tooltip />
            <Bar dataKey="pv" stackId="a" fill="#8884d8">
              <LabelList
                dataKey="pv"
                position="insideTop"
                fill="#FFFFFF"
                className="text-sm"
                angle=""
              />
            </Bar>
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            <Bar dataKey="sv" stackId="a" fill="#FFF854" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="80%"></ResponsiveContainer>
      </div>
      <div className="flex flex-row w-full h-full bg-slate-500">
        <PiChart></PiChart>
      </div>
    </>
  );
};

export default BarChartReturn;
