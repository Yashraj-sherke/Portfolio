import React , { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Mail, Github, Linkedin, ExternalLink, User, MessageSquare, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-xl font-bold ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
              Yashraj Sherke
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-teal-400 ${
                    activeSection === item 
                      ? 'text-teal-400 font-medium' 
                      : isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'bg-slate-800 text-slate-100 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-b`}>
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-lg capitalize transition-colors duration-200 hover:bg-teal-400/10 hover:text-teal-400 ${
                    activeSection === item 
                      ? 'text-teal-400 bg-teal-400/10 font-medium' 
                      : isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
                <User size={48} className={isDarkMode ? 'text-teal-400' : 'text-blue-600'} />
              </div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                Hi, I'm <span className={isDarkMode ? 'text-teal-400' : 'text-blue-600'}>Yashraj</span>
              </h1>
              <p className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                A Frontend Web Developer passionate about building beautiful, functional websites that create amazing user experiences.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className={`inline-flex items-center px-8 py-3 rounded-lg transition-all duration-200 font-medium hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-teal-600 text-slate-100 hover:bg-teal-500 shadow-lg shadow-teal-600/25' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Contact Me
                <MessageSquare size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
              About Me
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              Learn more about my journey, skills, and passion for web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/145894334?v=4"
                  alt="Yashraj Sherke - Profile"
                  className={`w-64 h-64 object-cover rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? 'ring-4 ring-slate-700 shadow-slate-900/50' : 'ring-4 ring-white shadow-gray-300/50'
                  }`}
                />
                {/* Optional: Add a decorative ring */}
                <div className={`absolute inset-0 rounded-full border-2 ${
                  isDarkMode ? 'border-teal-400/20' : 'border-blue-600/20'
                } animate-pulse`}></div>
              </div>
            </div>
            <div>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                I'm a passionate frontend developer currently learning modern web technologies. I enjoy creating clean, responsive websites and am constantly exploring new frameworks and tools to improve my skills.
              </p>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                My goal is to build user-friendly applications that solve real-world problems while providing exceptional user experiences.
              </p>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Git & GitHub'].map((skill) => (
                    <div key={skill} className={`p-3 rounded-lg text-center transition-all duration-200 hover:scale-105 ${
                      isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}>
                      <Code size={20} className={`mx-auto mb-2 ${isDarkMode ? 'text-teal-400' : 'text-blue-600'}`} />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
              My Projects
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              Here are some of the projects I've worked on to showcase my skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "BitBuds",
                description: "A Kids coading platform in easy way.",
                image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "#"
              },
              {
                title: "Weather Forcast",
                description: "A responsive weather app that provides current weather and forecasts using a weather API.",
                image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "https://yashraj-sherke.github.io/Whether-Forcast/"
              },
              {
                title: "Portfolio Website",
                description: "This very portfolio website showcasing my skills and projects with modern design.",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
                link: "https://yashraj-sherke.netlify.app/"
              }
            ].map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode ? 'bg-slate-800 border border-slate-700 shadow-slate-900/50' : 'bg-white'
              }`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                 <a  
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                     isDarkMode 
                      ? 'bg-teal-600 text-slate-100 hover:bg-teal-500 shadow-lg shadow-teal-600/25' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
              View Project
               <ExternalLink size={16} className="ml-2" />
               </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              I'd love to hear from you! Whether you have a project in mind or just want to connect.
            </p>
          </div>

          {/* Contact Information - Now Full Width and Flexed */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <a
              href="mailto:yashrajsherke49@example.com"
              className={`flex items-center p-6 rounded-lg transition-all duration-200 hover:scale-105 w-full md:w-auto ${
                isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-teal-400 border border-slate-600' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Mail size={24} className="mr-4" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm opacity-80">yashrajsherke49@example.com</div>
              </div>
            </a>
            
            <a
              href="https://github.com/Yashraj-sherke"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 rounded-lg transition-all duration-200 hover:scale-105 w-full md:w-auto ${
                isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-teal-400 border border-slate-600' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Github size={24} className="mr-4" />
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm opacity-80">View my code</div>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/yashraj-sherke-35b8ab25b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-6 rounded-lg transition-all duration-200 hover:scale-105 w-full md:w-auto ${
                isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-teal-400 border border-slate-600' : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Linkedin size={24} className="mr-4" />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm opacity-80">Let's connect</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            © 2025 Yashraj Sherke. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;