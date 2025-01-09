import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Yaps</span>
            <span className="text-sm text-gray-400">by KAITO</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Button variant="ghost" className="text-gray-300">
              Yapper Leaderboard
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="text-gray-300">
              Pre-TGE Arena
            </Button>
            <Button variant="ghost" className="text-gray-300">
              VC Arena
            </Button>
            <Button variant="ghost" className="text-gray-300">
              Kaito Official Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-300">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">FAQ</span>
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-500">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  )
}

