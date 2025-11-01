import { FaArrowRight } from "react-icons/fa";

const Faq = () => {
  return (
    <section className="bg-[#e9eff0] py-16 px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-[#0f2c2f] text-3xl md:text-4xl font-bold mb-3">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-[#0f2c2f] max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly. Achieve proper alignment,
          reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="bg-white p-8 max-w-3xl mx-auto space-y-4">
        <div className="collapse collapse-arrow bg-base-100 shadow-sm">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title  text-lg font-medium">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              A posture corrector works by providing support and gentle alignment to your shoulders,
              back, and spine, encouraging you to maintain proper posture throughout the day.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-sm">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-medium">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, it’s designed for all ages and body types with adjustable straps for comfort.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-sm">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-medium">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Consistent use can relieve muscle tension, reduce pain, and improve your overall posture.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-sm">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-medium">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Some models include vibration reminders to alert you when you slouch.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow-sm">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-medium">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              You can subscribe to our email list or enable push notifications for restock alerts.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="btn btn-success btn-wide rounded-full gap-2 text-black">
          See More FAQ’s <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Faq;
