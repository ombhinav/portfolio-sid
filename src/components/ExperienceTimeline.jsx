import React from "react";
import northway from "../assets/northway.png";
import euler from "../assets/euler.jpeg";
import ongc from "../assets/ongc.png";

const experiences = [
  {
    id: "1",
    company: "Euler Motors",
    role: "Senior Engineer- Battery Technology",
    period: "June 2024 – Present",
    location: "Delhi, India",
    description:
      "Led design & development of 3W/4W EV battery systems, improving performance, safety, and durability while cutting costs by 8% through material optimization and advanced welding. Experienced in laser welding, FMEA, and supplier audits, ensuring high-quality, production-ready battery packs.",
    logo: euler,
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
    current: true,
  },
  {
    id: "2",
    company: "Euler Motors",
    role: "Battery R&D Engineer ",
    period: "Dec 2022 – June 2024",
    location: "Delhi, India",
    description:
      "Achieved up to 30% weight reduction and 4°C better cooling in EV battery modules through topology optimization, advanced materials, and innovative thermal strategies. Designed modular, AIS-compliant packs with improved safety, durability, and cost efficiency.",
    logo: euler,
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    company: "Northway Motorsport",
    role: "Research and Development Intern",
    period: "May 2022 – July 2022",
    location: "Pune, India",
    description:
      "Contributed to the design & development of a 4W retrofit EV powertrain, including India’s fastest-charging commercial retrofit vehicle (2022). Designed battery packs, busbars, enclosures, and motor mounts, optimizing cell arrangement, packaging, and fabrication processes.",
    logo: northway,
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    company: "Oil and Natural Gas Corporation",
    role: "Industrial Internship",
    period: "Dec 2021 – Jan 2022",
    location: "Dehradun, India",
    description:
      "Researched drilling rigs and technologies for diagnosing and repairing aging oil mines. Gained hands-on exposure to mechanical processes at India’s largest government-owned oil & gas exploration corporation.",
    logo: ongc,
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through innovative technology companies, building products
            that impact millions of users worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Experience card */}
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Left side content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <div
                    className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      index % 2 === 0 ? "ml-8" : "mr-8"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.company}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {experience.role}
                        </p>
                      </div>
                      {experience.current && (
                        <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-600 font-medium mb-1">
                        {experience.period}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {experience.location}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Right side image */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className={`${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <img
                        src={experience.image}
                        alt={`${experience.company} project`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 mb-6">
              Interested in collaborating on innovative projects? I'd love to
              hear from you.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
