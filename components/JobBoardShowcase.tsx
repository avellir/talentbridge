"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MapPin, Star } from "lucide-react"
import { motion } from "motion/react"

const roles = [
  { title: "Warehouse Operator", experience: "4 yrs experience", location: "Chicago" },
  { title: "Restaurant Manager", experience: "9 yrs experience", location: "Mexico City" },
  { title: "Retail Manager", experience: "6 yrs experience", location: "Austin" },
  { title: "Hotel Front Desk Supervisor", experience: "2 yrs experience", location: "Prague" },
  { title: "Pharmaceutical Sales", experience: "5 yrs experience", location: "Remote / Milan" },
  { title: "Customer Experience", experience: "7 yrs experience", location: "Lisbon" },
]

interface JobBoardShowcaseProps {
  className?: string
}

export function JobBoardShowcase({ className }: JobBoardShowcaseProps) {
  const midpoint = Math.ceil(roles.length / 2)
  const leftRoles = roles.slice(0, midpoint)
  const rightRoles = roles.slice(midpoint)

  return (
    <section
      className={cn(
        "relative grid gap-12 mx-12 rounded-[42px] bg-[#fdf6ef] px-6 py-6 shadow-[0_30px_80px_rgba(64,46,36,0.12)] md:grid-cols-2 md:items-start md:gap-16 lg:px-16 lg:py-16",
        className,
      )}
    >
      <div className="flex max-w-xl flex-col justify-center gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-stone-900 lg:text-5xl">Job Board</h2>
          <p className="text-lg leading-relaxed text-stone-600 lg:text-xl">
            Explore handpicked candidate profiles for high-impact roles - all pre-vetted, ready to interview, and aligned
            with your needs.
          </p>
        </div>
        <Button className="w-fit rounded-full bg-stone-900 px-7 py-6 text-base font-medium text-white hover:bg-stone-800">
          Browse Open Roles
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-[22rem] overflow-hidden rounded-[32px]">
          <motion.div
            className="flex flex-col gap-5"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {[...leftRoles, ...leftRoles].map((role, index) => (
              <article
                key={`${role.title}-${index}`}
                className="flex flex-col gap-4 rounded-[28px] border border-[#f1e4d8] bg-[#fefaf6] px-6 py-7 text-left shadow-[0_25px_60px_rgba(154,131,109,0.16)]"
              >
                <h3 className="text-lg font-semibold text-stone-900">{role.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#7f6f62]">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-[#d5bba1]" />
                    {role.experience}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-[#d5bba1]" />
                    {role.location}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[22rem] overflow-hidden rounded-[32px]">
          <motion.div
            className="flex flex-col gap-5"
            animate={{ y: ["-50%", "0%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {[...rightRoles, ...rightRoles].map((role, index) => (
              <article
                key={`${role.title}-${index}`}
                className="flex flex-col gap-4 rounded-[28px] border border-[#f1e4d8] bg-[#fefaf6] px-6 py-7 text-left shadow-[0_25px_60px_rgba(154,131,109,0.16)]"
              >
                <h3 className="text-lg font-semibold text-stone-900">{role.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#7f6f62]">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-[#d5bba1]" />
                    {role.experience}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-[#d5bba1]" />
                    {role.location}
                  </span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[42px] border border-white/60"></div>
    </section>
  )
}
