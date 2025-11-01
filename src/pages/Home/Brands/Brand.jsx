import React from "react";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/casio.png";
import logo3 from "../../../assets/brands/moonstar.png";
import logo4 from "../../../assets/brands/amazon_vector.png";
import logo5 from "../../../assets/brands/start.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/randstad.png";

const Brands = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    return (
        <div className="bg-[#e9eff0] py-10 text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                We've helped thousands of{" "}
                <span className="text-primary font-semibold">sales teams</span>
            </h2>

            {/* Logo Slider */}
            <div className="overflow-hidden max-w-6xl mx-auto">
                <div
                    className="flex items-center justify-center group"
                    style={{
                        animation: "scroll 25s linear infinite",
                        gap: "100px", // spacing between logos
                        width: "max-content",
                    }}
                >
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="brand"
                            style={{
                                height: "24px", // fixed small height
                                width: "auto",
                            }}
                            className="object-contain opacity-80 hover:opacity-100 transition"
                        />
                    ))}
                </div>
            </div>

            {/* Inline animation keyframes */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .group:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Brands;
