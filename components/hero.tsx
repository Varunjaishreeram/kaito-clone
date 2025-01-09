

export function Hero() {
  return (
    <div className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-bold text-white">CT Leaderboard</h1>
          <div className="relative h-32 w-64">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-cyan-400/10 backdrop-blur-xl">
              <div className="flex h-full items-center gap-4 px-6">
                <div className="rounded-full bg-cyan-400/90 p-3">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">Certified</div>
                  <div className="text-2xl font-bold text-cyan-400">Yapper</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

