import React from "react";

function Herosec() {
  return (
    <section className="bg-[url('/img/bodyhead.png')] min-h-[600px] bg-center">
      <div className="mx-auto max-w-4xl text-white text-center flex flex-col gap-5">
        <h2 className="text-yellow-700 font-semibold text-4xl ">
          The Book Lover's Dreamland Awaits!
        </h2>
        <p>
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book
          has a chance to inspire someone new
        </p>
        <div className="border-2 border-yellow-700/30 w-1/3 mx-auto py-3 px-5 text-left rounded-md relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <button className="bg-yellow-700/30 rounded-md py-2 px-6 absolute right-1 top-1 ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Herosec;
