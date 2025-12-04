import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Download, ExternalLink, Sun, Moon } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <motion.h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Habtamu Kiflu
        </motion.h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-slate-800 rounded-full hover:scale-110 transition"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-300" />}
        </button>
      </div>
    </motion.header>
  )
}
