export default function StrategyStepsSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-16">
            Book a Call to Get Your <br className="hidden sm:block" /> Custom Strategy
          </h2>
  
          <div className="grid md:grid-cols-3 gap-12 items-start text-center">
            {/* Site Audit */}
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/site-audit.webp"
                alt="Site Audit"
                className=" object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">Site Audit</h3>
              <p className="text-gray-600 max-w-xs">
                We analyze your site, your industry, and your competitors to show you the opportunities.
              </p>
            </div>
  
            {/* Action Plan */}
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/action-plan.webp"
                alt="Action Plan"
                className=" object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">Action Plan</h3>
              <p className="text-gray-600 max-w-xs">
                Get a detailed execution plan for how we can achieve your goals.
              </p>
  
              {/* CTA Button */}
              <a href="#book-a-call" className="mt-4 bg-black text-white font-semibold py-3 px-6 rounded shadow">
                BOOK A CALL
              </a>
            </div>
  
            {/* Quote */}
            <div className="flex flex-col items-center space-y-6">
              <img
                src="/quote.webp"
                alt="Quote"
                className=" object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">Quote</h3>
              <p className="text-gray-600 max-w-xs">
                We give you detailed pricing on how much it will cost and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  