import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function LeaderboardSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Yapper Mindshare</h2>
        <Button variant="outline" className="border-cyan-500 text-cyan-500">
          See Top 100 ↓
        </Button>
      </div>
      <Card className="bg-gray-900/50 p-6">
        <div className="mb-6 flex gap-4">
          {['7D', '30D', '3M', '6M', '12M'].map((period) => (
            <Button
              key={period}
              variant="ghost"
              className={`${
                period === '30D'
                  ? 'bg-cyan-500 text-black hover:bg-cyan-600'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {period}
            </Button>
          ))}
        </div>
        <div className="h-96 rounded-lg border border-gray-800 bg-gray-900/50">
          {/* Placeholder for leaderboard content */}
          <div className="flex h-full items-center justify-center text-gray-500">
            Leaderboard Content
          </div>
        </div>
      </Card>
    </div>
  )
}

