import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-[url('/img/footert.png')] min-h-[600px] text-white">
        <div className="flex mx-auto items-center px-5 ">
          <div className="w-2/3 ">
            <img src="img/bookimg.png" alt="" />
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-yellow-500">
              Your favourite <br />
              Reads Are Here!
            </h1>
            <p className="text-sm">
              Buy your favorite books online with ease! Enjoy exclusive offers
              and discounts on selected titles. Dive into our collection and
              find special deals that make reading more affordable. Shop now and
              unlock more savings with every purchase!
            </p>
            <div className="flex gap-6">
              <img src="img/1p.png" alt="" />
              <img src="img/4p.png" alt="" />
              <img src="img/5p.png" alt="" />
            </div>
            <div>
              <img src="img/expo.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src="img/neth.png" alt="" />
        </div>
        <span className="absolute border-2 w-[98%] rounded border-gray-600/30 "></span>
        <div className="flex gap-4 mx-auto items-center justify-between px-5 mt-5">
          <div>
            <img src="img/nethpoint.png" alt="" />
          </div>
          <h1 className="text-yellow-500/30">
            Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
            register for our online platform to enjoy maximum benefits!
          </h1>
          <div className="flex gap-2">
            <img src="img/Facebook.png" alt="" className="size-8" />
            <img src="img/Linkedin.png" alt="" className="size-8" />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
