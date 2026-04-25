export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        <p className="mt-4 text-slate-900 font-medium">Loading page...</p>
      </div>
    </div>
  )
}
