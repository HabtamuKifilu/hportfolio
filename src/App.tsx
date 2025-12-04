import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Download, ExternalLink, Mail, Github, Linkedin } from 'lucide-react'

function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Sphere args={[1, 128, 128]} scale={2.8}>
        <MeshDistortMaterial color="#3b82f6" distort={0.4} speed={2} roughness={0} metalness={0.8} />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  )
}

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 -z-10 opacity-60"><Hero3D /></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6 max-w-5xl z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Habtamu Kifilu
          </h1>
          <p className="text-3xl md:text-5xl font-light text-gray-200 mb-8">Senior Software Engineer</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-12 py-6 rounded-full text-xl font-medium flex items-center gap-3 transition shadow-2xl">
              View Projects <ExternalLink size={28} />
            </a>
            <a href="/Habtamu_Kiflu_Resume.pdf" download className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-12 py-6 rounded-full text-xl font-medium flex items-center gap-3 transition backdrop-blur">
              <Download size={28} /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME + PHOTO ON RIGHT */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-5xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Full-stack engineer from Addis Ababa, Ethiopia with 4+ years building mission-critical fintech systems at <strong>Cooperative Bank of Oromia</strong>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I design and deliver secure, scalable solutions — from biometric mobile onboarding to payroll systems serving 150,000+ employees.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-40 scale-110"></div>
              <img
                src="/habtamux.jpg"
                alt="Habtamu Kiflu"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 bg-slate-900/50">
        <h2 className="text-5xl font-bold text-center mb-20">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {["CoopPayroll", "CoopGrow", "Mobile Onboarding", "CoopSave App", "Analytics Dashboard", "Afaan Oromoo NLP"].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -12 }} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">{p}</h3>
              <p className="text-cyan-400 font-semibold">Production @ Cooperative Bank of Oromia</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT — WITH YOUR REAL LINKS */}
      <section id="contact" className="py-40 text-center bg-gradient-to-b from-slate-900 to-black">
        <h2 className="text-6xl font-bold mb-10">Let's Connect</h2>
        <div className="space-y-8">
          
          <div className="flex justify-center gap-16 text-2xl pt-8">
            <a
              href="mailto:habtamukiflu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <Mail size={40} /> Gmail
            </a>
            <a
              href="https://github.com/HabtamuKifilu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <Github size={40} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/habtamukiflu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <Linkedin size={40} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 border-t border-slate-800">
        © {new Date().getFullYear()} Habtamu Kiflu • Addis Ababa, Ethiopia
      </footer>
    </>
  )
}
