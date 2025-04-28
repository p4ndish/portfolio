"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { GithubIcon, Linkedin, Mail, Sun, Moon, FileText } from "lucide-react"
import { useTheme } from "next-themes"

export default function SocialLinksBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-center w-full my-4 sm:my-6 md:my-8 px-2 sm:px-4">
      <div className="dark:bg-gray-600 flex justify-center items-center bg-background rounded-full shadow-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          <Link
            href="https://github.com/p4ndish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-200 hover:scale-110"
          >
            <GithubIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground hover:text-primary transition-colors" />
          </Link>

          <Link
            href="https://linkedin.com/in/dagim-tesfaye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground hover:text-primary transition-colors" />
          </Link>

          <Link
            href="https://twitter.com/@pandaishonet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="transition-transform duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground hover:text-primary transition-colors fill-current"
              aria-label="X/Twitter"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Link
            href="https://medium.com/@etpandish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="transition-transform duration-200 hover:scale-110"
          >
            <div className="bg-black text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:bg-gray-800 transition-colors">
              Medium
            </div>
          </Link>

          <Link
            href="mailto:tesfayedagim5@gmail.com"
            aria-label="Email"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground hover:text-primary transition-colors" />
          </Link>
          
          <Link
            href="/resume"
            aria-label="Resume"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FileText className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground hover:text-primary transition-colors" />
          </Link>
        </div>

        <div className="h-5 sm:h-6 w-px bg-border mx-2 sm:mx-3 md:mx-4"></div>

        <button
          onClick={toggleTheme}
          className="p-0.5 sm:p-1 rounded-full hover:bg-muted transition-all duration-200 hover:scale-110"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          ) : (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}
