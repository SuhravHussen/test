import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
  {
    id: 2,
    name: "Ilham Yuda",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested to treatment.",
  },
  {
    id: 3,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
];

const TestimonialCard = ({ testimonial, isHighlighted }) => {
  return (
    <div
      className={`flex bg-[--secondary] flex-col gap-10 p-8 relative rounded-lg min-h-[200px] w-full lg:w-[70%] ${
        isHighlighted
          ? "lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10"
          : "lg:opacity-50"
      }`}
    >
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={45}
        height={45}
        className="absolute top-[-15px] left-[-15px] border-2 border-white rounded-full"
      />
      <p>{testimonial.feedback}</p>
      <div>
        <p>{testimonial.name}</p>
        <p>{testimonial.role}</p>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="py-20">
      <div className="max-w-7xl w-[95%] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 w-full lg:w-[40%] items-start justify-center">
          <h1 className="text-3xl font-bold">Meet Our Super Clients</h1>
          <p>
            We are providing the best and suitable home insurance services for
            the people who are interested in treatment. Our clients are our main
            source of inspiration and we are very grateful to them for their
            trust.
          </p>
          <button className="animated-button px-8 py-3 border-2 border-[--secondary] rounded-lg bg-[--background]">
            View All Clients
          </button>
        </div>
        <div className="w-[95%] mx-auto lg:w-[60%] flex flex-col gap-10 relative items-end">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isHighlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
