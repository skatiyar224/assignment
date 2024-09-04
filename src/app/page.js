"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import TabButton from "../../components/TabButton"; 
import { AboutMe, Experiences, Recommended } from "../../components/TabContent"; 

const ProfilePage = () => {
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("AboutMe");

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const updatedImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updatedImages.push(e.target.result);
        setImages([...updatedImages]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "AboutMe":
        return <AboutMe />;
      case "Experiences":
        return <Experiences />;
      case "Recommended":
        return <Recommended />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-gray-800">
        <div className="text-xl">Sample</div>
        <div className="flex space-x-4">
          <div className="space-y-1">
            <div className="h-1 w-6 bg-white"></div>
            <div className="h-1 w-6 bg-white"></div>
            <div className="h-1 w-6 bg-white"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[45%] left bg-gray-900 text-white"></div>
        <div className="w-[55%] right">
          <div className="min-h-screen bg-gray-900 text-white">
            {/* Main Content */}
            <div className="py-8 px-4">
              {/* Tabs Section */}
              <div className="w-full box bg-gray-800 p-4 relative rounded-lg shadow-md mb-4 flex items-center justify-center">
                <div className="questionmark w-[10%]">
                  <FaRegQuestionCircle className="w-[18px] h-[18px] absolute top-[15px] text-zinc-500" />
                  <BiGridVertical className="w-[38px] h-[38px] text-slate-600" />
                </div>
                <div className="w-[90%]">
                  <div className="personal flex items-center justify-center relative">
                    <div className="w-[100%] btn flex items-center justify-evenly space-x-4 mb-[20px] bg-zinc-900 rounded-lg">
                      <TabButton
                        isActive={activeTab === "AboutMe"}
                        onClick={() => setActiveTab("AboutMe")}
                      >
                        About Me
                      </TabButton>
                      <TabButton
                        isActive={activeTab === "Experiences"}
                        onClick={() => setActiveTab("Experiences")}
                      >
                        Experiences
                      </TabButton>
                      <TabButton
                        isActive={activeTab === "Recommended"}
                        onClick={() => setActiveTab("Recommended")}
                      >
                        Recommended
                      </TabButton>
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-40 overflow-auto">
                    {renderContent()}
                  </div>
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="hr flex items-center justify-center box">
                <hr className="w-[85%] text-zinc-700 pb-5" />
              </div>

              {/* Gallery Section */}
              <div className="w-[100%] box bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center relative">
                <div className="questionmark w-[10%]">
                  <FaRegQuestionCircle className="w-[18px] h-[18px] absolute top-[15px] text-zinc-500" />
                  <BiGridVertical className="w-[38px] h-[38px] text-slate-600" />
                </div>
                <div className="w-[90%]">
                  <div className="flex justify-between items-center mb-[50px]">
                    <button className="bg-black font-semibold px-4 py-2 rounded-lg focus:outline-none">
                      Gallery
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                      id="upload-input"
                    />
                    <label
                      htmlFor="upload-input"
                      className="Addimage translate-x-6 bg-gray-700 px-4 py-2 rounded-full focus:outline-none cursor-pointer"
                    >
                      + Add Image
                    </label>
                    <div className="icons flex items-center justify-center gap-10">
                      <FaArrowLeft className="lefticon bg-black p-3 rounded-full w-[45px] h-[45px] text-zinc-700" />
                      <FaArrowRight className="righticon bg-black p-3 rounded-full w-[45px] h-[45px] text-zinc-700" />
                    </div>
                  </div>
                  <div className="flex space-x-4 flex-wrap overflow-x-auto">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Uploaded Image ${index + 1}`}
                        className="w-32 h-32 bg-gray-600 rounded-lg object-cover mb-4"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="hr pt-5 flex items-center justify-center">
                <hr className="w-[85%] text-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
