import Image from "next/image"

export function WhyChooseUs() {
  return (
    <div className="bg-[#fffcf7] py-16 px-4">
      <div className="mx-22">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">Why choose us?</h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid gap-8 gap-x-6 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl font-bold">+</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Hiring Process</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time updates, honest feedback,
                  <br />
                  clear communication at every step.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl font-bold">+</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Ready Talent Pool</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vetted professionals with the skills
                  <br />
                  and mindset to grow with you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl font-bold">+</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-Centered Matching</h3>
                <p className="text-gray-700 leading-relaxed">
                  We connect people to teams
                  <br />
                  based on values, not just job titles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-purple-600 text-2xl font-bold">+</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed Without Sacrifices</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hire fast without cutting corners.
                  <br />
                  We vet, so you don't have to.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/team.avif"
                alt="Happy diverse team of professionals"
                width={600}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
