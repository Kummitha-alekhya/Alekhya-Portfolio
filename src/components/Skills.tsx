
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "Responsive Design"],
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "hover:from-cyan-400/30 hover:to-blue-400/30"
    },
    {
      title: "Backend Development", 
      skills: ["Python", "Node.js", "Express.js"],
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "hover:from-emerald-400/30 hover:to-green-400/30"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "SQLite", "Git", "GitHub", "Postman"],
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "hover:from-purple-400/30 hover:to-pink-400/30"
    },
    {
      title: "Technologies & Frameworks",
      skills: [ "Machine Learning", "Full Stack Development"],
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "hover:from-orange-400/30 hover:to-red-400/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} ${category.hoverColor} p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
