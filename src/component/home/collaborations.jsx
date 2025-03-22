import React from "react";

const Collaborations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Collaborations
        </h2>
        <div className="overflow-hidden relative whitespace-nowrap group">
          <div className="inline-flex animate-marquee space-x-10 group-hover:animate-marquee-paused">
            {/* Duplicating the logos for seamless scrolling */}
            {[
              { src: 'panduit.png', alt: 'Panduit' },
              { src: 'xtralis.png', alt: 'Xtralis' },
              { src: 'phoenix.png', alt: 'Phoenix Contact' },
              { src: 'partex.png', alt: 'Partex' },
              { src: 'hellermann.png', alt: 'HellermannTyton' },
              { src: 'ideal.png', alt: 'Ideal' },
              { src: 'app.png', alt: 'APP' },
              { src: 'allied.png', alt: 'Allied Connectors' },
            ]
              .map((item, index) => (
                <React.Fragment key={index}>
                  <div className="border-2 border-gray-300 h-32 w-48 flex justify-center items-center shadow-lg rounded-lg bg-white">
                    <img
                    src={`/${item.src}`}
                      alt="Collaboration 1"
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee-paused {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Collaborations;
