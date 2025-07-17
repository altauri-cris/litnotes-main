import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialLinkProps {
  alt: string;
  imageSrc: string;
  linkHref: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ alt, imageSrc, linkHref }) => {
  return (
    <Link href={linkHref}>
      <Image
        width={16}
        height={16}
        alt={alt}
        className="h-4 w-4"
        src={imageSrc}
        priority
      />
    </Link>
  );
};

export default SocialLink;
