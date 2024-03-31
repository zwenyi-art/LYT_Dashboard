import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "Group A", value: 55 },
  { name: "Group B", value: 35 },
  { name: "Group C", value: 15 },
];
const RADIAN = Math.PI / 180;
const COLORS = ["#283350", "#00C49F", "#FFBB28"];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      fontSize={12}
      textAnchor={x > cx ? "start" : "end"}
      // dominantBaseline="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Pie_Chart = () => {
  return (
    <PieChart width={190} height={150} className="">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={64}
        innerRadius={50}
        fill="#8884d8"
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Pie_Chart;
