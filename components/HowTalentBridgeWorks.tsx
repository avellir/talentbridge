import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Tell us what you need",
    description: "Share your role, goals, and what makes a great hire for your team.",
  },
  {
    number: "2",
    title: "We shortlist top matches",
    description: "Every candidate is pre-vetted - no spam, no scrolling, just quality intros.",
  },
  {
    number: "3",
    title: "You connect & hire fast",
    description: "Skip the job boards. Interview, decide, and bring them onboard in record time.",
  },
]

export function HowTalentBridgeWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe9] py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1a18] sm:text-5xl">
            How TalentBridge Works
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#51483f]">
            From curated intros to faster hiring - here's how we match standout talent with forward-thinking companies.
          </p>
        </header>

        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 960 180"
            className="pointer-events-none absolute -top-24 hidden h-[180px] w-[calc(100%+4rem)] -translate-x-8 md:block"
          >
            <path
              d="M40 150C160 40 320 40 480 150"
              fill="none"
              stroke="#d9cec4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 10"
            />
            <path
              d="M480 150C640 40 800 40 920 150"
              fill="none"
              stroke="#d9cec4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 10"
            />
          </svg>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative flex h-full flex-col gap-4 rounded-[28px] border border-[#e4d9d0] bg-white p-6 shadow-[0_18px_45px_rgba(31,28,24,0.08)] sm:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f1a17] text-base font-semibold text-white">
                  {step.number}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1d1a18]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5a5046]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[36px] border border-[#dcd1f4] bg-white/90 p-8 shadow-[0_28px_60px_rgba(86,60,140,0.12)] backdrop-blur-sm sm:p-10 lg:flex lg:items-center lg:gap-16 lg:min-h-[360px]">
          <div className="mx-auto flex w-48 shrink-0 justify-center overflow-hidden rounded-[28px] p-2 sm:w-48 lg:w-56 lg:p-4">
            <Image
              src="/vp.avif"
              alt="Smiling hiring partner pointing at the viewer"
              width={360}
              height={360}
              className="h-full w-full rounded-[24px] object-cover object-center"
            />
          </div>

          <div className="mt-10 flex-1 lg:mt-0">
            <blockquote className="text-2xl font-semibold leading-snug text-[#1d1a18] sm:text-[30px]">
              We've hired faster and smarter since switching to TalentBridge - it's like having a recruiter built into our hiring process.
            </blockquote>
            <cite className="mt-6 block text-sm font-medium uppercase tracking-[0.2em] text-[#6e6457] not-italic">
              Maya Lin, VP of People, SeedFlow
            </cite>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <span className="text-sm font-medium text-[#4f463c]">1/5</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5c7ba] text-[#1f1a17] transition hover:border-[#1f1a17] hover:bg-[#f7efe9]"
                  aria-label="View previous testimonial"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d5c7ba] text-[#1f1a17] transition hover:border-[#1f1a17] hover:bg-[#f7efe9]"
                  aria-label="View next testimonial"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
