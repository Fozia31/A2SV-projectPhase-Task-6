import React from "react";
import JobCard from "../components/JobCard";
import { job_postings } from "../data/job_posting";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-[25px] mt-10 ml-10 align-center justify-center text-black">
        Opportunities
      </h1>
      <div className="flex text-black">
        <p className="ml-10 mb-6 text-gray-500"> showing 73 results</p>
        <p className="ml-230 mt-0">sorted by: Most relevant</p>
      </div>

      {job_postings.length === 0 ? (
        <p>no jop found</p>
      ) : (
        job_postings.map((job, idx) => <JobCard key={idx} job={job} />)
      )}
    </div>
  );
};

export default Home;
