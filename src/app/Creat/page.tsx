"use client";

import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AddPage() {
  const router = useRouter();
  return (
    <div className="w-full max-w-[1440px] min-h-screen bg-[#F0F0F0] flex flex-col items-center px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1120px] h-auto gap-6 mb-[50px]">
        <div className="flex items-center w-full md:w-[508px] h-[44px] rounded-full border border-[#CDCDCD] px-6 gap-4">
          <FaSearch className="w-[20px] h-[20px] text-black" />
          <input
            type="text"
            placeholder="Search for task"
            className="w-full text-[16px] text-black outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <p className="text-[16px] font-semibold text-black">Selam Girma</p>
          <button className="w-[24px] h-[24px]">
            <img src="/signout.svg" alt="Sign Out" />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full px-4">
        <div className="w-full max-w-[827px] rounded-[30px] bg-white shadow-lg flex flex-col gap-[64px] p-6 sm:p-10 md:p-14">
          <div className="flex flex-col gap-[20px] w-full">
            <p className="text-[20px] font-bold text-black">Creat New Task</p>
            <p className="text-base font-normal leading-none text-black/70">
              Organize your productivity effortlessly by creating a new task.
              Name it whatever helps you stay on top of your game!
            </p>
            <div className="flex flex-col md:flex-row w-full gap-[20px]">
              <div className="flex-1 rounded-[10px] border border-[#D2D2D2] bg-[#F9F9F9] p-[16px]">
                <input
                  type="text"
                  placeholder="Task Name"
                  className="w-full text-[20px] font-normal text-[#2E2E2EB2] bg-transparent outline-none"
                />
              </div>
              <button
                className="h-[56px] w-full md:w-[145px] bg-[#EC4C7D] hover:bg-[#d43e6b] text-white font-semibold rounded-lg flex justify-center items-center"
                onClick={() => router.push("/Active-Tasks")}
              >
                Creat Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
