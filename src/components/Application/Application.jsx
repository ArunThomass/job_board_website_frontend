import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Context } from "../../main";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  const { isAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();
  const handleFileChange = (event) => {
    const resume = event.target.files[0];
    setResume(resume);
  };

  const { id } = useParams();
  const handleApplication = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const { data } = await axios.post(
        "/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setCoverLetter("");
      setPhone("");
      setAddress("");
      setResume("");
      toast.success(data.message);
      navigateTo("/job/getall");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthorized || (user && user.role === "Employer")) {
    navigateTo("/");
  }

  return (
    <div className="container mx-auto min-h-screen py-20 ">
      <section className="flex flex-col lg:flex-row w-6/12 lg:w-4/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
        <div className="w-full py-16 px-12 ">
          <h3 className="text-3xl mb-4 gap-5">Application Form</h3>
          <form onSubmit={handleApplication}>
            <div className="mt-5">
              <input
                className="border border-gray-400 py-1 px-2 w-full"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                className="border border-gray-400 py-1 px-2 w-full"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                className="border border-gray-400 py-1 px-2 w-full"
                type="number"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                className="border border-gray-400 py-1 px-2 w-full"
                type="text"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <textarea
                className="border border-gray-400 py-1 px-2 w-full"
                placeholder="CoverLetter..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              />
            </div>
            <div>
              <label
                style={{
                  textAlign: "start",
                  display: "block",
                  fontSize: "20px",
                }}
              >
                Select Resume
              </label>
              <input
                type="file"
                accept=".pdf, .jpg, .png"
                onChange={handleFileChange}
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-8">
              <button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                type="submit"
              >
                Send Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Application;
