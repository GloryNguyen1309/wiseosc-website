import Link from "next/link";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="relative flex items-center">
      <Image
        src="/logo3.png"
        alt="WiseOSC"
        width={82}
        height={82}
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
