import React from "react";
import AboutImage from "../assests/images/about5.jpg";
import OrganizeImage from "../assests/images/organize.jpg"
import CollaborateImage from "../assests/images/collaboration.jpg";
import TrackImage from "../assests/images/productivity-tracking.jpg";
import RemindersImage from "../assests/images/reminders.jpg";
import AboutMission from "../assests/images/about-mission.jpg";

const AboutSection = () => {
  return (
    <div className="w-full">

      {/* Main About Section with Two-Column Layout */}
      <section className="w-full py-16 px-6 bg-gradient-to-r from-purple-200 to-blue-200">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-700">FocusMate</span>
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              FocusMate is your ultimate productivity partner designed to help you stay on track and achieve your goals. Whether you're working on a personal project or collaborating with a team, our app provides the right tools to keep you organized, focused, and motivated.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center w-full h-full">
            <img
              src={AboutImage}
              alt="FocusMate Illustration"
              className="w-full h-full object-cover rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 underline">
            Features You'll Love
          </h2>
          <p className="text-lg text-gray-600">
            Designed to make productivity easier, here's what FocusMate offers:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {[
            {
              title: "Organize Your Tasks Easily",
              text: "Easily create and prioritize tasks with FocusMate's task manager to stay focused on what matters the most.",
              img: OrganizeImage,
            },
            {
              title: "Collaborate with Teams",
              text: "Seamlessly collaborate with team members by assigning tasks, sharing progress, and communicating within the app.",
              img: CollaborateImage,
            },
            {
              title: "Track Your Productivity",
              text: "Stay motivated by tracking task completion and productivity with detailed reports and analytics.",
              img: TrackImage,
            },
            {
              title: "Set Smart Reminders",
              text: "Never miss a task with personalized reminders that help you stay on top of your schedule.",
              img: RemindersImage,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section with Alternating Layout */}
      <section className="w-full py-16 px-6 bg-gray-300">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={AboutMission}
              alt="Mission Illustration"
              className="rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At FocusMate, we believe in the power of focus. Our mission is to empower individuals and teams to achieve their goals by providing a simple, effective, and reliable tool. Our platform promotes productivity, organization, and collaboration, helping you reach your full potential in both personal and professional endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 px-6 bg-purple-600">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose FocusMate?
          </h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            FocusMate is built with the user in mind. Whether you're a student, freelancer, or part of a large team, our app is designed to keep you organized, on track, and motivated. With intuitive task management tools, integrated team collaboration features, and insightful productivity tracking, FocusMate is the perfect companion to help you reach your goals.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-300 hover:text-black">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutSection;
