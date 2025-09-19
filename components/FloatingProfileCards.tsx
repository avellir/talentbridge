"use client"

import { motion } from "motion/react"
import { Star, ThumbsUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface FloatingProfileCardsProps {
  className?: string
}

export function FloatingProfileCards({ className }: FloatingProfileCardsProps) {
  return (
    <div className={cn("relative hidden lg:block h-[520px]", className)}>
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

      <motion.div
        className="absolute top-0 left-4 w-[380px] rounded-[36px] border border-[#e5def7] bg-white shadow-[0_24px_60px_rgba(116,101,147,0.18)] p-8"
        initial={{ y: 0 }}
        animate={{ y: [-14, 0, -14] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
        whileHover={{ x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.5, ease: "easeInOut" } }}
      >
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
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-8"
        initial={{ y: 0 }}
        animate={{ y: [-10, 2, -10] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.6 }}
        whileHover={{ x: [0, -5, 5, -3, 3, 0], transition: { duration: 0.55, ease: "easeInOut" } }}
      >
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
      </motion.div>

      <motion.div
        className="absolute top-10 right-0"
        initial={{ y: 0 }}
        animate={{ y: [-16, 0, -16] }}
        transition={{ duration: 7.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.4 }}
        whileHover={{ x: [0, -7, 7, -4, 4, 0], transition: { duration: 0.55, ease: "easeInOut" } }}
      >
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
      </motion.div>
    </div>
  )
}
