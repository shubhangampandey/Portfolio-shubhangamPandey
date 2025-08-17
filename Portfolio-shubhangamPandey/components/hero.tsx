"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-secondary opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <img src="/web-developer-headshot.png" alt="Profile" className="w-28 h-28 rounded-full object-cover" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground font-sans">
              Hi, I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Shubhangam Pandey</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto">
              Aspiring Web Developer passionate about creating beautiful, functional, and user-friendly digital
              experiences
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-sans">10+</div>
              <div className="text-sm text-muted-foreground font-serif">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-sans">2+</div>
              <div className="text-sm text-muted-foreground font-serif">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-sans">5+</div>
              <div className="text-sm text-muted-foreground font-serif">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
