
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      
  title: "Serene Streak - AI-Powered Meditation App",
  description: "A calming AI-powered meditation and mindfulness app that offers guided audio sessions, emotion-aware journaling, breathwork exercises, sleep support, and habit streaks. Designed with a modern interface and intelligent features to support mental wellness.",
  image: "/images/mediation.jpg",
  technologies: ["React.js", "Node.js", "Express.js", "SQLite"],
  liveUrl: "https://serene-streak-mind-three.vercel.app/",
  githubUrl: "https://github.com/Kummitha-alekhya/Serene-streak-mind.git",
  category: "Full Stack"

    },
    {
  title: "ExamHub - Exam Preparation Platform",
  description: "A smart and centralized platform to help students prepare for  exams with personalized study plans, mock tests, progress tracking, and AI-powered content recommendations. Built with modern full-stack technologies for a seamless learning experience.",
  image: "/images/exam preparation.jpg",
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  liveUrl: "https://exam-preparation-hub.vercel.app/",
  githubUrl: "https://github.com/Kummitha-alekhya/Exam-Preparation-Hub.git",
  category: "Full Stack"
},
    {
  title: "Shift Track Pro - Employee Management System",
  description: "A full-stack application designed to help organizations manage employee work hours and leave requests efficiently. Features include daily time tracking, leave applications, admin approvals, and insightful dashboards. Built with modern web technologies to streamline workforce management.",
  image: "/images/employee.jpg",
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
  liveUrl: "https://shift-track-pro.netlify.app/",
  githubUrl: "https://github.com/Kummitha-alekhya/Shift-track-pro.git",
  category: "Full Stack"
},

  {
  title: "Weather Dashboard",
  description: "A responsive and dynamic weather dashboard that provides real-time weather updates, forecasts, and location-based insights. Built with modern web technologies and external APIs to deliver accurate weather data and a clean user interface.",
  image: "/images/weather.avif",
  technologies: ["React.js", "Node.js", "OpenWeather API", "Express.js", "Chart.js"],
  liveUrl: "https://weather-dashboard-ezza.vercel.app/",
  githubUrl: "https://github.com/Kummitha-alekhya/Weather-dashboard.git",
  category: "Full Stack"
},
{
  title: "Enhanced Cloud Security:A machine Learning Approach for Privilege Escalation Detection and prevention",
  description: "A machine learning-powered security system designed to detect and prevent privilege escalation attacks in cloud environments. This full-stack solution utilizes behavioral analysis and anomaly detection techniques to secure cloud infrastructure against insider threats and advanced persistent attacks.",
  image: "/images/privilege-escalation.png",
  technologies: ["Python", "Machine Learning", "Flask", "SQLite", "Scikit-learn"],
  category: "Full Stack"
},
{
  title: "Grapevine: Early Plant Disease Detection",
  description: "An AI-powered system for early detection of grapevine diseases using image classification techniques. Leveraging Convolutional Neural Networks (CNN), the app identifies visual symptoms such as leaf discoloration and stripe patterning, enabling timely intervention and improved vineyard health.",
  image: "/images/grapevine.jpeg",
  technologies: ["Python", "TensorFlow", "CNN", "Flask", "OpenCV"],
  category: "Full Stack"
}



  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30 hover:from-blue-400/30 hover:to-cyan-400/30";
      case "Backend":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30 hover:from-green-400/30 hover:to-emerald-400/30";
      case "AI/ML":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 hover:from-purple-400/30 hover:to-pink-400/30";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-400/30 hover:from-gray-400/30 hover:to-slate-400/30";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded text-xs border border-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <ArrowUp size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
