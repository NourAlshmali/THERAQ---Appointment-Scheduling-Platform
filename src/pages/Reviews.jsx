import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      text: "The doctor was very professional and listened carefully to my concerns. Highly recommend!",
      rating: 5,
    },
    {
      name: "Omar Khalil",
      text: "The clinic was clean and the staff were kind. Booking was super easy!",
      rating: 4,
    },
    {
      name: "Lina Darwish",
      text: "I got my appointment quickly and the doctor was amazing! Thank you!",
      rating: 5,
    },
    {
      name: "Hassan Youssef",
      text: "Excellent service and friendly atmosphere. I’ll definitely come back again!",
      rating: 5,
    },
  ];

  return (
    <section
      className="
  bg-gradient-to-r from-[#e1e5f2] via-[#bfdbf7] to-[#d5defd]
  dark:bg-gradient-to-r dark:from-[#1D2545] dark:via-[#0B0B45] dark:to-[#04090F]
  py-20 px-8 md:px-20 …
"
    >
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="text-center mb-14 animate-fade-in-down">
        <h2
          className="text-4xl md:text-5xl dark:text-white font-bold bg-clip-text bg-gradient-to-r from-[#1f7a8c] via-[#0c5766] to-[#022b3a]
"
        >
          Patient Reviews
        </h2>
        <p className=" text-[#485666] dark:text-[white] mt-3 text-lg">
          What our patients are saying about their experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#e1e5f2] rounded-2xl shadow-xl p-8 transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <p className="text-gray-700 dark:text-[#485666] mb-6 text-lg leading-relaxed italic">
              “{review.text}”
            </p>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-[#022b3a] dark:text-[#485666] text-xl">
                {review.name}
              </h4>
              <div className="flex text-yellow-400 text-xl">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                {Array(5 - review.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
