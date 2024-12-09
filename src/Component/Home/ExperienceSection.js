import React from "react";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-white p-10 ">
      <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-center gap-8 w-full ">
        {/* Experience Years */}
        <div className="flex items-center justify-center text-3xl font-bold ">
          <div className="text-[80px] lg:text-[130px] text-orange-500 font-mono">
            [
          </div>
          <div className="text-6xl lg:text-8xl text-gray-900">
            25
          </div>
          <div className="text-lg lg:text-xl text-gray-900">
            <span className="flex flex-col items-center">
              Years <span>of</span> <span>Experience</span>
            </span>
          </div>
          <div className="text-[80px] lg:text-[130px] text-orange-500 font-mono">
            ]
          </div>
        </div>

            

        {/* About Us Section */}
        <div className="w-full text-center lg:text-left flex flex-col items-start justify-start ">

          <h6  className="text-gray-900 mb-4 lg:mb-8 text-3xl lg:text-6xl font-medium leading-tight flex flex-col ">
          <span className="capitalize text-orange-600 font-medium text-sm lg:text-base ">
            ABOUT US
          </span>  Creative solutions by professional designers
          </h6>
        </div>

        {/* Description and Button */}
        <div className="flex flex-col items-center lg:items-start justify-center w-3/4 px-4 lg:px-8 gap-4 ">
          <h1 className="text-gray-600 text-base lg:text-base leading-relaxed text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            officia vel saepe dolore dignissimos ad illum asperiores cum quis
            dolorem provident aspernatur numquam blanditiis harum accusantium
            modi iste quo, ipsa quam similique quae eaque fuga tenetur? Quas
            magnam et nesciunt.
          </h1>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
