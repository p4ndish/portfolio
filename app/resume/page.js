"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading"

export default function ResumePage() {
  const [mounted, setMounted] = useState(false)
  const [pdfLoaded, setPdfLoaded] = useState(false)
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <Button asChild>
          <a 
            href="/Dagim-Tesfaye-Revised.pdf" 
            download
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </Button>
      </div>
      
      <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden relative">
        {!pdfLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <LoadingSpinner size="large" />
          </div>
        )}
        <iframe 
          src="/Dagim-Tesfaye-Revised.pdf" 
          className="w-full h-full"
          title="Resume PDF"
          onLoad={() => setPdfLoaded(true)}
        />
      </div>
    </div>
  )
} 