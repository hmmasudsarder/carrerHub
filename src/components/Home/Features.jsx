import { useEffect, useState } from "react";
import JobCard from "./JobCard";
const Features = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs {jobs.length}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit non quo ea iusto harum soluta nam repellendus omnis
          neque voluptate!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
            jobs.map(job => <JobCard key={job.id} job={job}/>)
        }
      </div>
    </div>
  );
};

export default Features;
