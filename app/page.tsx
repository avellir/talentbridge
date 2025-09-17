import { Button } from "@/components/ui/button"
import { ChevronDown, Star, ThumbsUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-[#f7f1ec]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-8 max-w-8xl mx-28">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-stone-800 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-base">T</span>
          </div>
          <span className="text-2xl font-bold text-stone-900 tracking-wide">TALENTBRIDGE</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-lg">
          <div className="flex items-center gap-1 text-stone-700 hover:text-stone-900 cursor-pointer">
            <span>For Employers</span>
            <ChevronDown className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-stone-700 hover:text-stone-900 cursor-pointer">
            <span>For Candidates</span>
            <ChevronDown className="w-5 h-5" />
          </div>
          <span className="text-stone-700 hover:text-stone-900 cursor-pointer">About us</span>
          <span className="text-stone-700 hover:text-stone-900 cursor-pointer">How It Works</span>
          <span className="text-stone-700 hover:text-stone-900 cursor-pointer">Contact us</span>
        </nav>

        <Button variant="outline" className="rounded-full px-8 py-4 bg-[#f7f1ec] text-md border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
          Log In
        </Button>
      </header>

      {/* Hero Section */}
      <main className="max-w-[95rem] mx-auto py-12 relative">
        <div className="grid lg:grid-cols-[55%_45%]  items-center">
          <div className="space-y-10">
            <h1 className="text-7xl font-semibold text-stone-900 leading-tight">
              Fastest way to match people with purpose
            </h1>

            <p className="text-2xl text-stone-600 leading-relaxed max-w-2xl">
              Connect companies with standout candidates through curated, pre-verified introductions - not messy job
              boards.
            </p>

            <div className="flex gap-2">
              <Button className="w-56 bg-stone-900 hover:bg-stone-800 text-white px-16 py-8 rounded-full text-xl">
                Hire Talent
              </Button>
              <Button
                variant="outline"
                className="w-56 px-16 py-8 rounded-full text-xl border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white bg-transparent"
              >
                Find Your Role
              </Button>
            </div>
          </div>

          {/* Floating Profile Cards */}
          <div className="relative hidden lg:block h-[520px]">
            <div className="absolute inset-0">
              <div className="absolute -top-8 left-8 h-64 w-64 rounded-full bg-[#f3e6dc] blur-3xl opacity-80"></div>
              <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-[#e5e0f8] blur-3xl opacity-70"></div>
              <svg className="absolute inset-0" viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 80C120 110 200 70 260 100C320 130 330 220 410 240C490 260 540 210 560 170"
                  stroke="#d0c7dc"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                />
                <path
                  d="M80 330C150 310 210 340 250 320C290 300 310 250 360 240C410 230 480 250 520 240"
                  stroke="#d0c7dc"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                />
              </svg>
            </div>

            {/* Andrew Crew Card */}
            <div className="absolute top-0 left-4 w-[380px] rounded-[36px] border border-[#e5def7] bg-white shadow-[0_24px_60px_rgba(116,101,147,0.18)] p-8">
              <div className="flex items-start gap-6">
                <div className="h-[170px] w-[150px] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_14px_35px_rgba(116,101,147,0.25)]">
                  <img src="/developer.avif?height=320&width=320" alt="Andrew Crew" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-end space-y-6 text-right">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900">Andrew Crew</h3>
                    <p className="text-lg text-stone-500">Developer</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#e8f7e3] px-5 py-2 text-base font-medium text-[#1d8a41] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Best fit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Manager Card */}
            <div className="absolute bottom-0 left-8">
              <div className="relative w-[300px] rounded-[36px] border border-[#f4ddc5] bg-white shadow-[0_24px_60px_rgba(199,150,120,0.18)] p-7">
                <div className="flex items-center justify-center">
                  <div className="h-[200px] w-[220px] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_12px_35px_rgba(199,150,120,0.25)]">
                    <img src="/account.avif?height=320&width=320" alt="Account Manager" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-10 right-6 rotate-[8deg] rounded-full bg-white px-4 py-2 text-lg font-medium text-stone-600 shadow-[0_12px_30px_rgba(199,150,120,0.25)]">
                  Account Manager
                </div>
              </div>
            </div>

            {/* Financial Specialist Feature */}
            <div className="absolute top-10 right-0">
              <div className="absolute -top-10 left-1/2 z-10 -translate-x-1/2 -rotate-[6deg] rounded-full bg-white px-6 py-3 text-lg font-semibold text-stone-600 shadow-[0_20px_45px_rgba(167,153,189,0.2)]">
                Financial specialist
              </div>
              <div className="relative flex h-[360px] w-[260px] flex-col items-center justify-end rounded-[42px] border-[3px] border-[#b6dca0] bg-white shadow-[0_30px_80px_rgba(167,153,189,0.25)] p-6">
                <div className="absolute inset-x-6 top-6 h-[260px] overflow-hidden rounded-[32px]">
                  <img src="/financial.avif?height=520&width=520" alt="Financial specialist" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#f9e175] shadow-[0_20px_45px_rgba(167,153,189,0.2)]">
                <Star className="h-6 w-6 text-[#f4b400]" fill="#f4b400" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 py-18">
        <h2 className="text-center text-3xl text-stone-600 font-semibold mb-14 tracking-wide">
          TRUSTED BY 100+ COMPANIES
        </h2>

        <div className="flex items-center justify-center gap-16 flex-wrap  text-3xl">
          <div className="font-bold text-[#20303e]">LEVER</div>
          <div className="font-bold text-[#20303e]">gusto</div>
          <div className="font-bold text-[#20303e]">HireVue</div>
          <div className="font-bold text-[#20303e]">zapier</div>
          <div className="font-bold text-[#20303e] italic">Glossier.</div>
          <div className="font-bold text-[#20303e]">mailchimp</div>
          <div className="font-bold text-[#20303e]">Buffer</div>
        </div>
      </section>
    </div>
  )
}












