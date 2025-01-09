import { TopBanner } from '@/components/top-banner'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { TreemapGrid } from '@/components/treemap-grid'
import { LeaderboardTable } from '@/components/leaderboard-table'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020B1C] via-[#052542] to-[#020B1C]">
      <TopBanner />
      <Navigation />
      <main className="pb-16">
        <Hero />
        <div className="mx-auto max-w-7xl px-4">
          <TreemapGrid />
          <div className="mt-8">
            <LeaderboardTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

