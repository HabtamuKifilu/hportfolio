import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "CooPayroll",
    description: "Enterprise payroll system processing salaries for 15,000+ employees monthly with zero downtime",
    tech: ["Java", "Spring Boot", "Angular", "Oracle DB", "Microservices"],
    impact: "Reduces processing time from 3 days to less than 4 hours",
    github: "https://github.com/HabtamuKifilu/coop-payroll",
    live: "#"
  },
  {
    title: "CoopGrow",
    description: "Digital banking platform enabling rural cooperatives to offer loans and savings.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    impact: "Expected to onboard 300,000+ new members in 18 months",
    github: "https://github.com/HabtamuKifilu/coopgrow",
    live: "#"
  },
  {
    title: "Mobile Customer Onboarding",
    description: "Flutter app allowing instant account opening in under 3 minutes",
    tech: ["Flutter", "Firebase", "Face Recognition", "REST APIs"],
    impact: "Simplifies accounts opening digitally",
    github: "https://github.com/HabtamuKifilu/mobile-onboarding",
    live: "#"
  },
  {
    title: "CoopSave App",
    description: "Award-winning gamified savings app promoting financial literacy in rural communities",
    tech: ["React Native", "Node.js", "MongoDB", "Gamification Engine"],
    impact: "3rd Place – Origin2Future CBO Hackathon 2025",
    github: "https://github.com/HabtamuKifilu/coopsave",
    live: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Executive dashboard with live financial insights, predictive analytics & reporting",
    tech: ["Next.js", "Recharts", "WebSocket", "Redis"],
    impact: "Expected to be used daily by 200+ branch managers",
    github: "https://github.com/HabtamuKifilu/analytics-dashboard",
    live: "#"
  },
  {
    title: "Afaan Oromoo NLP",
    description: "Open-source NLP toolkit for Afaan Oromoo — speech-to-text, translation & sentiment analysis",
    tech: ["Python", "Hugging Face", "Transformers", "FastAPI"],
    impact: "Active open-source contributor when fully accomplished.",
    github: "https://github.com/HabtamuKifilu/afaan-oromo-nlp",
    live: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-40 px-6 bg-slate-900/20">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black text-center mb-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            whileHover={{ y: -20, scale: 1.05 }}
            className="group relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-purple-900/40 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 hover:border-cyan-500/80 transition-all duration-500 shadow-2xl overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-cyan-900/40 backdrop-blur rounded-full text-cyan-300 text-sm font-medium border border-cyan-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
                {project.impact}
              </p>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
                >
                  <Github size={24} /> Code
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition ml-8"
                  >
                    <ExternalLink size={24} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
