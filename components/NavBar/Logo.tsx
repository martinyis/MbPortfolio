import React from "react";
import Image from "next/image";
type TypeLogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: TypeLogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="Picture of the author"
      width={width}
      height={height}
    />
  );
};

export default Logo;
