import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Github, Linkedin } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import Aurora from '../components/ui/aurora';

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-20 transition-colors duration-300 relative overflow-hidden" style={{ backgroundColor: isDarkMode ? '#0A0F1B' : 'rgb(254 245 245)' }}>
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0" style={{ opacity: isDarkMode ? 1 : 0.3 }}>
        <Aurora
          colorStops={isDarkMode ? ["#EABEC3", "#FF94B4", "#D9A5AC"] : ["#FBCFE8", "#FECDD3", "#FED7E2"]}
          blend={isDarkMode ? 0.3 : 0.25}
          amplitude={isDarkMode ? 0.8 : 0.6}
          speed={0.3}
        />
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 mb-8 transition-colors" style={{ color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)' }}>
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>

        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: isDarkMode ? 'white' : 'rgb(31, 41, 55)' }}>Let's Connect!</h1>
          <p className="text-lg" style={{ color: isDarkMode ? '#D9A5AC' : 'rgb(75, 85, 99)' }}>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <div className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#EABEC3' : 'rgb(31, 41, 55)' }}>Email</h3>
            <a 
              href="mailto:info.laylale@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{
                backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgb(252, 231, 243)',
                color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)'
              }}
            >
              Send Email
            </a>
            <p className="text-xs mt-3" style={{ color: isDarkMode ? '#D9A5AC' : 'rgb(107, 114, 128)' }}>info.laylale@gmail.com</p>
          </div>

          {/* GitHub Card */}
          <div className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
            <div className="flex justify-center mb-4">
              <Github className="h-12 w-12 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#EABEC3' : 'rgb(31, 41, 55)' }}>GitHub</h3>
            <a 
              href="https://github.com/cupidtiy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{
                backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgb(252, 231, 243)',
                color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)'
              }}
            >
              View Profile
            </a>
            <p className="text-xs mt-3" style={{ color: isDarkMode ? '#D9A5AC' : 'rgb(107, 114, 128)' }}>github.com/cupidtiy</p>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: isDarkMode ? 'rgb(31, 41, 55)' : 'white' }}>
            <div className="flex justify-center mb-4">
              <Linkedin className="h-12 w-12 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#EABEC3' : 'rgb(31, 41, 55)' }}>LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/laylale/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-80"
              style={{
                backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgb(252, 231, 243)',
                color: isDarkMode ? '#EABEC3' : 'rgb(190, 24, 93)'
              }}
            >
              Connect
            </a>
            <p className="text-xs mt-3" style={{ color: isDarkMode ? '#D9A5AC' : 'rgb(107, 114, 128)' }}>linkedin.com/in/laylale</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;