import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [];
const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
for (let i = 0; i < 7; i++) {
  let newData = {
    name: days[i],
    days: Math.random() * 100,
    pv: 2400,
    amt: 2400,
  };
  data.push(newData);
}

console.log(data);
const Bar_Chart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className="bg-[#FFFFFF] ">
        <BarChart width={100} height={100} data={data} barSize={30}>
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="name" className="" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="days" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
    // <ResponsiveContainer width="100%" height="100%" className="">
    //   <BarChart width={100} height={150} data={data} barSize={25}>
    //     <CartesianGrid strokeDasharray="1 3" />
    //     <XAxis dataKey="name" className="" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="days" fill="#82ca9d" />
    //   </BarChart>
    // </ResponsiveContainer>
  );
};

export default Bar_Chart;
