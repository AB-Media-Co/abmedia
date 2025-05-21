import React from "react";

export default function TrustedBySection() {
  const logosRow1 = Array.from({ length: 7 }, (_, i) => `/logos/${i + 1}.png`);
  const logosRow2 = Array.from({ length: 6 }, (_, i) => `/logos/${i + 8}.png`);

  const renderScrollingRow = (logos, direction) => {
    // Duplicate the logos array to create seamless looping
    const duplicatedLogos = [...logos, ...logos];
    
    return (
      <div className="w-full overflow-hidden relative h-40 flex items-center">
        <div
          className={`flex items-center gap-12 whitespace-nowrap ${
            direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
        >
          {duplicatedLogos.map((src, i) => (
            <img
              key={`${direction}-${i}`}
              src={src}
              alt={`logo-${i}`}
              className=" w-auto object-contain max-w-[280px]"
              draggable="false"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Join Over 500 Companies <br />
          from Small Business to Enterprise
        </h2>

        {/* Row 1: Left */}
        {renderScrollingRow(logosRow1, "left")}

        {/* Row 2: Right */}
        <div className="mt-8">
          {renderScrollingRow(logosRow2, "right")}
        </div>

        {/* Keyframes and animations */}
        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left ${logosRow1.length * 3}s linear infinite;
            will-change: transform;
          }
          .animate-scroll-right {
            animation: scroll-right ${logosRow2.length * 3}s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
}