import React from 'react'
import { FiBook, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const JobCards = ({data}) => {
    const { companyName,title,salaryFrom,salaryTo,location,
        experienceLevel,category,description} = data
  return (
    <section className='card'>
      <Link to={"/job/getall"} className=" flex gap-4 flex-col sm:flex-row items-start" />
      <div>
        <h4 className=' text-primary mb-1'>{companyName}</h4>
        <h3 className=' text-lg font-semibold mb-2'>{title}</h3>

        <div className=' text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
          <span className=' flex items-center gap-2'>< FiMapPin />{location}</span>
          <span className=' flex items-center gap-2'>< FiClock />{experienceLevel}</span>
          <span className=' flex items-center gap-2'>< FiDollarSign />{salaryFrom}-{salaryTo}</span>
          <span className=' flex items-center gap-2'>< FiBook />{category}</span>
        </div>

        <p className='text-base text-primary/70'>{description}</p>
      </div>
    </section>
  )
}

export default JobCards