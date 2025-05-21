export default function StrategyStepsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug mb-20">
          Book a Call to Get Your <br className="hidden sm:block" /> Custom Strategy
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {[
            {
              title: "Site Audit",
              img: "/site-audit.png",
              desc: "We analyze your site, your industry, and your competitors to show you the opportunities.",
            },
            {
              title: "Action Plan",
              img: "/action-plan.png",
              desc: "Get a detailed execution plan for how we can achieve your goals.",
            },
            {
              title: "Quote",
              img: "/quote.png",
              desc: "We give you detailed pricing on how much it will cost and timelines.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center space-y-5"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center p-4">
                <img src={step.img} alt={step.title} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-8">
          <a
            href="#book-a-call"
            className="inline-block bg-black text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-lg hover:bg-gray-900 transition duration-300"
          >
            BOOK A FREE STRATEGY CALL
          </a>
        </div>
      </div>
    </section>
  );
}
