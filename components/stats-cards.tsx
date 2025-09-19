const stats = [
  {
    value: "7 days",
    description: "Average time to fill in a role",
  },
  {
    value: "69%",
    description: "Of clients return to hire again",
  },
  {
    value: "500+",
    description: "Companies found perfect hires",
  },
] as const

export const StatsCards = () => {
  return (
    <section className="rounded-[40px] bg-[#f6f0eb] px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row">
        {stats.map((stat) => (
          <article
            key={stat.value}
            className="group relative flex-1 overflow-hidden rounded-[32px] border border-[#cde6cb] bg-[radial-gradient(circle_at_top_left,_rgba(210,244,210,0.95),_rgba(255,255,255,0.55)_58%),_radial-gradient(circle_at_bottom_right,_rgba(198,238,198,0.9),_rgba(255,255,255,0.5)_62%)] px-10 py-12 text-center text-balance shadow-[0_26px_58px_rgba(52,88,60,0.16)] transition-[transform,box-shadow] duration-300 ease-out transform-gpu [transform:perspective(1200px)_rotateX(0deg)_translateY(0)] before:pointer-events-none before:absolute before:inset-[1px] before:rounded-[30px] before:bg-[linear-gradient(128deg,rgba(255,255,255,0.78),rgba(255,255,255,0)_68%)] before:opacity-85 before:transition-opacity before:duration-300 before:content-[''] after:pointer-events-none after:absolute after:left-1/2 after:top-full after:h-12 after:w-[82%] after:-translate-x-1/2 after:-translate-y-1 after:rounded-[44px] after:bg-[radial-gradient(65%_160%_at_50%_0%,rgba(42,72,52,0.32),transparent)] after:blur-[18px] after:opacity-60 after:transition-[opacity,transform] after:duration-300 after:content-[''] group-hover:[transform:perspective(1200px)_rotateX(5deg)_translateY(-12px)] group-hover:shadow-[0_44px_90px_rgba(40,78,52,0.24)] group-hover:before:opacity-100 group-hover:after:-translate-y-3 group-hover:after:opacity-85"
          >
            <div className="relative text-[42px] font-semibold leading-tight text-[#263126]">
              {stat.value}
            </div>
            <p className="relative mt-3 text-lg leading-7 text-[#3a463d]">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
