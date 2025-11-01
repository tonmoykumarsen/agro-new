import benefitImg from "../../../assets/Benifit/manager.jpg";

const Benifit = () => {
  const data = [
    {
      title: "Why Choose Our Service",
      desc: "We deliver efficiency and simplicity in every step. Our system combines performance, accessibility, and smart design to ensure you get the best experience possible.",
    },
    {
      title: "Reliable & Fast Support",
      desc: "Our team is always available to provide quick assistance and ensure your workflow never stops. You can rely on us for stability and performance.",
    },
    {
      title: "Secure and Scalable",
      desc: "We use modern technologies to ensure your data and operations are safe. Our platform scales easily as your needs grow.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl shadow-md mx-auto max-w-[1280px] flex flex-col md:flex-row items-center relative overflow-hidden px-6 md:px-12 py-6 md:py-0"
          >
            {/* Left Image */}
            <div className="flex justify-center items-center w-full md:w-[300px] mb-6 md:mb-0">
              <img
                src={benefitImg}
                alt="Benefit"
                className="rounded-xl shadow-sm w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-cover"
              />
            </div>

            {/* Dotted Divider Line (hidden on mobile) */}
            <div className="hidden md:block absolute left-[300px] top-0 h-full border-l-2 border-dotted border-gray-400"></div>

            {/* Right Side Content */}
            <div className="text-center md:text-left md:pl-10 w-full md:w-[920px]">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benifit;
