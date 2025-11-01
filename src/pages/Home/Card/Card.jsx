import { FaShoppingCart } from "react-icons/fa";
import biriyani from "../../../assets/Card/biriyani.png";

const products = [
  {
    id: 1,
    img: biriyani,
    title: "Fresh Organic Tomato",
    desc: "Grown naturally with no harmful chemicals.",
    price: "$5.99",
  },
  {
    id: 2,
    img: biriyani,
    title: "Pure Honey Jar",
    desc: "Raw, unfiltered, and full of natural goodness.",
    price: "$8.50",
  },
  {
    id: 3,
    img: biriyani,
    title: "Natural Olive Oil",
    desc: "Cold-pressed extra virgin olive oil.",
    price: "$12.00",
  },
  {
    id: 4,
    img: biriyani,
    title: "Organic Green Tea",
    desc: "Refreshing and healthy green tea leaves.",
    price: "$6.75",
  },
  {
    id: 5,
    img: biriyani,
    title: "Fresh Mango Juice",
    desc: "Sweet and natural juice with no preservatives.",
    price: "$4.20",
  },
  {
    id: 6,
    img: biriyani,
    title: "Almond Pack",
    desc: "Rich in protein and healthy fats.",
    price: "$9.90",
  },
  {
    id: 7,
    img: biriyani,
    title: "Farm Fresh Milk",
    desc: "Pure and creamy milk straight from the farm.",
    price: "$3.50",
  },
  {
    id: 8,
    img: biriyani,
    title: "Brown Rice Bag",
    desc: "Healthy alternative to white rice.",
    price: "$10.00",
  },
  {
    id: 9,
    img: biriyani,
    title: "Fresh Strawberries",
    desc: "Juicy and sweet, freshly harvested berries.",
    price: "$7.25",
  },
];

export default function Card() {
  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <h2 className="text-2xl font-regular text-center mb-10">Lorem ipsum dolor sit amet.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
          >
            <figure>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-bold text-lg">{item.price}</span>
                <FaShoppingCart className="text-xl text-primary cursor-pointer hover:scale-110 transition-transform" />
              </div>
              <div className="card-actions justify-end mt-3">
                <button className="btn btn-primary w-full">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
