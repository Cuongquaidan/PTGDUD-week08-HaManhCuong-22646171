import React from 'react'
import Logo from "/logo.svg"
import SidebarImg from "/SidebarImg.svg"
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa6";
import { MdOutlinePieChartOutline } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { LuMessageSquareText } from "react-icons/lu";
import { LuChevronsLeftRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
const sidebarData = [
    {
        icon: <MdOutlineDashboard size={20}/>,
        title : "Dashboard",
        to :"/admin/dashboard"
    },
    {
        icon: <FaRegFolder size={20}/>        ,
        title : "Projects",
        to :"/admin/projects"
    },
    {
        icon: <TbUsersGroup size={20} />,
        title : "Teams",
        to :"/admin/teams"
    },
    {
        icon: <MdOutlinePieChartOutline size={20} />,
        title : "Analytics",
        to :"/admin/analytics"
    },
    {
        icon:<LuMessageSquareText size={20} />,
        title : "Messages",
        to :"/admin/messages"
    },
    {
        icon: <LuChevronsLeftRight size={20} />,
        title : "Integrations",
        to :"/admin/intergrations"
    },
]
function SidebarAdmin() {
    const location = window.location.pathname;
    // ${location===item.to?"text-white bg-primary":"text-neutral-600"}
  return (
    <div className='p-4 flex flex-col border-r min-h-screen border-neutral-300 items-center gap-2'>
            <img src={Logo} alt="" className='w-[106px] h-[36px]'/>
            <div className='mt-6 flex flex-col gap-3 w-full'>
                {sidebarData.map((item,index)=>(
                    <Link to={item.to} key={index} className={`p-2 gap-2 text-md  flex rounded-xl items-center `}>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link> 
                ))}
            </div>
            <div className='mt-auto w-full flex flex-col px-4 py-5 gap-2 bg-[#F0F6FFFF] rounded-md'>
            <img src={SidebarImg} alt=""  />
            <p className='font-bold text-xl'>V2.0 is available</p>
            <button className='text-[#2B80FFFF] border bg-white rounded-md text-sm border-[#2B80FFFF] p-2'>
                Try now
            </button>
            </div>
    </div>
  )
}

export default SidebarAdmin