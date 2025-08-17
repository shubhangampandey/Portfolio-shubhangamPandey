import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
  
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/task-management-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "https://task-management-app-chi-lac.vercel.app/",
      githubUrl: "https://github.com/shubhangampandey/Task-Management-App.git",
      featured: true,
    },
    
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design principles.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "/",
      githubUrl: "https://github.com/shubhangampandey/Portfolio-shubhangamPandey.git",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            A selection of projects that demonstrate my skills and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground font-sans">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-serif">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/shubhangampandey?tab=repositories">
          <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
         
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
            </a>
        </div>
      </div>
    </section>
  )
}
