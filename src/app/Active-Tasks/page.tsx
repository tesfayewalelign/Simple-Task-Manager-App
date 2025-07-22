"use client";
import { useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

const initialTasks = [
  {
    id: 1,
    title: "FetanSystem Technology internship test project",
    status: "pending",
  },
  {
    id: 2,
    title: "FetanSystem Technology internship test project",
    status: "Completed",
  },
  {
    id: 3,
    title: "FetanSystem Technology internship test project",
    status: "pending",
  },
  {
    id: 4,
    title: "FetanSystem Technology internship test project",
    status: "pending",
  },
  {
    id: 5,
    title: "FetanSystem Technology internship test project",
    status: "Completed",
  },
  {
    id: 6,
    title: "FetanSystem Technology internship test project",
    status: "pending",
  },
];

export default function ActiveTasksPage() {
  const router = useRouter();

  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    filterStatus === "pending"
      ? task.status.toLowerCase() === "pending" &&
        task.title.toLowerCase().includes(search.toLowerCase())
      : false
  );

  return (
    <div className="w-full max-w-[1440px] h-screen  bg-white  flex flex-col items-center px-4 py-8 mx-auto">
      <div className="flex justify-between items-center w-[1120px] h-[44px] mb-[50px]">
        <div className="flex items-center w-[508px] h-[44px] rounded-full border border-[#CDCDCD] px-6 gap-4">
          <FaSearch className="w-[20px] h-[20px] text-black" />
          <input
            type="text"
            placeholder="Search for task"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
      <div className="w-[868px] h-[423px] top-[126px] left-[286px]">
        <div className="flex flex-row w-fit h-fit  top-[126px] left-[286px]">
          <div className="flex flex-row w-[114px]  h-[35px] pt-8px pr-24px pb-8px pl-24px gap-[10px] justify-center items-center bg-[#EC4C7D]">
            <button
              onClick={() => setFilterStatus("pending")}
              className={`w-88px] h-[19px]  font-bold text-base  ${
                filterStatus === "pending"
                  ? "bg-[#EC4C7D] text-white"
                  : "bg-[#D2D2D2] text-black"
              }`}
            >
              pending
            </button>
          </div>

          <div className="flex flex-row w-[136px] h-[35px] border pt-8px pr-24px pb-8px pl-24px gap-[10px]  bg-[#D2D2D2] justify-center items-center">
            <button
              onClick={() =>
                router.push("/Inactive-Tasks?pageFilter=completed")
              }
              className={`flex items-center justify-center w-[136px] h-[35px] gap-[10px] font-bold text-base ${
                filterStatus === "completed"
                  ? "bg-[#EC4C7D] text-white"
                  : "bg-[#D2D2D2] text-black border"
              }`}
            >
              completed
            </button>
          </div>
        </div>

        {filterStatus === "pending" && (
          <div className="flex flex-col w-full bg-white ">
            <div className="flex flex-row w-fill h-[44px] top-[197px] left-[286px] gap-[40px]">
              <p className="w-fill h-[29px] font-inter text-black font-bold text-2xl ">
                You've got{" "}
                <span className="font-inter font-bold text-2xl text-red-700">
                  7 tasks
                </span>{" "}
                today
              </p>
              <button className="flex flex-row w-[164px] h-[44px] rounded-[10px] pt-[12px] pl-[32px] pb-[12px] pr-[32px]  gap-[10px]   bg-[#EC4C7D]">
                <span className="w-[20px] h-[20px] text-[#FFFFFF]">+</span>{" "}
                <span className="w-[70px] h-[19px] font-inter text-base font-normal text-[#FFFFFF]">
                  Add New
                </span>
              </button>
            </div>

            {filteredTasks.length > 0 ? (
              <div className="divide-y">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10px h-10px">
                        <div className="w-6px h-6px top-6.5px left-2px bg-[#EC4C7D]">
                          <div className="w-10px h-10px top-4.5px bg-[#EC4C7D1A]"></div>
                        </div>
                      </div>
                      <p className="w-[372px] h-[19px] font-inter font-semibold text-base text-[#000000]">
                        {task.title}
                      </p>
                    </div>
                    <div className="flex flex-row w-[165px] h-[36px] rounded-[100px] pt-8px pr-24px pb-8px pl-24px bg-[#EC4C7D1A]">
                      <button className="flex  items-center justify-center  gap-[6px] w-[100px] h-[40px] rounded-[6px] text-[#EC4C7D] font-inter font-medium text-base">
                        Pending
                        <FaChevronDown className="w-[13.75px] h-[7.5px] text-[#EC4C7D]" />
                      </button>
                    </div>
                    <div className="w-24px h-24px">
                      <button
                        onClick={() => handleDelete(task.id)}
                        className=" w-[18px] h-[19.5px] top-[1.5px] left-[3px] text-[#EC4C7D]"
                      >
                        <FaTrash className="cursor-pointer" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">No pending tasks found.</p>
              </div>
            )}
            <div className="flex flex-row w-[868px] h-[25px] top-[524px] left-[286px] justify-between">
              <p className="w-[204px] h-[19px] font-inter  font-medium text-base text-[#242424]">
                Showing 1 to 3 of 6 entries
              </p>
              <div className="flex flex-row w-[214px] h-[19px] gap-[30px]">
                <button className="w-[69px] h-[19px] font-inter font-bold text-base text-center text-[#EC4C7D]">
                  Previous
                </button>
                <p className="w-[8px] h-[19px] font-inter font-medium text-base text-center text-[#242424]">
                  1
                </p>
                <p className="w-[10px] h-[19px] font-inter font-medium text-base text-center text-[#242424]">
                  2
                </p>
                <button className="w-[37px] h-[19px] font-inter font-bold text-base text-center text-[#EC4C7D]">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
