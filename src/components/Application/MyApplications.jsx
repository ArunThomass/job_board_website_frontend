import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ResumeModel from "./ResumeModel";
import { Context } from "../../main";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios
          .get("/api/v1/application/employer/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get("/api/v1/application/jobseeker/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    return <Navigate to={"/login"} />;
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      {user && user.role === "Job Seeker" ? (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-10 py-8">
          <h1 className=" text-2xl text-center pb-5">My Applications</h1>
          {applications.length <= 0 ? (
              <h4>No Applications Found</h4>
          ) : (
            applications.map((element) => {
              return (
                <JobSeekerCard
                  element={element}
                  key={element._id}
                  deleteApplication={deleteApplication}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>
      ) : (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-8">
          <h1>Applications From Job Seekers</h1>
          {applications.length <= 0 ? (
            
              <h4>No Applications Found</h4>
            
          ) : (
            applications.map((element) => {
              return (
                <EmployerCard
                  element={element}
                  key={element._id}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>
      )}
      {modalOpen && (
        <ResumeModel imageUrl={resumeImageUrl} onClose={closeModal} />
      )}
    </section>
  );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
  return (
    <>
      <div className="overflow-hidden mt-5 bg-slate-100 p-4 border-2 border-gray-500 rounded-lg border-opacity-10">
        <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-5">
          <div className="flex justify-center items-center">
            <img
              className="max-w-[200px] h-auto cursor-pointer"
              src={element.resume.url}
              alt="resume"
              onClick={() => openModal(element.resume.url)}
            />
          </div>
          <div className="detail">
            <p className="mb-1">
              <span className="font-bold">Name:</span> {element.name}
            </p>
            <p className="mb-1">
              <span className="font-bold">Email:</span> {element.email}
            </p>
            <p className="mb-1">
              <span className="font-bold">Phone:</span> {element.phone}
            </p>
            <p className="mb-1">
              <span className="font-bold">Address:</span> {element.address}
            </p>
            <p className="mb-5">
              <span className="font-bold">Cover Letter:</span>{" "}
              {element.coverLetter}
            </p>
            <div className="btn_area">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteApplication(element._id)}
              >
                Delete Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EmployerCard = ({ element, openModal }) => {
  return (
    <>
      <div className="overflow-hidden mt-5 bg-slate-100 p-4 border-2 border-gray-500 rounded-lg border-opacity-10">
        <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-5">
          <div className="flex justify-center items-center">
            <img
              className="max-w-[200px] h-auto cursor-pointer"
              src={element.resume.url}
              alt="resume"
              onClick={() => openModal(element.resume.url)}
            />
          </div>
          <div className="detail">
            <p className="mb-1">
              <span className="font-bold">Name:</span> {element.name}
            </p>
            <p className="mb-1">
              <span className="font-bold">Email:</span> {element.email}
            </p>
            <p className="mb-1">
              <span className="font-bold">Phone:</span> {element.phone}
            </p>
            <p className="mb-1">
              <span className="font-bold">Address:</span> {element.address}
            </p>
            <p className="mb-5">
              <span className="font-bold">Cover Letter:</span>{" "}
              {element.coverLetter}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
