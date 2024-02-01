import React from "react";
import SpinnerImg from "../../public/spinner-2.svg";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="col-span-3 relative">
      <div className="absolute top-[5rem] left-[9rem] lg:left-[20rem] flex items-center justify-center">
        <Image src={SpinnerImg} alt="loading..." height={100} width={100} />
      </div>
    </div>
  );
};

export default Spinner;
