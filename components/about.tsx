import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function About() {
  const qualities = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, well-documented code following best practices and industry standards.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding creative solutions to technical problems.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "I collaborate effectively with others and communicate clearly about technical concepts.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and frameworks, staying current with industry trends.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-sans">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
            Passionate about web development and eager to contribute to innovative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground font-sans">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed font-serif">
                I discovered my passion for web development during my studies and have been dedicated to mastering the
                craft ever since. What started as curiosity about how websites work has evolved into a deep appreciation
                for creating digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed font-serif">
                I'm particularly drawn to the intersection of design and functionality, where beautiful interfaces meet
                robust backend systems. My goal is to join a dynamic team where I can contribute fresh perspectives
                while learning from experienced developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "Node.js", "TypeScript", "CSS", "Git"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <quality.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 font-sans">{quality.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-serif">{quality.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
