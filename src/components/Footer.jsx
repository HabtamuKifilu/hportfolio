// components/Footer.tsx
'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-sm">

          {/* Column 1 – Name & Role */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-white">Habtamu Kifilu</h3>
            <p className="text-slate-500 leading-relaxed">
              Senior Full-Stack Engineer<br />
              Fintech • Distributed Systems
            </p>
          </div>

          {/* Column 2 – Phone (Ethiopia) */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</p>
            <div className="space-y-2 text-slate-400">
              <a href="tel:+251914524984" className="block hover:text-white transition-colors">
                +251 914 524 984
              </a>
              <a href="tel:+251949511750" className="block hover:text-white transition-colors">
                +251 949 511 750
              </a>
              <a href="tel:+251940636166" className="block hover:text-white transition-colors">
                +251 940 636 166
              </a>
            </div>
          </div>

          {/* Column 3 – Digital Contact */}
          <div className="space-y-1">
            <div>
              <a
                href="mailto:habtamukiflu@gmail.com"
                className="mt-1 text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                habtamukiflu@gmail.com
              </a>
            </div>
            <div>
              <a
                href="https://github.com/HabtamuKifilu"
                className="mt-1 text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                Github
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/habtamukiflu"
                className="mt-1 text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Linkedin
              </a>
            </div>
            
          </div>

          {/* Column 4 – Location & Copyright */}
          <div className="space-y-3 text-right md:text-left">
            <p className="text-slate-500">
              Addis Ababa, Ethiopia
            </p>
            <p className="text-xs text-slate-600 mt-6">
              © {new Date().getFullYear()} Habtamu Kifilu
            </p>
          </div>
        </div>

        {/* Ultra-minimal back to top */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <a
            href="#"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}