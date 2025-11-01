import React from "react";

const steps = [
    {
        icon: "📝",
        title: "1. Book Your Parcel",
        desc: "Schedule your delivery easily through our website or app by filling in pickup and drop-off details.",
    },
    {
        icon: "🚚",
        title: "2. We Pick It Up",
        desc: "Our delivery agent collects your parcel from your location at your preferred time.",
    },
    {
        icon: "📦",
        title: "3. Safe Transit",
        desc: "We ensure your parcel is safely transported and tracked in real time across our network.",
    },
    {
        icon: "📬",
        title: "4. Delivered On Time",
        desc: "Your parcel reaches the recipient quickly and securely, with live status updates provided.",
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-[#e9eff0] text-white py-16 px-6 md:px-16">
            <div className="text-left mb-12">
                <h2 className="text-[#0f2c2f] text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="rounded-2xl shadow-md text-center p-8 border border-gray-700 transition-all duration-300 bg-[#ffffff] hover:bg-[#1b4d50]"
                    >
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-lg text-[#0f2c2f] font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-black leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
