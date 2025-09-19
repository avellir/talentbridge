import Image from "next/image"

const learnMoreLinks = ["About Us", "How It Works", "Client Results", "Press & Mentions", "Contact Us", "Privacy Policy"]
const employersLinks = ["Start Hiring", "Pricing & Plans", "Career Resources", "Success Stories", "FAQs"]
const candidatesLinks = ["Find a Role", "Join Our Talent Pool", "Tips & Advice"]
const socials = [
  { name: "Facebook", icon: "/icons/social-facebook.svg" },
  { name: "Twitter", icon: "/icons/social-twitter.svg" },
  { name: "Instagram", icon: "/icons/social-instagram.svg" },
  { name: "LinkedIn", icon: "/icons/social-linkedin.svg" },
]

export function FooterShowcase() {
  return (
    <footer className="relative overflow-hidden  bg-[#1f1f1f] px-12 py-16 text-base text-[#d2d0cd] lg:px-20 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-32 w-32 rounded-full bg-[#6b7f5b] opacity-60 blur-3xl"></div>
      <div className="pointer-events-none absolute -left-10 -bottom-16 h-40 w-40 rounded-full bg-[#516047] opacity-50 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-24 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-b from-[#5e537b] via-[#2d2944] to-[#1f1b2f] opacity-80 blur-3xl"></div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ece7df] text-[#1f1f1f]">
              <span className="text-lg font-semibold">T</span>
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">TALENTBRIDGE</span>
          </div>
          <p className="text-sm text-[#9e9b96]">&copy; 2025 TalentBridge | All Rights Reserved</p>
        </div>

        <nav className="grid flex-1 grid-cols-2 gap-8 text-base text-[#c7c4bf] sm:grid-cols-3 lg:flex lg:flex-1 lg:justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-white">Learn More</h3>
            <ul className="space-y-3">
              {learnMoreLinks.map((item) => (
                <li key={item} className="transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-white">For Employers</h3>
            <ul className="space-y-3">
              {employersLinks.map((item) => (
                <li key={item} className="transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-white">For Candidates</span>
            <ul className="space-y-3">
              {candidatesLinks.map((item) => (
                <li key={item} className="transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-white">Social</span>
            <ul className="flex items-center gap-4">
              {socials.map((social) => (
                <li key={social.name} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a2a2a] transition-colors hover:bg-[#3a3a3a]">
                  <Image src={social.icon} alt={social.name} width={20} height={20} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}
