import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiBook, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Context } from '../../main';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      axios
        .get("/api/v1/job/getall", {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!isAuthorized) {
    navigateTo("/login");
  }
  return (
    
    <div className='  pt-10 pb-12 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]
        items-center '>
      {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
              
    <section className=' overflow-hidden bg-slate-100 p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10' key={element._id}>
      <div className=' px-6 py-4'>
        <h4 className=' text-primary mb-1'>{element.companyName}</h4>
        <h3 className=' text-lg font-semibold mb-2'>{element.title}</h3>

        <div className=' text-primary/70 text-base flex flex-wrap gap-2 mp-2'>
          <span className=' flex items-center gap-2'>< FiMapPin />{element.location}</span>
          <span className=' flex items-center gap-2'>< FiClock />{element.experienceLevel}</span>
          <span className=' flex items-center gap-2'>< FiDollarSign />{element.salaryFrom}-{element.salaryTo}</span>
          <span className=' flex items-center gap-2'>< FiBook />{element.category}</span>
        </div>

        <p className='text-base text-primary/70 truncate'>{element.description}</p>
      </div>
      <div className=' px-6 pt-4 pb-2'>
      <Link className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' to={`/job/${element._id}`}>Job Details</Link>
      </div>
    </section>
    
    );
  })}
    </div>
  )
}

export default Jobs