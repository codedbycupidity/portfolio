import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project Two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      technologies: ["Vue.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Project Four",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["Python", "Django", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-pink-100/50 via-pink-50/30 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Here are some of the projects I've worked on recently
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-pink-100">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-pink-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-pink-50 text-pink-700 border-pink-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="project-btn flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </button>
                  <button className="project-btn-outline flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;