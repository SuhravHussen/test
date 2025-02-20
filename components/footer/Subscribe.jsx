import React from "react";

export default function Subscribe() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[-150px]  w-[90%] h-[250px] overflow-hidden bg-[--secondary] bg-[url('/subscribe-bg.png')] bg-cover mx-auto max-w-screen-xl rounded-xl flex flex-col items-center justify-center lg:flex-row p-8 gap-4">
      <div className="flex flex-col  w-full lg:w-1/2 justify-center">
        <p className="text-[--primary] text-xl font-bold">Get In Touch</p>
        <h1 className="text-3xl lg:text-5xl font-bold">SUBSCRIBE OUR</h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-stroke text-[--secondary]">
          NEWSLETTER
        </h1>
      </div>

      <div className="flex flex-col gap-4 w-full lg:w-1/2 items-center ">
        <div className="w-full lg:bg-[var(--background)] p rounded-xl">
          <form className="flex flex-col lg:flex-row  gap-4 w-full lg:items-center  ">
            <input
              type="email"
              placeholder="Type your email"
              className="p-2 lg:p-4 rounded-xl w-full bg-[var(--background)]"
            />
            <button className="bg-[--primary] text-black px-6 py-2 rounded-xl lg:mr-2 font-bold">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
