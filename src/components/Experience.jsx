import React from "react";
import euler from "../assets/euler.jpeg";
import northway from "../assets/northway.png";
import ongc from "../assets/ongc.png";
function Experience() {
  return (
    <div>
      <div>
        <div className="flex justify-center pb-10">
          <div>
            <div className="text-5xl font-bold">EXPERIENCES</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 ">
        <img src={euler} alt="Logo" className="h-30 px-10" />
        <img src={northway} alt="Logo" className="h-30 px-10" />
        <img src={ongc} alt="Logo" className="h-30 px-10" />
      </div>
    </div>
  );
}

export default Experience;
