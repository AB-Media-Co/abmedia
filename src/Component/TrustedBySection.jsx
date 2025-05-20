import React from "react";

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Join Over 5,000 Companies <br />
          from Small Business to Enterprise
        </h2>

        <div className="mt-12 flex flex-wrap justify-between items-center ">
          <img src="/logos/sofi.svg" alt="SoFi" className="h-8 sm:h-10 object-contain" />
          <img src="/logos/cnn.svg" alt="CNN" className="h-8 sm:h-10 object-contain" />
          <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-8 sm:h-10 object-contain" />
          <img src="/logos/adobe.svg" alt="Adobe" className="h-8 sm:h-10 object-contain" />
          <img src="/logos/intuit.svg" alt="Intuit" className="h-8 sm:h-10 object-contain" />
        </div>
      </div>
    </section>
  );
}
