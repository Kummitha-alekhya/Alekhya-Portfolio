
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:alekhya211001@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white/5 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 hover:text-purple-300 transition-colors duration-300">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 hover:text-white transition-colors duration-300">
                I'm always excited about new challenges, innovative ideas, and meaningful collaborations. Whether you're looking to work with a passionate developer, need help bringing a project to life, or simply want to connect—feel free to reach out. I'm just a message away and always happy to chat!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group flex items-center space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 p-3 rounded-full transition-all duration-300 group-hover:scale-110">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">Email</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">alekhya211001@gmail.com</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 group-hover:from-purple-500 group-hover:to-purple-600 p-3 rounded-full transition-all duration-300 group-hover:scale-110">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">GitHub</h4>
                  <a 
                    href="https://github.com/kummitha-alekhya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    github.com/kummitha-alekhya
                  </a>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-700 p-3 rounded-full transition-all duration-300 group-hover:scale-110">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/kummitha-alekhya-443228237/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2 hover:text-purple-300 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300 hover:border-white/40"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2 hover:text-purple-300 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300 hover:border-white/40"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2 hover:text-purple-300 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300 resize-none hover:border-white/40"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © 2024 Kummitha Alekhya. Built with React and passion for great code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
