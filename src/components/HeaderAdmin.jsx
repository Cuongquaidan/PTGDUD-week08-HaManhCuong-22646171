import React, { useEffect, useState } from "react";
import Bell from "/bell.svg";
import Question from "/question.svg";
import Search from "/search.svg";
import Avatar from "/avatar.png";
import DashboardFilled from "/Dashboardfilled.svg";
import { LuShoppingCart } from "react-icons/lu";
import { IoLogoUsd } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
function HeaderAdmin() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/overview");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const resjson = await response.json();
            setData(resjson);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="py-4 px-7 border-b border-neutral-300 flex justify-between">
                <h2 className="font-bold text-primary text-2xl ">Dashboard</h2>
                <div className="flex gap-2 items-center">
                    <div className="relative ">
                        <img
                            src={Search}
                            alt=""
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                        />
                        <input
                            type="text"
                            className="p-1 px-10 bg-neutral-200 outline-none"
                            placeholder="Search..."
                        />
                    </div>
                    <div>
                        <img src={Bell} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                        <img src={Question} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                        <img src={Avatar} alt="" className="w-6 h-6" />
                    </div>
                </div>
            </div>
            {data && (
                <div className="py-8 px-6">
                    <div className="flex gap-2 items-center">
                        <img src={DashboardFilled} className="w-6 h-6" alt="" />
                        <h3 className="text-xl">Overview</h3>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-4">
                        <div className="rounded-md bg-[#FEF0F5FF] p-5 relative flex flex-col gap-4">
                            <div className="absolute top-5 right-5 w-11 h-11 border rounded-md flex items-center justify-center border-[#F44B87FF]">
                                <LuShoppingCart
                                    size={20}
                                    className="text-primary"
                                ></LuShoppingCart>
                            </div>
                            <p className="font-bold text-md">Turnover</p>
                            <p className="font-bold text-4xl">
                                $
                                {data
                                    .filter(
                                        (item) => item.title === "Turnover"
                                    )[0]
                                    .total.toLocaleString()}
                            </p>
                            <div className="flex text-sm items-center gap-2 ">
                                <IoTriangle
                                    size={8}
                                    className="text-[#117B34FF]"
                                />
                                <p className=" text-[#117B34FF]">
                                    {data
                                        .filter(
                                            (item) => item.title === "Turnover"
                                        )[0]
                                        .ratio.toLocaleString()}
                                    %
                                </p>
                                <p className="text-neutral-600">
                                    period of change
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md bg-[#F0F6FFFF] p-5 relative flex flex-col gap-4">
                            <div className="absolute top-5 right-5 w-11 h-11 border rounded-md flex items-center justify-center border-[#2B80FFFF]">
                                <IoLogoUsd
                                    size={20}
                                    className="text-[#2B80FFFF]"
                                ></IoLogoUsd>
                            </div>
                            <p className="font-bold text-md">Profit</p>
                            <p className="font-bold text-4xl">
                                $
                                {data
                                    .filter(
                                        (item) => item.title === "Profit"
                                    )[0]
                                    .total.toLocaleString()}
                            </p>
                            <div className="flex text-sm items-center gap-2 ">
                                <IoTriangle
                                    size={8}
                                    className="text-[#117B34FF]"
                                />
                                <p className=" text-[#117B34FF]">
                                    {data
                                        .filter(
                                            (item) => item.title === "Profit"
                                        )[0]
                                        .ratio.toLocaleString()}
                                    %
                                </p>
                                <p className="text-neutral-600">
                                    period of change
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md bg-[#F0F6FFFF] p-5 relative flex flex-col gap-4">
                            <div className="absolute top-5 right-5 w-11 h-11 border rounded-md flex items-center justify-center border-[#2B80FFFF]">
                                <FaRegUserCircle
                                    size={20}
                                    className="text-[#2B80FFFF]"
                                ></FaRegUserCircle>
                            </div>
                            <p className="font-bold text-md">New customer</p>
                            <p className="font-bold text-4xl">
                                {data
                                    .filter(
                                        (item) => item.title === "New customer"
                                    )[0]
                                    .total.toLocaleString()}
                            </p>
                            <div className="flex text-sm items-center gap-2 ">
                                <IoTriangle
                                    size={8}
                                    className="text-[#117B34FF]"
                                />
                                <p className=" text-[#117B34FF]">
                                    {data
                                        .filter(
                                            (item) =>
                                                item.title === "New customer"
                                        )[0]
                                        .ratio.toLocaleString()}
                                    %
                                </p>
                                <p className="text-neutral-600">
                                    period of change
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeaderAdmin;
