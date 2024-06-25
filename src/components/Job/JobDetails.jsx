import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../main';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }
  return (
    <div className='pt-10 pb-12 w-[80%] mx-auto  mt-[4rem] gap-[3rem]
    items-center '>
      <section className=' overflow-hidden bg-slate-100 p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-500 border-gray-500 rounded-lg border-opacity-10'>
      <div className=' px-6 py-4'>
      <p className='text-2xl font-bold'>{job.title}</p>
      <p>{job.companyName}
          </p>
          <p>
            {job.location}
          </p>
          <p>
            
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          <p>
            {job.experienceLevel}
          </p>
          <p>
            {job.description}
          </p >
          <p className="mt-8">
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' to={`/application/${job._id}`}>Apply Now</Link>
          )}
          </p>
      </div>
      </section>
      
      </div>
  )
}

export default JobDetails