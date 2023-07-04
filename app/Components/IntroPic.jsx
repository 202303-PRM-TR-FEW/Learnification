import React from "react";
import Image from "next/image";
import intro from "../../public/intro.png";
function IntroPic() {
  return (
    <div className="bg-primary-white max-w-full lg:h-full rounded-[50px] object-contain grid items-center justify-center basis-full">
      <Image
        src={intro}
        alt="LearnU Intro Picture"
        className="w-full max-lg:max-w-[400px] 2xl:max-h-[600px] 2xl:max-w-[600px] aspect-square"
        sizes="100vw"
        priority={true}
      />
    </div>
  );
}

export default IntroPic;
