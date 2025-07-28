"use client";
import React from "react";
import { Job } from "../data/job_posting";
import Image from "next/image";
import Link from "next/link";
type props = {
  job: Job;
};

const JobCard = ({ job }: props) => {
  return (
    <Link href={`/about/${job.id}`}>
      <div className=" flex bg-white border border-gray-300  w-270 h-60 rounded-[30px] p-0 ml-45 mb-10  text-black ">
        <Image
          src="/Avatar.png"
          alt="logo"
          width={20}
          height={20}
          className="w-20 h-20 ml-10 mt-5"
        />
        <div className="mt-5">
          <h1 className="  text-black text-xl m-0 pt0 pl-15 font-bold ">
            {" "}
            {job.title}{" "}
          </h1>
          <p className="pl-15 pb-3 text-gray-500 ">
            {" "}
            {job.company}.Addis Ababa, Ethiopia
          </p>
          <p className="pl-15 text-sm w-230 text-[13px]"> {job.description} </p>
          <div className="display-inline cursor-pointer pl-15 pt-4">
            <button className="cursor-pointer border text-blue-500 border-blue-500 mr-3 rounded-[22px] w-23 h-8">
              In Person
            </button>
            <button className="cursor-pointer border gap-3 text-orange-500 border-orange rounded-[22px] mr-3 w-23 h-8">
              Education
            </button>
            <button className="cursor-pointer border text-purple-500 border-purple-800 rounded-[22px] w-23 h-8">
              IT
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
