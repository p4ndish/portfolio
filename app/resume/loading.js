import { LoadingSpinner } from "@/components/ui/loading"

export default function ResumeLoading() {
  return (
    <div className="container mx-auto py-8 px-4 flex flex-col items-center justify-center min-h-[80vh]">
      <LoadingSpinner size="large" className="mb-4" />
      <p className="text-lg font-medium text-muted-foreground animate-pulse">
        Loading your resume...
      </p>
    </div>
  )
} 