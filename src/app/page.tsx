"use client";
import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Sidebar } from "../components/layout/Sidebar";

const records = [
  {
    id: 1,
    project: "Sisyphus",
    url: "sisyphus.com",
    date: "22 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
  {
    id: 2,
    project: "Project 2",
    url: "project2.com",
    date: "23 Jan 2022",
    status: [
      { bg: "#0E5A3A", text: "#46E8A5", label: "Active" },
      { bg: "#423419", text: "#FFD666", label: "Customer data" },
      { bg: "#422721", text: "#FFAC82", label: "Admin" },
    ],
  },
];

export default function Home() {
  return (
    <div className="w-full flex">
      <Sidebar />
      <main className="w-full">
        <Header />
        <>
          <div className="">
          <h3 className="font-semibold text-2xl text-white mb-4">Dashboard</h3>
            <div className="bg-[#0D0F10] rounded-[16px]">
              {/* Header table */}
              <div className="grid grid-cols-4 gap-4 border-b border-gray-900">
                <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                  <CustomCheckbox active />
                  <span>Project</span>
                  <ArrowDown />
                </div>
                <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                  <span>Last assessed</span>
                </div>
                <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                  <span>License use</span>
                </div>
                <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]"></div>
              </div>
              {/* body table */}
              {records.map((record) => (
                <div
                  key={record.id}
                  className="grid grid-cols-4 gap-4 border-b border-gray-900"
                >
                  <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                    <CustomCheckbox active />
                    <img className="w-[30px] h-[30px]" src={mockImage} alt="" />
                    <div className="">
                      <p className="font-medium text-sm leading-[143%] text-white">
                        {record.project}
                      </p>
                      <p className="font-normal text-sm leading-[143%] text-[#6f767e]">
                        {record.url}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                    <p className="font-normal text-sm leading-[143%] text-[#6f767e]">
                      {record.date}
                    </p>
                  </div>
                  <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                    {record.status.map((status, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 px-2 rounded-full`}
                        style={{ backgroundColor: status.bg }}
                      >
                        <div
                          className={`w-[6px] h-[6px] rounded-full`}
                          style={{ backgroundColor: status.text }}
                        ></div>
                        <p className={`text-[${status.text}]`}>
                          {status.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded text-[#667085] flex items-center gap-2 font-custom font-semibold text-xs leading-[150%]">
                    <div className="ml-auto flex items-center gap-4">
                      <div className="cursor-pointer">
                        <PenIcon />
                      </div>
                      <div className="cursor-pointer">
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*  paratation  */}
              <div className="flex items-center justify-between px-[24px] py-[11px]">
                <div className="flex items-center justify-center border border-[#282828] rounded-[8px] px-[14px] py-[8px] w-[86px] h-[36px]">
                  Previous
                </div>
                <p className="font-custom font-normal text-sm leading-[143%] text-[#6f767e]">
                  Page 1 of 10
                </p>
                <div className="flex items-center justify-center border border-[#282828] rounded-[8px] px-[14px] py-[8px] w-[86px] h-[36px]">
                  Next
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </div>
  );
}

interface CheckboxProps {
  active: boolean;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ active }) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer ${
        isActive ? "bg-primary" : "bg-[#363A3D]"
      }`}
    >
      {isActive && <CheckIcon />}
    </div>
  );
};
const ArrowDown = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 3.33334V12.6667M8.00001 12.6667L12.6667 8.00001M8.00001 12.6667L3.33334 8.00001"
        stroke="#667085"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 4.5L3.33296 6.72183C3.72804 7.14324 4.39696 7.14324 4.79204 6.72183L8.75 2.5"
        stroke="#0C1132"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

const DeleteIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667"
        stroke="#6F767E"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const PenIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12_567)">
        <path
          d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8334 1.80965C16.1429 1.80965 16.4494 1.87061 16.7353 1.98906C17.0213 2.10752 17.2812 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.011 3.26468C18.1294 3.55064 18.1904 3.85714 18.1904 4.16667C18.1904 4.4762 18.1294 4.7827 18.011 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.25002 17.0833L1.66669 18.3333L2.91669 13.75L14.1667 2.5Z"
          stroke="#6F767E"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_567">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const mockImage =
  "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?w=1480&t=st=1726026329~exp=1726026929~hmac=8c65b5500e47583ad9d980fbecb2d73350e070190313c60a592827251fb25749";
