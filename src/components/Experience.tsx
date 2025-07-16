import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Mentor",
      company: "NXTWave",
      period: "April 2025 - Present",
      location: "Hyderabad",
      responsibilities: [
        "Mentor and guide aspiring software engineers in both core and advanced development skills, fostering a strong technical foundation.",
        "Deliver structured training sessions and project-based learning focused on full-stack technologies.",
        "Teach frontend development (HTML, CSS, JavaScript) and backend development (Python, Node.js)",
        "Conduct live coding sessions, code reviews, and resolve technical doubts to ensure concept clarity.",
        "Guide learners through version control systems like Git and GitHub, and demonstrate effective API integration.",
        "Collaborate with internal teams to enhance curriculum quality and assessment standards.",
        "Actively help shape hundreds of learners into capable, confident, and job-ready developers."
      ],
      impact: "Strengthened core software knowledge and refined instructional techniques for effective knowledge transfer"
    }
  ];

  const certificationsAndAchievements = [
    {
      title: "Python Certificate by HackerRank",
      description: "Certified in Python programming fundamentals and advanced concepts",
      image: "/images/python_basic certificate_page-0001.jpg",
      type: "achievement"
    },
    {
      title: "Java Certificate by HackerRank",
      description: "Certified in Java programming fundamentals and advanced concepts",
      image: "/images/java_basic certificate_page-0001.jpg",
      type: "certificate"
    },
    {
      title: "SQL Certificate by HackerRank", 
      description: "Certified in SQL programming fundamentals and advanced concepts",
      image: "/images/sql_basic certificate_page-0001 - Copy.jpg",
      type: "certificate"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/90 via-purple-900/40 to-indigo-900/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-500/20 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-blue-300 text-lg group-hover:text-pink-300 transition-colors duration-300">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {exp.period}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {exp.location}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                        <span className="text-blue-400 group-hover:text-purple-400 mr-2 mt-1 transition-colors duration-300">•</span>
                        <span className="hover:text-purple-300 transition-colors duration-200">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-500/30 hover:to-emerald-500/30 p-4 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <h4 className="text-green-300 font-semibold mb-2 hover:text-green-200 transition-colors duration-300">
                    Impact:
                  </h4>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300">{exp.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 transition-all duration-500">
            Achievements & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsAndAchievements.map((item, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  item.type === 'achievement' 
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-400/30 hover:to-orange-400/30' 
                    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-400/30 hover:to-purple-400/30'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-lg md:text-xl font-bold text-white mb-2 transition-colors duration-300 ${
                      item.type === 'achievement' 
                        ? 'group-hover:text-amber-300' 
                        : 'group-hover:text-purple-300'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
