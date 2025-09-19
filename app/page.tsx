import { StatsCards } from "@/components/stats-cards"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { FooterShowcase } from "@/components/FooterShowcase"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { HowTalentBridgeWorks } from "@/components/HowTalentBridgeWorks"
import { FloatingProfileCards } from "@/components/FloatingProfileCards"
import { JobBoardShowcase } from "@/components/JobBoardShowcase"

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
          <FloatingProfileCards />
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
      <StatsCards />
      <WhyChooseUs />
      <HowTalentBridgeWorks />
      <JobBoardShowcase/>
      <FooterShowcase />
    </div>
  )
}












