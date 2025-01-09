import { X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 px-4 py-3 text-center relative">
      <div className="flex items-center justify-center gap-2">
        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
          New
        </span>
        <span className="text-black">
          Sign Up to Become a Kaito Certified Yapper and Start Earning.
        </span>
        <Button
          variant="secondary"
          size="sm"
          className="ml-2 bg-black text-white hover:bg-black/90"
          asChild
        >
          <Link href="/get-started">
            Get Started
            <span className="ml-2">→</span>
          </Link>
        </Button>
      </div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:opacity-70">
        <X className="h-5 w-5" />
        <span className="sr-only">Close banner</span>
      </button>
    </div>
  )
}

