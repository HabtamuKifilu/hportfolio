'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

function TiltCard({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [12, -12])
  const rotateY = useTransform(mouseX, [-300, 300], [-12, 12])

  const smoothX = useSpring(rotateX, { stiffness: 400, damping: 40 })
  const smoothY = useSpring(rotateY, { stiffness: 400, damping: 40 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-48 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Breathing background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #06b6d440 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #a855f740 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, #8b5cf640 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #06b6d440 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none opacity-50"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Smaller but powerful title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-6xl sm:text-7xl md:text-8xl font-black mb-10 leading-tight"
        >
          {"Let's build together".split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotateX: -80 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.04, duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-24 leading-relaxed"
        >
          Currently open to new opportunities in Fintech, Full-Stack, or Leadership roles.
        </motion.p>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-16 md:gap-24">
          <TiltCard>
            <a
              href="mailto:habtamukiflu@gmail.com"
              className="block p-14 bg-slate-800/70 backdrop-blur-2xl rounded-3xl border border-slate-700 hover:border-cyan-500/80 transition-all duration-700 shadow-2xl group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                <Mail size={52} className="text-cyan-400 group-hover:text-white transition duration-500" />
                <p className="mt-8 text-2xl font-semibold text-gray-200">Email</p>
              </div>
            </a>
          </TiltCard>

          <TiltCard>
            <a
              href="https://github.com/HabtamuKifilu"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-14 bg-slate-800/70 backdrop-blur-2xl rounded-3xl border border-slate-700 hover:border-cyan-500/80 transition-all duration-700 shadow-2xl group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-80 transition duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                <Github size={52} className="text-gray-300 group-hover:text-white transition duration-500" />
                <p className="mt-8 text-2xl font-semibold text-gray-200">GitHub</p>
              </div>
            </a>
          </TiltCard>

          <TiltCard>
            <a
              href="https://linkedin.com/in/habtamukiflu"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-14 bg-slate-800/70 backdrop-blur-2xl rounded-3xl border border-slate-700 hover:border-cyan-500/80 transition-all duration-700 shadow-2xl group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-cyan-400/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                <Linkedin size={52} className="text-blue-400 group-hover:text-white transition duration-500" />
                <p className="mt-8 text-2xl font-semibold text-gray-200">LinkedIn</p>
              </div>
            </a>
          </TiltCard>
        </div>

        {/* Phone Numbers + Location – subtle but clickable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-400 text-sm md:text-base tracking-wider"
        >
          <a
            href="tel:+251914524984"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <span className="w-4 h-4 rounded-full bg-cyan-400/20 border border-cyan-400/40" />
            +251 914 524 984 (Ethiopia)
          </a>

          <a
            href="tel:+251949511750"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <span className="w-4 h-4 rounded-full bg-purple-400/20 border border-purple-400/40" />
            +251 949 511 750 (Ethiopia)
          </a>

          <a
            href="tel:+251940636166"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <span className="w-4 h-4 rounded-full bg-blue-400/20 border border-blue-400/40" />
            +251 940 636 166 (Ethiopia)
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-lg md:text-xl text-gray-500 tracking-wider"
        >
          Addis Ababa, Ethiopia •{' '}
          <span className="text-cyan-400 font-medium">Always open to interesting conversations</span>
        </motion.p>
      </div>
    </section>
  )
}