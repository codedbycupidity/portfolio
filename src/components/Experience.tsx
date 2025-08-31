import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company: "APPLeSEEd Lab",
      location: "Orlando, FL",
      period: "May 2025 - Present",
      description: [
        "Operated BioPac biometric systems (ECG, EEG headband, electrodermal sensors, respiratory monitoring) to capture physiological data during cognitive load experiments",
        "Facilitated research studies analyzing programmer performance and stress responses while participants solved C programming challenges",
        "Established data collection protocols and performed equipment calibration for human-computer interaction research",
      ]
    }
  ];

  return (
    <section id="experience" className="py-8" style={{ 
      background: isDarkMode 
        ? '#0A0F1B' 
        : 'linear-gradient(180deg, rgb(254 235 235) 0%, rgb(254 240 240) 50%, rgb(254 245 245) 100%)',
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-foreground dark:text-white">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-pink-600" style={{ color: isDarkMode ? '#EABEC3' : undefined }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: '#EABEC3' }}>•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;