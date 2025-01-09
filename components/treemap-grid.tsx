'use client'

import { Card } from '@/components/ui/card'
import { LineChart } from './line-chart'

interface User {
  name: string
  handle: string
  percentage: string
  bps: string
  change: string
  trend: number[]
}

const users: User[] = [
  {
    name: "toly us",
    handle: "@aeyakovenko",
    percentage: "0.68%",
    bps: "+51bps",
    change: "+3",
    trend: [40, 35, 45, 50, 40, 45, 40, 35, 45, 50]
  },
  {
    name: "Unipcs",
    handle: "@th...",
    percentage: "0.53%",
    bps: "+44bps",
    change: "+3",
    trend: [30, 40, 35, 45, 40, 35, 30, 35, 40, 45]
  },
  // Add more users as needed
]

export function TreemapGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user, index) => (
        <Card key={index} className="bg-gray-900/50 p-4 hover:bg-gray-900/70 transition-colors">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-700" />
                <span className="text-white font-medium">{user.name}</span>
              </div>
              <span className="text-sm text-gray-400">{user.handle}</span>
            </div>
            <div className="text-right">
              <div className="text-white font-medium">{user.percentage}</div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 text-sm">{user.bps}</span>
                <span className="text-emerald-400 text-sm">{user.change}</span>
              </div>
            </div>
          </div>
          <LineChart data={user.trend} color="#22c55e" />
        </Card>
      ))}
    </div>
  )
}

