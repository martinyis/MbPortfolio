import React from "react";
import Image from "next/image";
import Link from "next/link";
type TypeLogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: TypeLogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Picture of the author"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
