import React from "react";
import VerticleBar_Chart from "./VerticleBar_Chart";
import Pie_Chart from "./Pie_Chart";
import { ResponsiveContainer } from "recharts";

const dataKeyConvert = (data) => {
  if (data === 50) {
    return "16-22";
  }
};
const Auidence_Chart = () => {
  return (
    <>
      <div className="flex flex-row w-fit h-fit pt-7  bg-[#FFFFFF]">
        <div className="flex flex-col gap-y-2 w-full h-full">
          <h3 className="p-4 ">Gender</h3>
          <ResponsiveContainer>
            <Pie_Chart></Pie_Chart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-y-2 w-full h-full">
          <h3 className="p-4 ">Age Group</h3>
          <ResponsiveContainer className="w-full  h-full flex flex-col ">
            <VerticleBar_Chart></VerticleBar_Chart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Auidence_Chart;
