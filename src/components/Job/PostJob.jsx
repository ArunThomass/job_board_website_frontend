import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              companyName,
              experienceLevel,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              companyName,
              experienceLevel,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <>
      <div className="container mx-auto min-h-screen py-20">
        <section className="flex flex-col lg:flex-row w-6/12 lg:w-6/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full py-16 px-12 ">
          <h3 className=" text-center mb-6 text-blue-950 text-lg font-bold">POST NEW JOB</h3>
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
                className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
              />
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="companyName"
                className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                 className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4 "
              >
                <option value="">Select Category</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Marketing">
                Marketing
                </option>
                <option value="Design">
                Design
                </option>
                <option value="Software Engineer">
                Software Engineer
                </option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Video Animation">Video Animation</option>
                <option value="Automotive Jobs">
                Automotive Jobs
                </option>
                <option value="Coustomer Service">
                Coustomer Service
                </option>
                <option value="Health and Care">Health and Care</option>
              </select>
            </div>
            <div className="wrapper"> 
              <input
                type="text"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                placeholder="experienceLevel"
                className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4 "
              />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
            />
            <div className="salary_wrapper">
              <select
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
                className="border border-gray-400 py-1 px-2 mr-7 mb-4"
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
              <div>
                {salaryType === "default" ? (
                  <p>Please provide Salary Type *</p>
                ) : salaryType === "Fixed Salary" ? (
                  <input
                    type="number"
                    placeholder="Enter Fixed Salary"
                    value={fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                    className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
                  />
                ) : (
                  <div className="ranged_salary">
                    <input
                      type="number"
                      placeholder="Salary From"
                      value={salaryFrom}
                      onChange={(e) => setSalaryFrom(e.target.value)}
                      className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
                    />
                    <input
                      type="number"
                      placeholder="Salary To"
                      value={salaryTo}
                      onChange={(e) => setSalaryTo(e.target.value)}
                      className="border border-gray-400 py-1 px-2 mr-7 w-full mb-4"
                    />
                  </div>
                )}
              </div>
            </div>
            <textarea
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
              className="border border-gray-400 py-1 px-2 mr-7 w-full"
            />
            <button className=" bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full " type="submit">Create Job</button>
          </form>
        </div>
        </section>
      </div>
    </>
  );
};

export default PostJob;
