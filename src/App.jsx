import React from "react";
import photo1 from "./assets/photo1.png";
import eye1 from "./assets/eye.png";
import vector from "./assets/Vector.png";
import {
  MdDashboard,
  MdOutlineAnalytics,
  MdOutlinePermMedia,
  MdOutlineContactSupport,
  MdOutlineRemoveRedEye,
  MdArrowOutward,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdArrowUp } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import lytLogo from "./assets/lytLogo.png";
import LineChartReturn from "./components/BarChart";
import BarChartReturn from "./components/BarChart";
import Bar_Chart from "./__test__/Bar_Chart";
import Auidence_Chart from "./__test__/Auidence_Chart";
import Pie_Chart from "./__test__/Pie_Chart";

const App = () => {
  return (
    <main className=" w-full h-svh flex flex-row ">
      {/* side bar  */}
      <section className=" w-1/5 h-full  flex flex-col ">
        <div className="py-6 w-full h-fit flex items-center justify-center">
          <img
            src={lytLogo}
            height={100}
            className=" bg-no-repeat"
            alt=""
            srcSet=""
          />
        </div>
        <ul className=" w-full h-full flex flex-col items-center gap-y-6  md:gap-y-2">
          <li className="w-full h-fit inline-flex items-center gap-x-2 py-2 text-white bg-[#0FA44A]">
            <MdDashboard className="ml-6" />
            <span>Dashboard</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <MdOutlineAnalytics size={17} className="ml-6" />
            <span>Analytics</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <FaPeopleGroup size={17} className="ml-6" />
            <span>Communities</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <IoNotificationsOutline size={18} className="ml-6" />
            <span>Notifications</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <MdOutlinePermMedia size={17} className="ml-6" />
            <span>Media</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <MdOutlineContactSupport size={17} className="ml-6" />
            <span>Support</span>
          </li>
          <li className="w-full h-fit  inline-flex items-center gap-x-2 text-black">
            <AiOutlineSetting className="ml-6" />
            <span>Settings</span>
          </li>
        </ul>

        <div className="text-[#0FA44A] h-fit inline-flex items-center justify-center gap-x-2 w-full py-3">
          <IoIosLogOut size={19} />
          <span>Log-out</span>
        </div>
      </section>
      {/* content box  */}
      <section className="bg-slate-50 w-full h-full grid grid-flow-row gap-y-1 overflow-y-scroll p-2">
        {/* <BarChartReturn></BarChartReturn> */}
        <nav className="flex flex-row items-center justify-center gap-x-10">
          <span className="flex-none  font-normal">
            Metrics looking good, Snow!
          </span>
          <form className="flex-1 max-w-md mx-auto ">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <article className="flex-none flex flex-row items-center justify-center gap-x-2">
            <div className="w-12 h-12 bg-green-500 rounded-full"></div>
            <div className="flex flex-col items-center justify-center gap-0">
              <h4 className="text-xl">Snow Olohijere</h4>
              <span>uch231@gmail.com</span>
            </div>
          </article>
        </nav>

        <div className="flex flex-row items-center justify-between py-2">
          <p className="text-xl font-medium">Performance Metrics</p>
          <a href="http://" className="underline text-[#0FA44A]">
            Download Summary
          </a>
        </div>

        <article className="w-full h-fit  flex flex-row items-center gap-x-5 lg:gap-x-16 my-2 overflow-y-clip">
          <div className="w-[350px] h-[160px] p-5 flex flex-col gap-y-4 rounded-sm bg-white">
            <div className="flex flex-row justify-between w-full h-fit ">
              <p className="opacity-50">Followers</p>
              <MdArrowOutward />
            </div>
            <h3 className="font-semibold text-xl text-left">93.2k</h3>
            <div className="flex flex-row items-center justify-between w-full h-fit">
              <p className="text-sm opacity-50 flex items-center gap-x-2 w-fit h-fit">
                <span className="text-[#0FA44A] flex items-center justify-center">
                  <IoMdArrowUp />
                  0.8%
                </span>
                <span>in the last 7 days</span>
              </p>
              <div className="w-fit h-fit flex items-center justify-center">
                <img src={vector} width={30} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[160px] p-5 flex flex-col gap-y-4 rounded-sm bg-white">
            <div className="flex flex-row justify-between w-full h-fit ">
              <p className="opacity-50">Likes</p>
              <MdArrowOutward />
            </div>
            <h3 className="font-semibold text-xl text-left">400k</h3>
            <div className="flex flex-row items-center justify-between w-full h-fit">
              <p className="text-sm opacity-50 flex items-center gap-x-2 w-fit h-fit">
                <span className="text-[#0FA44A] flex items-center justify-center">
                  <IoMdArrowUp />
                  1.21%
                </span>
                <span>in the last 7 days</span>
              </p>
              <div className="w-fit h-fit flex items-center justify-center">
                <img src={vector} width={30} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[160px] p-5 flex flex-col gap-y-4 rounded-sm bg-white">
            <div className="flex flex-row justify-between w-full h-fit ">
              <p className="opacity-50">Comments</p>
              <MdArrowOutward />
            </div>
            <h3 className="font-semibold text-xl text-left">289.1k</h3>
            <div className="flex flex-row items-center justify-between w-full h-fit">
              <p className="text-sm opacity-50 flex items-center gap-x-2 w-fit h-fit">
                <span className="text-[#0FA44A] flex items-center justify-center">
                  <IoMdArrowUp />
                  2.7%
                </span>
                <span>in the last 7 days</span>
              </p>
              <div className="w-fit h-fit flex items-center justify-center">
                <img src={vector} width={30} alt="" />
              </div>
            </div>
          </div>
        </article>
        {/* graph and bar */}
        <article className="py-4 w-full  h-full grid grid-flow-col gap-x-3 ">
          <div className="w-full h-fit   flex flex-row  items-center  justify-between gap-x-28">
            <h3 className="text-xl font-normal">Engagement Rates</h3>
            <div className="w-fit h-fit px-3 py-1 bg-green-300/40 rounded-sm flex gap-x-2 items-center ">
              <span>Weekly</span>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
          <div className="w-full h-fit">
            <h3 className="text-xl font-normal">Auidence Demography</h3>
          </div>
        </article>
        <div className="w-full h-full grid grid-flow-col gap-x-3">
          <section className=" w-full h-full flex flex-shrink  flex-col ">
            <article className="w-full md:h-[400px] lg:h-1/3">
              <Bar_Chart></Bar_Chart>
            </article>
            <div className=" w-full h-[200px]  flex flex-col">
              <p className="text-xl font-medium py-2">Post Activity</p>
              <div className="flex flex-col items-center gap-y-2 pt-1 bg-[#FFFFFF]">
                <div className="flex border-b-2 py-1  items-center justify-center  w-full h-fit">
                  <div className="w-full h-fit flex items-center justify-center gap-x-2">
                    <img
                      src={photo1}
                      alt=""
                      width={50}
                      className="-ml-7 bg-no-repeat "
                      srcset=""
                    />
                  </div>
                  <span className="w-56 flex flex-shrink-0 font-medium">
                    Success can be achieved by being bold enough ...
                  </span>
                  <p className="w-full h-full flex items-center font-medium">
                    May 30
                  </p>
                  <div className="flex flex-row gap-x-2 justify-center items-center w-full h-fit">
                    <img src={eye1} alt="" className="" srcset="" />
                    <span className="font-medium">1.1k</span>
                  </div>
                  <div className="flex relative flex-row gap-x-1 justify-center items-center w-fit h-fit pr-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="flex border-b-2 py-1  items-center justify-center  w-full h-fit">
                  <div className="w-full h-fit flex items-center justify-center gap-x-2">
                    <img
                      src={photo1}
                      alt=""
                      width={50}
                      className="-ml-7 bg-no-repeat "
                      srcset=""
                    />
                  </div>
                  <span className="w-56 flex flex-shrink-0 font-medium">
                    Success can be achieved by being bold enough ...
                  </span>
                  <p className="w-full h-full flex items-center font-medium">
                    May 30
                  </p>
                  <div className="flex flex-row gap-x-2 justify-center items-center w-full h-fit">
                    <img src={eye1} alt="" className="" srcset="" />
                    <span className="font-medium">1.1k</span>
                  </div>
                  <div className="flex relative flex-row gap-x-1 justify-center items-center w-fit h-fit pr-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" w-full h-full place-self-end bg-blue-700  flex  flex-col">
            <div className="">
              <Auidence_Chart></Auidence_Chart>
            </div>
            <div className="bg-[#FFFFFF] p-7 gap-y-3 flex flex-col items-center justify-between w-full h-full">
              <div className="w-full h-fit flex items-center justify-between py-2">
                <p className="font-medium">Top Locations</p>
                <button className="border border-[#0FA44A] text-[#0FA44A] px-5 py-1 rounded-md w-fit h-fit">
                  See More
                </button>
              </div>
              <article className="w-full h-full gird grid-flow-row divide-y">
                <div className="flex text-xs   flex-row justify-between items-center w-full h-fit">
                  <span className="opacity-45">Country</span>
                  <span className="opacity-45">Visitors</span>
                </div>
                <div className="flex  font-medium py-2  flex-row justify-between items-center w-full h-fit">
                  <span className="">Nigeria</span>
                  <div className="flex flex-col w-fit h-fit">
                    <span>5430</span>
                    <p className="text-xs opacity-50 flex items-center gap-x-2 w-fit h-fit">
                      <span className="text-[#0FA44A] flex items-center justify-center">
                        <IoMdArrowUp />
                        2.7%
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex  font-medium py-2  flex-row justify-between items-center w-full h-fit">
                  <span className="">Germany</span>
                  <div className="flex flex-col w-fit h-fit">
                    <span>5430</span>
                    <p className="text-xs opacity-50 flex items-center gap-x-2 w-fit h-fit">
                      <span className="text-[#0FA44A] flex items-center justify-center">
                        <IoMdArrowUp />
                        2.7%
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex  font-medium py-2  flex-row justify-between items-center w-full h-fit">
                  <span className="">Switzerland</span>
                  <div className="flex flex-col w-fit h-fit">
                    <span>5430</span>
                    <p className="text-xs opacity-50 flex items-center gap-x-2 w-fit h-fit">
                      <span className="text-[#0FA44A] flex items-center justify-center">
                        <IoMdArrowUp />
                        2.7%
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex  font-medium py-2  flex-row justify-between items-center w-full h-fit">
                  <span className="">Iraq</span>
                  <div className="flex flex-col w-fit h-fit">
                    <span>5430</span>
                    <p className="text-xs opacity-50 flex items-center gap-x-2 w-fit h-fit">
                      <span className="text-[#0FA44A] flex items-center justify-center">
                        <IoMdArrowUp />
                        2.7%
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default App;
