import React from "react";

const services = [
    {
        title: "Express & Standard Delivery",
        desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: "🚚",
    },
    {
        title: "Nationwide Delivery",
        desc: "We deliver parcels nationwide with home delivery in every district; ensuring your products reach customers within 48–72 hours.",
        icon: "📦",
        highlight: true,
    },
    {
        title: "Fulfillment Solution",
        desc: "We also offer customized service with inventory management support, online order processing, packaging, and other sales support.",
        icon: "🏬",
    },
    {
        title: "Cash on Home Delivery",
        desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: "💰",
    },
    {
        title: "Corporate Service / Contract in Logistics",
        desc: "Customized corporate services which include warehouse and inventory management support.",
        icon: "📑",
    },
    {
        title: "Parcel Return",
        desc: "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
        icon: "🔁",
    },
];

const OurServices = () => {
    return (
        <section className="bg-[#0f2c2f] text-white py-16 px-6 md:px-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl shadow-md text-center p-8 border border-gray-700 transition-all duration-300 bg-[white] hover:bg-[#1b4d50]"
                    >
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-[#0f2c2f] mb-3">{service.title}</h3>
                        <p className="text-sm text-black leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
