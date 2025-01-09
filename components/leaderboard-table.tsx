'use client'

import { Crown } from 'lucide-react'
import { Progress, ProgressIndicator } from '@/components/ui/progress'
import { cn } from "@/lib/utils"

interface LeaderboardEntry {
  rank: number
  name: string
  handle: string
  mindshare: string
  casual: number
  hardcore: number
  shitposter: number
  curator: number
  copyPasta: number
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "aixbt",
    handle: "@aixbt_agent",
    mindshare: "3.00%",
    casual: 60,
    hardcore: 40,
    shitposter: 70,
    curator: 30,
    copyPasta: 80
  },
  // Add more entries as needed
]

export function LeaderboardTable() {
  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-900/50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Rank</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Mindshare</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">Casual</span>
                  <span>Vs</span>
                  <span className="text-blue-400">Hardcore</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">Shitposter</span>
                  <span>Vs</span>
                  <span className="text-purple-400">Curator</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">
                <span className="text-cyan-400">Copy Pasta</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    {entry.rank <= 3 && <Crown className="w-4 h-4 text-yellow-400" />}
                    <span className="text-white">{entry.rank}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700" />
                    <div>
                      <div className="text-sm font-medium text-white">{entry.name}</div>
                      <div className="text-sm text-gray-400">{entry.handle}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-white">{entry.mindshare}</td>
                <td className="px-4 py-3">
                  <Progress value={entry.casual} className="h-2 w-40">
                    <ProgressIndicator className={cn("h-full transition-all", {
                      "bg-gradient-to-r from-emerald-400 to-blue-400": true,
                    })} />
                  </Progress>
                </td>
                <td className="px-4 py-3">
                  <Progress value={entry.shitposter} className="h-2 w-40">
                    <ProgressIndicator className={cn("h-full transition-all", {
                      "bg-gradient-to-r from-orange-400 to-purple-400": true,
                    })} />
                  </Progress>
                </td>
                <td className="px-4 py-3">
                  <Progress value={entry.copyPasta} className="h-2 w-20">
                    <ProgressIndicator className={cn("h-full transition-all", {
                      "bg-cyan-400": true,
                    })} />
                  </Progress>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 bg-gray-900/50 text-sm text-gray-400">
        Data updates every hour
      </div>
    </div>
  )
}
