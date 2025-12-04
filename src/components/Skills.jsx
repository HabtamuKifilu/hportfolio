import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  GitBranch, 
  Server,
  Terminal,
  Cpu
} from 'lucide-react'

const skillCategories = [
  {
    name: "Languages & Frameworks",
    icon: <Code2 size={32} />,
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "Python", level: 82 },
      { name: "Rust (Learning)", level: 45 }
    ]
  },
  {
    name: "Mobile & Frontend",
    icon: <Smartphone size={32} />,
    skills: [
      { name: "React Native", level: 87 },
      { name: "Flutter", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Three.js / WebGL", level: 78 }
    ]
  },
  {
    name: "Backend & DevOps",
    icon: <Server size={32} />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Microservices", level: 90 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 90 },
      { name: "Git", level: 95 }
    ]
  },
  {
    name: "Databases & Cloud",
    icon: <Cloud size={32} />,
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Oracle DB", level: 80 },
      { name: "AWS", level: 82 },
      { name: "Redis", level: 78 }
    ]
  }
]

export default function Skills() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-black text-center mb-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Technical Arsenal
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-20">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.2 }}
            className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl">
                {category.icon}
              </div>
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                {category.name}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: catIndex * 0.3 + i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
