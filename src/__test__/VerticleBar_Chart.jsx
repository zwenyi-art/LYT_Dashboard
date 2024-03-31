import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data2 = [
  {
    name: 1,
    Male: 20,
    Female: 25,
    Other: 8,
  },
  {
    name: 2,
    Male: 15,
    Female: 20,
    Other: 6,
  },
  {
    name: 3,
    Male: 11,
    Female: 16,
    Other: 3,
  },
  {
    name: 4,
    Male: 7,
    Female: 11,
    Other: 2,
  },
];

const perCentConvert = (value) => {
  switch (value) {
    case 8:
      return `40%`;
    case 6:
      return `30%`;
    case 3:
      return `20%`;
    case 2:
      return `10%`;
  }
};
const ageConverter = (value) => {
  switch (value) {
    case 20:
      return `16-25`;
    case 15:
      return `25-35`;
    case 11:
      return `35-55`;
    case 7:
      return `55+`;
  }
};
const VerticleBar_Chart = () => {
  return (
    <BarChart
      layout="vertical"
      width={260}
      height={160}
      data={data2}
      className="bg-[#FFFFFF] "
    >
      <XAxis type="number" hide={true}></XAxis>
      <YAxis dataKey="name" hide={true} type="category" />
      <Legend
        wrapperStyle={{
          top: -80,
          right: 0,
        }}
        margin={{ top: 10, bottom: 10 }}
        iconType="circle"
      ></Legend>
      <Bar dataKey="Male" stackId="a" fill="#283350">
        <LabelList
          dataKey="Male"
          position="inside"
          fill="#FFFFFF"
          className=" text-white"
          angle=""
          formatter={ageConverter}
          fontSize={12}
        />
      </Bar>
      <Bar dataKey="Female" stackId="a" fill="#0FA44A" />
      <Bar dataKey="Other" stackId="a" fill="#FFF854">
        <LabelList
          dataKey="Other"
          position="right"
          fill="#283350"
          className=""
          angle=""
          // formatter={(value) => `${value}%`}
          formatter={perCentConvert}
        />
      </Bar>
    </BarChart>
  );
};

export default VerticleBar_Chart;
