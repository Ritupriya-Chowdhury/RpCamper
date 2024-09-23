import { useState } from "react";

const faqs = [
  {
    question: "What is the main purpose of a camper shop?",
    answer:
      "A camper shop provides essential camping gear, accessories, and supplies that make outdoor camping convenient and enjoyable. It typically includes products like tents, sleeping bags, portable stoves, backpacks, and hiking equipment.",
  },
  {
    question: "How can I categorize products in a camper shop?",
    answer:
      "Products can be categorized based on their use or functionality, such as tents & shelters, sleeping gear, cooking equipment, clothing , footwear and lighting.",
  },
  {
    question: "What information should a product page include in a camper shop?",
    answer:
      "A product page should include the name, price, stock quantity, description, category, ratings, and clear images of the product from different angles.",
  },
  {
    question: "What are some important considerations for managing stock in a camper shop?",
    answer:
      "Important considerations include monitoring stock levels, reordering popular products, running promotions for slow-moving items, and integrating low stock alerts for timely replenishment.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 pl-2 bg-gray-200">
      <h2 className="md:text-3xl text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="md:w-full w-8/12 text-left text-lg font-semibold py-2 border-b"
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="py-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
